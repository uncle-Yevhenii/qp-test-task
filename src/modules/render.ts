import reviews from '../data/review.json' assert { type: 'json' };
import faq from '../data/faq.json' assert { type: 'json' };

const START_INDEX = 0;

const faqRoot = document.querySelector<HTMLUListElement>('#faq-root')!;
const reviewRoot = document.querySelector<HTMLUListElement>('#review-root')!;
const reviewId = document.querySelector<HTMLParagraphElement>('#review-id')!;

export function renderReviews() {
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
        <svg class="review-icon" viewBox="0 0 35 30">...</svg>
        <blockquote class="review-blockquote">${review.review}</blockquote>
        `;
        reviewRoot.appendChild(li);
    });
}

export function renderFaq() {
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
          </div>`;
        faqRoot.appendChild(li);
    });
}
