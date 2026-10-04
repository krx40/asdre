// Asdré — Coming Soon
// Mobile menu and scroll-in animations.

// ---------- Mobile menu ----------
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuBtn.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});

// Close the menu after choosing a section
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

// Close the menu with the Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') setMenu(false);
});

// ---------- Reveal sections on scroll ----------
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// ---------- Hero video ----------
// Some phones block autoplay until the page is touched; start it then.
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  const tryPlay = () => heroVideo.play().catch(() => {});
  tryPlay();
  document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
}
