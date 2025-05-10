import Siema from 'siema';
import reviews from './data/review.json' assert { type: 'json' };
import faq from './data/faq.json' assert { type: 'json' };

const START_INDEX = 0;

const reviewRoot = document.querySelector<HTMLUListElement>('#review-root')!;
const reviewId = document.querySelector<HTMLParagraphElement>('#review-id')!;
const faqRoot = document.querySelector<HTMLUListElement>('#faq-root')!;

reviewId.innerHTML = `${START_INDEX + 1} / ${reviews.data.length}`;

reviews.data.forEach((review) => {
    const li = document.createElement('li');
    li.className = 'review-item';

    li.innerHTML = `
    <picture class="review-picture">
        <source srcset="${review.img.src2x} 2x, ${review.img.src1x} 1x" />
        <img src="${review.img.src1x}" alt="${review.img.alt}" />
    </picture>
    <h3 class="review-name">${review.name}</h3>
    <p class="review-role">${review.role}</p>
    <svg class="review-icon" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.373 0.5V12.7568C14.373 17.2341 13.1449 20.7926 10.9219 23.4277C8.70052 26.0609 5.52449 27.7261 1.71094 28.4902L1.11328 28.6104V21.8262L1.49707 21.7354C3.69465 21.2115 5.1912 20.1767 6.14551 18.8096C7.02517 17.5493 7.47067 15.9661 7.53906 14.1533H0.5V0.5H14.373ZM34.5 0.5V12.7568C34.4999 17.2316 33.2986 20.7904 31.0879 23.4268C28.8784 26.0616 25.7013 27.7263 21.8369 28.4902L21.2402 28.6084V21.8262L21.624 21.7354C23.8216 21.2115 25.3182 20.1767 26.2725 18.8096C27.1521 17.5493 27.5976 15.9661 27.666 14.1533H20.627V0.5H34.5Z" />
    </svg>
    <blockquote class="review-blockquote">${review.review}</blockquote>
`;

    reviewRoot.appendChild(li);
});

faq.data.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'faq-item';

    li.innerHTML = `
      <button class="faq-question" aria-expanded="false">
        <span class="faq-question-text">${item.question}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-content">${item.answer}</div>
      </div>
    `;

    faqRoot.appendChild(li);
});

const closeOtherAccordions = (activeBtn: HTMLButtonElement) => {
    const allButtons = faqRoot.querySelectorAll<HTMLButtonElement>(
        '.faq-question[aria-expanded="true"]'
    );

    allButtons.forEach((btn) => {
        if (btn !== activeBtn) {
            const answer = btn.nextElementSibling as HTMLElement;

            const currentHeight = answer.offsetHeight;
            answer.style.height = `${currentHeight}px`;

            answer.classList.remove('open');

            setTimeout(() => {
                answer.style.height = '0';
                btn.setAttribute('aria-expanded', 'false');
                btn.querySelector('.faq-icon')!.textContent = '+';
            }, 10);
        }
    });
};

faqRoot.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const btn = target.closest<HTMLButtonElement>('.faq-question');

    if (btn) {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const answer = btn.nextElementSibling as HTMLElement;
        const answerContent = answer.querySelector('.faq-answer-content') as HTMLElement;

        if (expanded) {
            const currentHeight = answer.offsetHeight;
            answer.style.height = `${currentHeight}px`;

            answer.classList.remove('open');

            setTimeout(() => {
                answer.style.height = '0';
                btn.setAttribute('aria-expanded', 'false');
                btn.querySelector('.faq-icon')!.textContent = '+';
            }, 10);
        } else {
            closeOtherAccordions(btn);

            btn.setAttribute('aria-expanded', 'true');
            btn.querySelector('.faq-icon')!.textContent = '–';

            answer.classList.add('measuring');
            answerContent.style.position = 'absolute';
            answerContent.style.visibility = 'hidden';
            answerContent.style.display = 'block';

            const answerHeight = answerContent.offsetHeight;

            answerContent.style.position = '';
            answerContent.style.visibility = '';
            answerContent.style.display = '';
            answer.classList.remove('measuring');

            answer.style.height = '0';

            answer.classList.add('open');

            setTimeout(() => (answer.style.height = `${answerHeight + 24}px`), 10);
        }
    }
});

const siema = new Siema({
    selector: '#review-root',
    duration: 200,
    easing: 'ease-out',
    draggable: false,
    startIndex: START_INDEX,
});
document.querySelector<HTMLButtonElement>('#btn-prev')?.addEventListener('click', () => {
    siema.prev();
    reviewId.innerHTML = `${siema.currentSlide + 1} / ${reviews.data.length}`;
});
document.querySelector<HTMLButtonElement>('#btn-next')?.addEventListener('click', () => {
    siema.next();
    reviewId.innerHTML = `${siema.currentSlide + 1} / ${reviews.data.length}`;
});
