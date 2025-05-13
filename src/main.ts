import { renderReviews, renderFaq } from './modules/render';
import { initSlider } from './modules/slider';
import { setupFaqAccordion } from './modules/faq';
import { initForm } from './modules/form';
import { initDrawer } from './modules/drawer';

initDrawer();
renderReviews();
initSlider();
renderFaq();
setupFaqAccordion();
initForm();
