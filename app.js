const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const themeToggle = document.querySelector('.theme-toggle');

menuToggle?.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.primary-nav a').forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

themeToggle?.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Toggle dark mode');
  themeToggle.textContent = dark ? '☀' : '◐';
});

const checklistButton = document.querySelector('#checklist-btn');
const result = document.querySelector('#checklist-result');
checklistButton?.addEventListener('click', () => {
  const checks = ['Semantic HTML', 'Mobile-first CSS', 'Grid/Flexbox layout', 'Keyboard-friendly navigation', 'Responsive menu', 'Interactive JavaScript'];
  result.hidden = false;
  result.innerHTML = `<strong>Checklist passed ✓</strong><br>${checks.join(' · ')}`;
});

const sections = [...document.querySelectorAll('main section[id]')];
const sideLinks = [...document.querySelectorAll('.side-link')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    sideLinks.forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));
