/**
 * Zain Hamdia - Engineering Portfolio
 * Minimal theme switcher and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check preference or saved theme
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
