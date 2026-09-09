/**
 * Zain Hamdia - Engineering Portfolio UI Script
 * Theme switcher and mobile navigation handling across all pages
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
});

/* Theme Switcher */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('zh_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('zh_theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? 'Light' : 'Dark';
    }
  }
}

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
