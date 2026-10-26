// Small interaction polish: reveal content gently as sections enter the viewport.
const revealTargets = document.querySelectorAll(
  '.work-card, .about-content, .contact h2'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element) => observer.observe(element));
}
