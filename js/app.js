/**
 * Zain Hamdia - Engineering Portfolio UI Script
 * Clean light aesthetic & mobile navigation handling across all pages
 */

document.addEventListener('DOMContentLoaded', () => {
  // Permanently enforce crisp, bright light theme
  document.documentElement.setAttribute('data-theme', 'light');
  try {
    localStorage.setItem('zh_theme', 'light');
  } catch (e) {}

  initMobileNav();
});

/* Mobile Menu Navigation */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
}
