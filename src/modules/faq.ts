// const faqRoot = document.querySelector<HTMLUListElement>('#faq-root')!;
// const allButtons = faqRoot.querySelectorAll<HTMLButtonElement>(
//     '.faq-question[aria-expanded="true"]'
// );

// export function setupFaqAccordion() {
//     const closeOtherAccordions = (activeBtn: HTMLButtonElement) => {
//         allButtons.forEach((btn) => {
//             if (btn !== activeBtn) {
//                 const answer = btn.nextElementSibling as HTMLElement;
//                 const currentHeight = answer.offsetHeight;
//                 answer.style.height = `${currentHeight}px`;
//                 answer.classList.remove('open');
//                 setTimeout(() => {
//                     answer.style.height = '0';
//                     btn.setAttribute('aria-expanded', 'false');
//                     btn.querySelector('.faq-icon')!.textContent = '+';
//                 }, 10);
//             }
//         });
//     };

//     faqRoot.addEventListener('click', (event) => {
//         const target = event.target as HTMLElement;
//         const btn = target.closest<HTMLButtonElement>('.faq-question');

//         if (btn) {
//             const expanded = btn.getAttribute('aria-expanded') === 'true';
//             const answer = btn.nextElementSibling as HTMLElement;
//             const answerContent = answer.querySelector('.faq-answer-content') as HTMLElement;

//             if (expanded) {
//                 const currentHeight = answer.offsetHeight;
//                 answer.style.height = `${currentHeight}px`;
//                 answer.classList.remove('open');
//                 setTimeout(() => {
//                     answer.style.height = '0';
//                     btn.setAttribute('aria-expanded', 'false');
//                     btn.querySelector('.faq-icon')!.textContent = '+';
//                 }, 10);
//             } else {
//                 closeOtherAccordions(btn);

//                 btn.setAttribute('aria-expanded', 'true');
//                 btn.querySelector('.faq-icon')!.textContent = '–';

//                 answer.classList.add('measuring');
//                 answerContent.style.position = 'absolute';
//                 answerContent.style.visibility = 'hidden';
//                 answerContent.style.display = 'block';

//                 const answerHeight = answerContent.offsetHeight;

//                 answerContent.style.position = '';
//                 answerContent.style.visibility = '';
//                 answerContent.style.display = '';
//                 answer.classList.remove('measuring');

//                 answer.style.height = '0';
//                 answer.classList.add('open');
//                 setTimeout(() => (answer.style.height = `${answerHeight + 24}px`), 10);
//             }
//         }
//     });
// }
