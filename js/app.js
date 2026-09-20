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
  initLineageTabs();
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

/* Interactive Tab Switcher for Zainiac Generation Lineage */
function initLineageTabs() {
  const tabBtns = document.querySelectorAll('.lineage-tab-btn');
  const panels = document.querySelectorAll('.lineage-panel');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetGen = btn.getAttribute('data-gen');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const activePanel = document.getElementById(`panel-${targetGen}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}
