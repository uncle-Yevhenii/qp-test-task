import Siema from 'siema';
import reviews from '../data/review.json' assert { type: 'json' };

const reviewId = document.querySelector<HTMLParagraphElement>('#review-id')!;
const buttonPrev = document.querySelector<HTMLButtonElement>('#btn-prev')!;
const buttonNext = document.querySelector<HTMLButtonElement>('#btn-next')!;

export function initSlider() {
    const siema = new Siema({
        selector: '#review-root',
        duration: 200,
        easing: 'ease-out',
        draggable: false,
        startIndex: 0,
        loop: true,
    });

    buttonPrev?.addEventListener('click', () => {
        siema.prev();
        reviewId.innerHTML = `${siema.currentSlide + 1} / ${reviews.data.length}`;
    });

    buttonNext?.addEventListener('click', () => {
        siema.next();
        reviewId.innerHTML = `${siema.currentSlide + 1} / ${reviews.data.length}`;
    });
}
