/**
 * Zain Hamdia — Interactive Portfolio Controls
 * Powers interactive robot kinematics, flight yoke simulation, and Station 46 display preview
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initLineageTabs();
  initZ19Interactive();
  initZ21Interactive();
  initZ25Interactive();
  initFlightYokeInteractive();
  initStationDisplayInteractive();
});

/* Mobile Navigation */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
}

/* Generation Tab Switcher */
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
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* Zainiac 19 Interactive Kinematics (Neck Pan, Waist Pan, Opposing Straight Arms) */
function initZ19Interactive() {
  const slider = document.getElementById('z19-kinematics-slider');
  const demoBtn = document.getElementById('z19-demo-btn');
  if (!slider) return;

  const headGroup = document.getElementById('z19-head-group');
  const leftArm = document.getElementById('z19-left-arm');
  const rightArm = document.getElementById('z19-right-arm');
  const waistInd = document.getElementById('z19-waist-ind');

  function updateZ19(val) {
    const v = parseFloat(val); // -40 to 40
    if (headGroup) {
      headGroup.setAttribute('transform', `translate(${v * 0.35}, 0)`);
    }
    if (waistInd) {
      waistInd.setAttribute('transform', `translate(${v * 0.25}, 0)`);
    }
    // Straight rigid arms (no elbow bend) swinging in opposite directions
    if (leftArm) {
      leftArm.setAttribute('transform', `rotate(${v * 0.65} 286 130)`);
    }
    if (rightArm) {
      rightArm.setAttribute('transform', `rotate(${-v * 0.65} 434 130)`);
    }
  }

  slider.addEventListener('input', e => updateZ19(e.target.value));

  let animId = null;
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
        demoBtn.classList.remove('active');
        demoBtn.textContent = 'Animate Motion';
        return;
      }
      demoBtn.classList.add('active');
      demoBtn.textContent = 'Stop Animation';
      let t = 0;
      function loop() {
        t += 0.04;
        const val = Math.sin(t) * 35;
        slider.value = val;
        updateZ19(val);
        animId = requestAnimationFrame(loop);
      }
      loop();
    });
  }
}

/* Zainiac 21 Interactive Linkage */
function initZ21Interactive() {
  const slider = document.getElementById('z21-linkage-slider');
  if (!slider) return;
  const leftLink = document.getElementById('z21-left-link');
  const rightLink = document.getElementById('z21-right-link');

  slider.addEventListener('input', e => {
    const v = parseFloat(e.target.value);
    if (leftLink) leftLink.setAttribute('transform', `rotate(${v * 0.5} 280 125)`);
    if (rightLink) rightLink.setAttribute('transform', `rotate(${-v * 0.5} 440 125)`);
  });
}

/* Zainiac 25 Interactive Animatronic Head (Eyes, Jaw, Neck Tilt) */
function initZ25Interactive() {
  const eyeSlider = document.getElementById('z25-eye-slider');
  const jawSlider = document.getElementById('z25-jaw-slider');
  const neckSlider = document.getElementById('z25-neck-slider');
  const demoBtn = document.getElementById('z25-demo-btn');
  if (!eyeSlider) return;

  const leftIris = document.getElementById('z25-left-iris');
  const rightIris = document.getElementById('z25-right-iris');
  const jawGroup = document.getElementById('z25-jaw-group');
  const headCage = document.getElementById('z25-head-cage');

  function updateZ25() {
    const eyeX = parseFloat(eyeSlider.value); // -10 to 10
    const jawY = parseFloat(jawSlider.value); // 0 to 18
    const neckDeg = parseFloat(neckSlider ? neckSlider.value : 0); // -6 to 6

    if (leftIris) leftIris.setAttribute('transform', `translate(${eyeX}, 0)`);
    if (rightIris) rightIris.setAttribute('transform', `translate(${eyeX}, 0)`);
    if (jawGroup) jawGroup.setAttribute('transform', `translate(0, ${jawY})`);
    if (headCage) headCage.setAttribute('transform', `rotate(${neckDeg} 360 280)`);
  }

  eyeSlider.addEventListener('input', updateZ25);
  jawSlider.addEventListener('input', updateZ25);
  if (neckSlider) neckSlider.addEventListener('input', updateZ25);

  let animId = null;
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
        demoBtn.classList.remove('active');
        demoBtn.textContent = 'Run Servo Demo';
        return;
      }
      demoBtn.classList.add('active');
      demoBtn.textContent = 'Stop Demo';
      let t = 0;
      function loop() {
        t += 0.05;
        eyeSlider.value = Math.sin(t) * 9;
        jawSlider.value = (Math.sin(t * 2.2) + 1) * 7.5;
        if (neckSlider) neckSlider.value = Math.cos(t * 0.7) * 4;
        updateZ25();
        animId = requestAnimationFrame(loop);
      }
      loop();
    });
  }
}

/* Flight Simulator Interactive Yoke */
function initFlightYokeInteractive() {
  const rollSlider = document.getElementById('yoke-roll-slider');
  const pitchSlider = document.getElementById('yoke-pitch-slider');
  if (!rollSlider || !pitchSlider) return;

  const yokeWheel = document.getElementById('yoke-wheel-group');
  const yokeShaft = document.getElementById('yoke-shaft-group');
  const readout = document.getElementById('yoke-readout');

  function updateYoke() {
    const roll = parseFloat(rollSlider.value); // -45 to 45
    const pitch = parseFloat(pitchSlider.value); // -25 to 25
    if (yokeWheel) {
      yokeWheel.setAttribute('transform', `translate(${pitch}, 0) rotate(${roll} 500 105)`);
    }
    if (yokeShaft) {
      yokeShaft.setAttribute('transform', `translate(${pitch}, 0)`);
    }
    if (readout) {
      readout.textContent = `Roll: ${roll > 0 ? '+' : ''}${roll}° • Pitch: ${pitch > 0 ? '+' : ''}${pitch}mm`;
    }
  }

  rollSlider.addEventListener('input', updateYoke);
  pitchSlider.addEventListener('input', updateYoke);
}

/* Station 46 11" Display Interactive Screen Switcher */
function initStationDisplayInteractive() {
  const modeBtns = document.querySelectorAll('.station-mode-btn');
  if (!modeBtns.length) return;

  const titleEl = document.getElementById('station-screen-title');
  const subEl = document.getElementById('station-screen-sub');
  const graphicEl = document.getElementById('station-screen-graphic');

  const modes = {
    radar: {
      title: 'LIVE DOPPLER RADAR — SOMERSET COUNTY',
      sub: 'Wind: 12 mph NW • Visibility: 10 mi • No Active Warnings',
      color: '#10b981'
    },
    dispatch: {
      title: 'STATION 46 ACTIVE DISPATCH FEED',
      sub: 'Engine 46 & Tower 46 Ready • Montgomery Twp Fire Co. #2',
      color: '#ef4444'
    },
    comms: {
      title: 'STATION BULLETIN & CREW SCHEDULE',
      sub: 'Weekly Drill: Tuesday 19:00 • Junior Program Check-In',
      color: '#f59e0b'
    }
  };

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = modes[btn.getAttribute('data-mode')];
      if (!mode) return;
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (titleEl) titleEl.textContent = mode.title;
      if (subEl) subEl.textContent = mode.sub;
      if (graphicEl) graphicEl.setAttribute('stroke', mode.color);
    });
  });
}
