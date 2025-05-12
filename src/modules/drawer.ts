const toggleBtn = document.querySelector<HTMLButtonElement>('#menu-toggle')!;
const drawer = document.querySelector<HTMLElement>('#drawer')!;
const overlay = document.querySelector<HTMLDivElement>('#drawer-overlay')!;

export function initDrawer() {
    const openDrawer = () => {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', openDrawer);
    overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            closeDrawer();
        }
    });
}

document.addEventListener('DOMContentLoaded', initDrawer);
