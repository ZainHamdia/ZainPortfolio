/**
 * Zain Hamdia - Engineering Portfolio UI Logic
 * Dynamic rendering, project filtering, modal deep dives, theme switcher, and scrollspy
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderHeroHUD();
  renderProjects('all');
  renderSkills('mechanical');
  renderTimeline();
  initProjectFilters();
  initSkillTabs();
  initModalHandlers();
});

/* ==========================================================================
   Theme Switcher (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('zh-theme') || (prefersDark ? 'dark' : 'dark'); // default dark

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('zh-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* ==========================================================================
   Navigation & Scrollspy
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
    });
  });

  // Scrollspy
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Hero HUD & Live Telemetry
   ========================================================================== */
function renderHeroHUD() {
  const statsContainer = document.getElementById('hud-stats-container');
  if (!statsContainer || !PORTFOLIO_DATA.profile.stats) return;

  statsContainer.innerHTML = PORTFOLIO_DATA.profile.stats.map(s => `
    <div class="hud-stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-desc">${s.desc}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   Project Rendering & Filtering
   ========================================================================== */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => {
    const isFeatured = p.id === 'zainiac-19' || p.id === 'joseph-henry-project';
    return `
      <article class="project-card ${isFeatured ? 'featured-card' : ''}" data-id="${p.id}">
        <div>
          <div class="project-card-header">
            <span class="project-category-badge ${p.category}">${p.badge || p.category}</span>
            <span class="project-date font-mono">${p.date}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <div class="project-role font-mono">${p.role}</div>
          <p class="project-desc">${p.shortDescription}</p>
        </div>

        <div>
          <div class="project-specs-preview">
            ${p.specs.slice(0, 3).map(s => `<span class="spec-tag">${s.key}: ${s.val.split(' ')[0]}</span>`).join('')}
          </div>
          <div class="project-card-footer">
            <span class="font-mono" style="font-size: 0.78rem; color: var(--text-muted);">
              ID: //${p.id.toUpperCase().replace(/-/g, '_')}
            </span>
            <button class="btn-inspect" onclick="openProjectModal('${p.id}')">
              <span>Inspect Specs</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

/* ==========================================================================
   Skills Matrix Tabs
   ========================================================================== */
function renderSkills(category = 'mechanical') {
  const container = document.getElementById('skills-panel');
  if (!container || !PORTFOLIO_DATA.skills[category]) return;

  const skillsList = PORTFOLIO_DATA.skills[category];
  container.innerHTML = skillsList.map(s => `
    <div class="skill-bar-card">
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct font-mono">${s.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" style="width: ${s.level}%;"></div>
      </div>
    </div>
  `).join('');
}

function initSkillTabs() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-skill-cat');
      renderSkills(category);
    });
  });
}

/* ==========================================================================
   Timeline Rendering
   ========================================================================== */
function renderTimeline() {
  const timelineEl = document.getElementById('timeline-container');
  if (!timelineEl || !PORTFOLIO_DATA.timeline) return;

  timelineEl.innerHTML = PORTFOLIO_DATA.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-node">
        <div class="timeline-node-inner"></div>
      </div>
      <div class="timeline-card">
        <div class="timeline-header">
          <span class="timeline-year">${item.year}</span>
          <span class="timeline-cat">${item.category}</span>
        </div>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Modal Dialog (Case Study & Engineering Spec Sheet)
   ========================================================================== */
function initModalHandlers() {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('btn-close-modal');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const backdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalBody = document.getElementById('modal-body-content');

  if (!backdrop || !modalTitle || !modalBody) return;

  modalTitle.textContent = project.title;
  modalBadge.textContent = `[${project.category.toUpperCase()}] • ${project.date} • ${project.role}`;

  modalBody.innerHTML = `
    <div class="modal-section-heading">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      Executive Technical Overview
    </div>
    <div class="modal-text">${project.fullDescription}</div>

    <div class="modal-section-heading">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
      Key Technical Milestones & Achievements
    </div>
    <ul class="modal-highlights-list">
      ${project.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>

    <div class="modal-section-heading">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
      Subsystem Technical Specifications
    </div>
    <table class="spec-table">
      <tbody>
        ${project.specs.map(s => `
          <tr>
            <td>${s.key}</td>
            <td>${s.val}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const backdrop = document.getElementById('project-modal');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// Global hook for inline onclick attributes
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;
