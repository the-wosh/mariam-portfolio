const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Pause background video when the tab is hidden to save resources.
const heroVideo = document.querySelector('.hero__video');
document.addEventListener('visibilitychange', () => {
  if (!heroVideo) return;
  if (document.hidden) heroVideo.pause();
  else heroVideo.play().catch(() => {});
});
