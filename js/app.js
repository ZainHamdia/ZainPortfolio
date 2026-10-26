/**
 * Zain Hamdia — Interactive Portfolio Controls
 * Powers interactive robot kinematics, 7-servo animatronic head demo,
 * dual-axis flight yoke simulation, and Station 46 Raspberry Pi display preview.
 */

function initPortfolioApp() {
  if (window.__zainPortfolioInitialized) return;
  window.__zainPortfolioInitialized = true;

  initMobileNav();
  initLineageTabs();
  initZ19Interactive();
  initZ21Interactive();
  initZ25Interactive();
  initFlightYokeInteractive();
  initPrincetonDccSwitchInteractive();
  initStationDisplayInteractive();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioApp);
} else {
  initPortfolioApp();
}

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

/* Generation Tab Switcher (Robotics Page) */
function initLineageTabs() {
  const tabBtns = document.querySelectorAll('.lineage-tab-btn[data-gen]');
  const panels = document.querySelectorAll('.lineage-panel');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetGen = btn.getAttribute('data-gen');
      if (!targetGen) return;

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`panel-${targetGen}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* ==========================================================================
   PANEL 1: Zainiac 19 Interactive Kinematics
   (Neck Pan, Waist Pan, Opposing Straight Rigid Arms)
   ========================================================================== */
function initZ19Interactive() {
  const slider = document.getElementById('z19-kinematics-slider');
  const demoBtn = document.getElementById('z19-demo-btn');
  if (!slider) return;

  const upperTorso = document.getElementById('z19-upper-torso');
  const headGroup = document.getElementById('z19-head-group');
  const pupils = document.getElementById('z19-pupils');
  const leftArm = document.getElementById('z19-left-arm');
  const rightArm = document.getElementById('z19-right-arm');
  const waistInd = document.getElementById('z19-waist-ind');
  const readout = document.getElementById('z19-readout');

  let animId = null;

  function stopAnim() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
    if (demoBtn) {
      demoBtn.classList.remove('active');
      demoBtn.textContent = '▶ Animate Motion';
    }
  }

  function updateZ19(rawVal) {
    const v = parseFloat(rawVal) || 0; // -40 to 40

    // Waist pans horizontally (shifts upper torso + moves waist track indicator)
    if (upperTorso) {
      upperTorso.setAttribute('transform', `translate(${(v * 0.22).toFixed(2)}, 0)`);
    }
    if (waistInd) {
      waistInd.setAttribute('transform', `translate(${(v * 0.45).toFixed(2)}, 0)`);
    }

    // Neck pans horizontally relative to torso + subtle googly eye shift
    if (headGroup) {
      headGroup.setAttribute('transform', `translate(${(v * 0.34).toFixed(2)}, 0)`);
    }
    if (pupils) {
      pupils.setAttribute('transform', `translate(${(v * 0.08).toFixed(2)}, 0)`);
    }

    // Opposing straight rigid arms (elbows never bend) pivoting at shoulder brackets
    if (leftArm) {
      leftArm.setAttribute('transform', `rotate(${(v * 0.65).toFixed(2)} 259 100)`);
    }
    if (rightArm) {
      rightArm.setAttribute('transform', `rotate(${(v * 0.65).toFixed(2)} 441 100)`);
    }

    if (readout) {
      const neckDeg = Math.round(v * 0.75);
      const waistDeg = Math.round(v * 0.5);
      const armDeg = Math.round(Math.abs(v * 0.65));
      readout.textContent = `Neck: ${neckDeg > 0 ? '+' : ''}${neckDeg}° • Waist: ${waistDeg > 0 ? '+' : ''}${waistDeg}° • Arms: ±${armDeg}°`;
    }
  }

  slider.addEventListener('input', e => {
    if (animId) stopAnim();
    updateZ19(e.target.value);
  });

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      if (animId) {
        stopAnim();
        return;
      }
      demoBtn.classList.add('active');
      demoBtn.textContent = '■ Stop Animation';
      let t = Math.asin(Math.max(-1, Math.min(1, (parseFloat(slider.value) || 0) / 36))) || 0;

      function loop() {
        t += 0.045;
        const val = Math.sin(t) * 36;
        slider.value = val.toFixed(1);
        updateZ19(val);
        animId = requestAnimationFrame(loop);
      }
      loop();
    });
  }

  updateZ19(slider.value);
}

/* ==========================================================================
   PANEL 2: Zainiac 21 Interactive (~4.5 ft White 3D-Printed, LEGO Mindstorms)
   (Motorized Moving Jaw, Rotating Neck, Independent Left & Right Arm Swing)
   ========================================================================== */
function initZ21Interactive() {
  const jawSlider = document.getElementById('z21-jaw-slider');
  const neckSlider = document.getElementById('z21-neck-slider');
  const leftArmSlider = document.getElementById('z21-left-arm-slider');
  const rightArmSlider = document.getElementById('z21-right-arm-slider');
  const demoBtn = document.getElementById('z21-demo-btn');
  if (!jawSlider) return;

  const jawGroup = document.getElementById('z21-jaw-group');
  const headGroup = document.getElementById('z21-head-group');
  const leftArm = document.getElementById('z21-left-link');
  const rightArm = document.getElementById('z21-right-link');
  const readout = document.getElementById('z21-readout');

  let animId = null;

  function stopAnim() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
    if (demoBtn) {
      demoBtn.classList.remove('active');
      demoBtn.textContent = '▶ Animate Mindstorms';
    }
  }

  function updateZ21() {
    const jawVal = parseFloat(jawSlider.value) || 0; // 0 to 14
    const neckVal = parseFloat(neckSlider ? neckSlider.value : 0) || 0; // -35 to 35
    const leftVal = parseFloat(leftArmSlider ? leftArmSlider.value : 0) || 0; // -40 to 40
    const rightVal = parseFloat(rightArmSlider ? rightArmSlider.value : 0) || 0; // -40 to 40

    if (jawGroup) {
      jawGroup.setAttribute('transform', `translate(0, ${(jawVal * 0.55).toFixed(2)})`);
    }
    if (headGroup) {
      headGroup.setAttribute('transform', `translate(${(neckVal * 0.35).toFixed(2)}, 0)`);
    }
    if (leftArm) {
      leftArm.setAttribute('transform', `rotate(${(leftVal * 0.7).toFixed(2)} 261 94)`);
    }
    if (rightArm) {
      rightArm.setAttribute('transform', `rotate(${(-rightVal * 0.7).toFixed(2)} 419 94)`);
    }
    if (readout) {
      const jawDeg = Math.round(jawVal * 2);
      const neckDeg = Math.round(neckVal);
      const lDeg = Math.round(leftVal);
      const rDeg = Math.round(rightVal);
      readout.textContent = `Jaw: ${jawDeg}° • Neck: ${neckDeg > 0 ? '+' : ''}${neckDeg}° • L Arm: ${lDeg > 0 ? '+' : ''}${lDeg}° • R Arm: ${rDeg > 0 ? '+' : ''}${rDeg}°`;
    }
  }

  [jawSlider, neckSlider, leftArmSlider, rightArmSlider].forEach(s => {
    if (s) {
      s.addEventListener('input', () => {
        if (animId) stopAnim();
        updateZ21();
      });
    }
  });

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      if (animId) {
        stopAnim();
        return;
      }
      demoBtn.classList.add('active');
      demoBtn.textContent = '■ Stop Animation';
      let t = 0;
      function loop() {
        t += 0.045;
        jawSlider.value = ((Math.sin(t * 2.2) + 1) * 6.5).toFixed(1);
        if (neckSlider) neckSlider.value = (Math.sin(t * 0.85) * 30).toFixed(1);
        // Independent frequencies for left and right arms to demonstrate independent swing
        if (leftArmSlider) leftArmSlider.value = (Math.sin(t * 1.1) * 35).toFixed(1);
        if (rightArmSlider) rightArmSlider.value = (Math.cos(t * 1.5) * 35).toFixed(1);
        updateZ21();
        animId = requestAnimationFrame(loop);
      }
      loop();
    });
  }

  updateZ21();
}

/* ==========================================================================
   PANEL 3: Zainiac 25 ("Noggin") 7-Servo Animatronic Head Demo
   (4 Eye Servos: L/R Pan + U/D Tilt, 1 Jaw Servo: D-Paddle, 2 Base Neck Servos: L/R Roll + U/D Pitch)
   ========================================================================== */
function initZ25Interactive() {
  const eyeSlider = document.getElementById('z25-eye-slider');
  const eyeTiltSlider = document.getElementById('z25-eye-tilt-slider');
  const jawSlider = document.getElementById('z25-jaw-slider');
  const neckSlider = document.getElementById('z25-neck-slider');
  const neckPitchSlider = document.getElementById('z25-neck-pitch-slider');
  const demoBtn = document.getElementById('z25-demo-btn');
  if (!eyeSlider || !jawSlider) return;

  const leftIris = document.getElementById('z25-left-iris');
  const rightIris = document.getElementById('z25-right-iris');
  const leftEyeLink1 = document.getElementById('z25-left-eye-link');
  const leftEyeLink2 = document.getElementById('z25-left-eye-link2');
  const rightEyeLink1 = document.getElementById('z25-right-eye-link');
  const rightEyeLink2 = document.getElementById('z25-right-eye-link2');

  const jawGroup = document.getElementById('z25-jaw-group');
  const jawHorn = document.getElementById('z25-jaw-horn');
  const headCage = document.getElementById('z25-head-cage');
  const upperPitchGroup = document.getElementById('z25-upper-pitch-group');

  const neckHornLeft = document.getElementById('z25-neck-horn-left');
  const neckHornRight = document.getElementById('z25-neck-horn-right');
  const pushrodLeft = document.getElementById('z25-pushrod-left');
  const pushrodRight = document.getElementById('z25-pushrod-right');
  const ballLeftBot = document.getElementById('z25-ball-left-bot');
  const ballLeftTop = document.getElementById('z25-ball-left-top');
  const ballRightBot = document.getElementById('z25-ball-right-bot');
  const ballRightTop = document.getElementById('z25-ball-right-top');
  const arduinoLed = document.getElementById('z25-arduino-led');
  const readout = document.getElementById('z25-readout');

  let animId = null;

  function stopDemo() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
    if (demoBtn) {
      demoBtn.classList.remove('active');
      demoBtn.textContent = '▶ Run Servo Demo';
    }
  }

  function updateZ25(customEyeX, customJawY, customNeckRoll, customEyeTilt, customNeckPitch) {
    const eyeX = typeof customEyeX === 'number' ? customEyeX : (parseFloat(eyeSlider.value) || 0);
    const eyeTilt = typeof customEyeTilt === 'number' ? customEyeTilt : (eyeTiltSlider ? (parseFloat(eyeTiltSlider.value) || 0) : 0);
    const jawY = typeof customJawY === 'number' ? customJawY : (parseFloat(jawSlider.value) || 0);
    const neckRoll = typeof customNeckRoll === 'number' ? customNeckRoll : (neckSlider ? (parseFloat(neckSlider.value) || 0) : 0);
    const neckPitch = typeof customNeckPitch === 'number' ? customNeckPitch : (neckPitchSlider ? (parseFloat(neckPitchSlider.value) || 0) : 0);

    // SVG Y is positive downward, so positive eyeTilt (looking up) maps to negative SVG Y offset
    const eyeY = -eyeTilt;

    // 1. Move 3D-printed left & right irises horizontally (L/R) and vertically (Up/Down)
    if (leftIris) {
      leftIris.setAttribute('transform', `translate(${eyeX.toFixed(2)}, ${eyeY.toFixed(2)})`);
    }
    if (rightIris) {
      rightIris.setAttribute('transform', `translate(${eyeX.toFixed(2)}, ${eyeY.toFixed(2)})`);
    }

    // 2. Move the 4 overhead eye servo linkage arms (2 per eye: Pan L/R + Tilt Up/Down)
    if (leftEyeLink1) {
      leftEyeLink1.setAttribute('x1', (258 + eyeX * 0.35).toFixed(2));
      leftEyeLink1.setAttribute('x2', (274 + eyeX * 0.85).toFixed(2));
      leftEyeLink1.setAttribute('y2', (74 + eyeY * 0.85).toFixed(2));
    }
    if (leftEyeLink2) {
      leftEyeLink2.setAttribute('x1', (270 + eyeY * 0.35).toFixed(2));
      leftEyeLink2.setAttribute('y1', (56 + eyeY * 0.35).toFixed(2));
      leftEyeLink2.setAttribute('x2', (278 + eyeX * 0.85).toFixed(2));
      leftEyeLink2.setAttribute('y2', (74 + eyeY * 0.85).toFixed(2));
    }
    if (rightEyeLink1) {
      rightEyeLink1.setAttribute('x1', (442 + eyeX * 0.35).toFixed(2));
      rightEyeLink1.setAttribute('x2', (426 + eyeX * 0.85).toFixed(2));
      rightEyeLink1.setAttribute('y2', (74 + eyeY * 0.85).toFixed(2));
    }
    if (rightEyeLink2) {
      rightEyeLink2.setAttribute('x1', (430 + eyeY * 0.35).toFixed(2));
      rightEyeLink2.setAttribute('y1', (56 + eyeY * 0.35).toFixed(2));
      rightEyeLink2.setAttribute('x2', (422 + eyeX * 0.85).toFixed(2));
      rightEyeLink2.setAttribute('y2', (74 + eyeY * 0.85).toFixed(2));
    }

    // 3. Move Jaw Servo Horn & 3-Hole D-Shaped Jaw Paddle
    if (jawGroup) {
      jawGroup.setAttribute('transform', `translate(0, ${jawY.toFixed(2)})`);
    }
    if (jawHorn) {
      jawHorn.setAttribute('transform', `rotate(${(jawY * 2.4).toFixed(2)} 350 142)`);
    }

    // 4. Tilt 3D-Printed Head Cage in both Roll (L/R) and Pitch (Up/Down)
    const pitchShiftY = -neckPitch * 1.15;
    if (headCage) {
      headCage.setAttribute('transform', `translate(0, ${pitchShiftY.toFixed(2)}) rotate(${neckRoll.toFixed(2)} 350 254)`);
    }
    if (upperPitchGroup) {
      upperPitchGroup.setAttribute('transform', `translate(0, ${(neckPitch * 0.45).toFixed(2)})`);
    }

    // 5. Base Neck Servos & Metal Pushrod Linkages
    // Differential motion = Roll (L/R); Coupled same-direction motion = Pitch (Up/Down)
    const leftHornAngle = neckRoll * 2.0 + neckPitch * 2.0;
    const rightHornAngle = neckRoll * 2.0 - neckPitch * 2.0;
    if (neckHornLeft) {
      neckHornLeft.setAttribute('transform', `rotate(${leftHornAngle.toFixed(2)} 294 300)`);
    }
    if (neckHornRight) {
      neckHornRight.setAttribute('transform', `rotate(${rightHornAngle.toFixed(2)} 406 300)`);
    }

    // Calculate pushrod endpoints so pushrods stay connected during combined Roll + Pitch
    const rad = (neckRoll * Math.PI) / 180;
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad);

    // Upper left mount at (298, 222) rotated by neckRoll around (350, 254) + shifted by pitchShiftY
    const lx2 = 350 + (298 - 350) * cosA - (222 - 254) * sinA;
    const ly2 = 254 + (298 - 350) * sinA + (222 - 254) * cosA + pitchShiftY;
    const lx1 = 283;
    const ly1 = 298 - neckRoll * 0.45 - neckPitch * 0.5;

    // Upper right mount at (402, 222) rotated by neckRoll around (350, 254) + shifted by pitchShiftY
    const rx2 = 350 + (402 - 350) * cosA - (222 - 254) * sinA;
    const ry2 = 254 + (402 - 350) * sinA + (222 - 254) * cosA + pitchShiftY;
    const rx1 = 417;
    const ry1 = 298 + neckRoll * 0.45 - neckPitch * 0.5;

    if (pushrodLeft) {
      pushrodLeft.setAttribute('x1', lx1.toFixed(2));
      pushrodLeft.setAttribute('y1', ly1.toFixed(2));
      pushrodLeft.setAttribute('x2', lx2.toFixed(2));
      pushrodLeft.setAttribute('y2', ly2.toFixed(2));
    }
    if (ballLeftBot) {
      ballLeftBot.setAttribute('cx', lx1.toFixed(2));
      ballLeftBot.setAttribute('cy', ly1.toFixed(2));
    }
    if (ballLeftTop) {
      ballLeftTop.setAttribute('cx', lx2.toFixed(2));
      ballLeftTop.setAttribute('cy', ly2.toFixed(2));
    }

    if (pushrodRight) {
      pushrodRight.setAttribute('x1', rx1.toFixed(2));
      pushrodRight.setAttribute('y1', ry1.toFixed(2));
      pushrodRight.setAttribute('x2', rx2.toFixed(2));
      pushrodRight.setAttribute('y2', ry2.toFixed(2));
    }
    if (ballRightBot) {
      ballRightBot.setAttribute('cx', rx1.toFixed(2));
      ballRightBot.setAttribute('cy', ry1.toFixed(2));
    }
    if (ballRightTop) {
      ballRightTop.setAttribute('cx', rx2.toFixed(2));
      ballRightTop.setAttribute('cy', ry2.toFixed(2));
    }

    if (readout) {
      const ePan = Math.round(eyeX * 2.5);
      const eTilt = Math.round(eyeTilt * 2.5);
      const jawDeg = Math.round(jawY * 1.8);
      const hRoll = Math.round(neckRoll);
      const hPitch = Math.round(neckPitch);
      readout.textContent = `Eyes: ${ePan > 0 ? '+' : ''}${ePan}°, ${eTilt > 0 ? '+' : ''}${eTilt}° • Jaw: ${jawDeg}° • Head: ${hRoll > 0 ? '+' : ''}${hRoll}°, ${hPitch > 0 ? '+' : ''}${hPitch}°`;
    }
  }

  function onManualSliderInput() {
    if (animId) stopDemo();
    updateZ25();
  }

  eyeSlider.addEventListener('input', onManualSliderInput);
  if (eyeTiltSlider) eyeTiltSlider.addEventListener('input', onManualSliderInput);
  jawSlider.addEventListener('input', onManualSliderInput);
  if (neckSlider) neckSlider.addEventListener('input', onManualSliderInput);
  if (neckPitchSlider) neckPitchSlider.addEventListener('input', onManualSliderInput);

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      if (animId) {
        stopDemo();
        return;
      }
      demoBtn.classList.add('active');
      demoBtn.textContent = '■ Stop Servo Demo';
      let t = 0;

      function loop() {
        t += 0.05;
        const eyeX = Math.sin(t * 1.1) * 10.5;
        const eyeTilt = Math.cos(t * 1.55) * 7.5;
        const jawY = (Math.sin(t * 2.6) + 1) * 8.5;
        const neckRoll = Math.sin(t * 0.65) * 7.5;
        const neckPitch = Math.cos(t * 0.85) * 7.5;

        eyeSlider.value = eyeX.toFixed(1);
        if (eyeTiltSlider) eyeTiltSlider.value = eyeTilt.toFixed(1);
        jawSlider.value = jawY.toFixed(1);
        if (neckSlider) neckSlider.value = neckRoll.toFixed(1);
        if (neckPitchSlider) neckPitchSlider.value = neckPitch.toFixed(1);

        if (arduinoLed) {
          arduinoLed.setAttribute('fill', Math.sin(t * 6) > 0 ? '#4ade80' : '#22d3ee');
        }

        updateZ25(eyeX, jawY, neckRoll, eyeTilt, neckPitch);
        animId = requestAnimationFrame(loop);
      }
      loop();
    });
  }

  updateZ25();
}

/* ==========================================================================
   Aviation Page: Flight Simulator Interactive Yoke & 4-Section Throttle Quadrant
   ========================================================================== */
function initFlightYokeInteractive() {
  const rollSlider = document.getElementById('yoke-roll-slider');
  const pitchSlider = document.getElementById('yoke-pitch-slider');
  const quad1Slider = document.getElementById('quad-1-slider');
  const quad2Slider = document.getElementById('quad-2-slider');
  const quad3Slider = document.getElementById('quad-3-slider');
  const quad4Slider = document.getElementById('quad-4-slider');
  const demoBtn = document.getElementById('yoke-demo-btn');
  if (!rollSlider || !pitchSlider) return;

  const yokeWheel = document.getElementById('yoke-wheel-group');
  const yokeShaft = document.getElementById('yoke-shaft-group');
  const pitchSpring = document.getElementById('yoke-pitch-spring');
  const pitchPot = document.getElementById('yoke-pitch-pot');
  const rollPot = document.getElementById('yoke-roll-pot');

  const quadLevers = [
    document.getElementById('quad-lever-1'),
    document.getElementById('quad-lever-2'),
    document.getElementById('quad-lever-3'),
    document.getElementById('quad-lever-4')
  ];
  const quadPots = [
    { el: document.getElementById('quad-pot-1'), cx: 468, cy: 204 },
    { el: document.getElementById('quad-pot-2'), cx: 518, cy: 204 },
    { el: document.getElementById('quad-pot-3'), cx: 568, cy: 204 },
    { el: document.getElementById('quad-pot-4'), cx: 618, cy: 204 }
  ];
  const readout = document.getElementById('yoke-readout');

  let animId = null;

  function stopYokeAnim() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
    if (demoBtn) {
      demoBtn.classList.remove('active');
      demoBtn.textContent = '▶ Animate Controls';
    }
  }

  function updateYoke() {
    const roll = parseFloat(rollSlider.value) || 0; // -45 to 45
    const pitch = parseFloat(pitchSlider.value) || 0; // -20 to 20
    const qVals = [
      quad1Slider ? (parseFloat(quad1Slider.value) || 0) : 50,
      quad2Slider ? (parseFloat(quad2Slider.value) || 0) : 50,
      quad3Slider ? (parseFloat(quad3Slider.value) || 0) : 50,
      quad4Slider ? (parseFloat(quad4Slider.value) || 0) : 50
    ];

    if (yokeWheel) {
      yokeWheel.setAttribute('transform', `translate(${(pitch * 0.7).toFixed(2)}, 0) rotate(${roll.toFixed(2)} 296 128)`);
    }
    if (yokeShaft) {
      yokeShaft.setAttribute('transform', `translate(${(pitch * 0.7).toFixed(2)}, 0)`);
    }
    if (pitchSpring) {
      const scaleX = 1 + (pitch / 65);
      pitchSpring.setAttribute('transform', `translate(44, 0) scale(${scaleX.toFixed(3)}, 1) translate(-44, 0)`);
    }
    if (pitchPot) {
      pitchPot.setAttribute('transform', `rotate(${(pitch * 5.5).toFixed(1)} 72 166)`);
    }
    if (rollPot) {
      rollPot.setAttribute('transform', `rotate(${(roll * 2.6).toFixed(1)} 138 166)`);
    }

    // 4-Section Throttle Quadrant Levers & Individual Potentiometers
    qVals.forEach((val, idx) => {
      // 0% -> +18px down, 50% -> 0px, 100% -> -18px up
      const dy = (50 - val) * 0.36;
      const potAngle = (val - 50) * 2.4; // -120 deg to +120 deg
      if (quadLevers[idx]) {
        quadLevers[idx].setAttribute('transform', `translate(0, ${dy.toFixed(2)})`);
      }
      if (quadPots[idx].el) {
        quadPots[idx].el.setAttribute('transform', `rotate(${potAngle.toFixed(1)} ${quadPots[idx].cx} ${quadPots[idx].cy})`);
      }
    });

    if (readout) {
      const rRound = Math.round(roll);
      const pRound = Math.round(pitch);
      const qStr = qVals.map(v => `${Math.round(v)}%`).join(' / ');
      readout.textContent = `Roll: ${rRound > 0 ? '+' : ''}${rRound}° • Pitch: ${pRound > 0 ? '+' : ''}${pRound}mm • Quad: ${qStr}`;
    }
  }

  [rollSlider, pitchSlider, quad1Slider, quad2Slider, quad3Slider, quad4Slider].forEach(s => {
    if (s) {
      s.addEventListener('input', () => {
        if (animId) stopYokeAnim();
        updateYoke();
      });
    }
  });

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      if (animId) {
        stopYokeAnim();
        return;
      }
      demoBtn.classList.add('active');
      demoBtn.textContent = '■ Stop Animation';
      let t = 0;
      function loop() {
        t += 0.045;
        rollSlider.value = (Math.sin(t) * 38).toFixed(1);
        pitchSlider.value = (Math.cos(t * 0.7) * 16).toFixed(1);
        if (quad1Slider) quad1Slider.value = Math.round(50 + Math.sin(t * 0.9) * 42);
        if (quad2Slider) quad2Slider.value = Math.round(50 + Math.sin(t * 0.9 + 0.6) * 42);
        if (quad3Slider) quad3Slider.value = Math.round(50 + Math.cos(t * 1.1) * 40);
        if (quad4Slider) quad4Slider.value = Math.round(50 + Math.sin(t * 1.3 + 1.2) * 40);
        updateYoke();
        animId = requestAnimationFrame(loop);
      }
      loop();
    });
  }

  updateYoke();
}

/* ==========================================================================
   Fire Service Page: Station 46 11" Display Interactive Screen Switcher
   ========================================================================== */
function initStationDisplayInteractive() {
  const modeBtns = document.querySelectorAll('.station-mode-btn');
  const demoBtn = document.getElementById('station-demo-btn');
  if (!modeBtns.length) return;

  const titleEl = document.getElementById('station-screen-title');
  const subEl = document.getElementById('station-screen-sub');
  const graphicEl = document.getElementById('station-screen-graphic');
  const statusDot = document.getElementById('station-status-dot');
  const modePill = document.getElementById('station-mode-pill');
  const radarSweep = document.getElementById('station-radar-sweep');

  const modeOrder = ['radar', 'dispatch', 'comms'];
  const modes = {
    radar: {
      title: 'LIVE DOPPLER RADAR — SOMERSET COUNTY',
      sub: 'Wind: 12 mph NW • Visibility: 10 mi • No Active Warnings',
      pill: 'Mode 1/3 • Somerset County Doppler Radar & Wind Telemetry',
      color: '#10b981'
    },
    dispatch: {
      title: 'STATION 46 ACTIVE DISPATCH FEED',
      sub: 'Engine 46 & Tower 46 Ready • Montgomery Twp Fire Co. #2',
      pill: 'Mode 2/3 • Live Emergency Dispatch & Apparatus Status',
      color: '#ef4444'
    },
    comms: {
      title: 'STATION BULLETIN & CREW SCHEDULE',
      sub: 'Weekly Drill: Tuesday 19:00 • Junior Program Check-In',
      pill: 'Mode 3/3 • Station 46 Drill Schedule & Crew Communications',
      color: '#f59e0b'
    }
  };

  let cycleTimer = null;
  let currentIdx = 0;

  function applyMode(key) {
    const mode = modes[key];
    if (!mode) return;
    currentIdx = modeOrder.indexOf(key);

    modeBtns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-mode') === key);
    });
    if (titleEl) titleEl.textContent = mode.title;
    if (subEl) subEl.textContent = mode.sub;
    if (graphicEl) graphicEl.setAttribute('stroke', mode.color);
    if (statusDot) statusDot.setAttribute('fill', mode.color);
    if (modePill) modePill.textContent = mode.pill;
    if (radarSweep) radarSweep.setAttribute('stroke', mode.color);
  }

  function stopCycle() {
    if (cycleTimer) {
      clearInterval(cycleTimer);
      cycleTimer = null;
    }
    if (demoBtn) {
      demoBtn.classList.remove('active');
      demoBtn.textContent = '▶ Auto-Cycle Display';
    }
  }

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (cycleTimer) stopCycle();
      applyMode(btn.getAttribute('data-mode'));
    });
  });

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      if (cycleTimer) {
        stopCycle();
        return;
      }
      demoBtn.classList.add('active');
      demoBtn.textContent = '■ Stop Auto-Cycle';
      currentIdx = (currentIdx + 1) % modeOrder.length;
      applyMode(modeOrder[currentIdx]);
      cycleTimer = setInterval(() => {
        currentIdx = (currentIdx + 1) % modeOrder.length;
        applyMode(modeOrder[currentIdx]);
      }, 2200);
    });
  }

  // Live Station 46 Website Preview Tab Switcher (firestation46.pages.dev)
  const siteTabs = document.querySelectorAll('.station-site-tab[data-url]');
  const siteIframe = document.getElementById('station46-live-iframe');
  if (siteTabs.length && siteIframe) {
    siteTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetUrl = tab.getAttribute('data-url');
        if (!targetUrl) return;
        siteTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        siteIframe.setAttribute('src', targetUrl);
      });
    });
  }
}

/* ==========================================================================
   Aviation & Research Page: Princeton MAE 412 Modernized DCC Track Switch Thrower
   (Onboard ATmega328P + Dual 4700uF Trickle-Charged Capacitors)
   ========================================================================== */
function initPrincetonDccSwitchInteractive() {
  const dirBtn = document.getElementById('dcc-dir-btn');
  const trigBtn = document.getElementById('dcc-trig-btn');
  const doubleBtn = document.getElementById('dcc-double-btn');
  if (!dirBtn || !trigBtn) return;

  const readout = document.getElementById('dcc-readout');
  const mcuLed = document.getElementById('dcc-mcu-led');
  const dirPinLabel = document.getElementById('dcc-dir-pin-label');
  const trigPinLabel = document.getElementById('dcc-trig-pin-label');
  const cap1Fill = document.getElementById('dcc-cap1-fill');
  const cap2Fill = document.getElementById('dcc-cap2-fill');
  const cap1Pct = document.getElementById('dcc-cap1-pct');
  const cap2Pct = document.getElementById('dcc-cap2-pct');
  const pulseBar = document.getElementById('dcc-pulse-bar');
  const pulseText = document.getElementById('dcc-pulse-text');
  const dischargeWire = document.getElementById('dcc-discharge-wire');
  const railStraight = document.getElementById('dcc-rail-straight');
  const railTurnout = document.getElementById('dcc-rail-turnout');
  const switchBlade = document.getElementById('dcc-switch-blade');
  const trackStatus = document.getElementById('dcc-track-status');

  let isTurnout = false; // false = Straight (GREEN), true = Turnout (RED)
  let cap1 = 100;
  let cap2 = 100;

  function renderState(activePulseMsg) {
    const c1 = Math.round(cap1);
    const c2 = Math.round(cap2);

    // Update Capacitor 1 bar (max height 54 at y=68..122)
    if (cap1Fill) {
      const h1 = Math.max(2, (c1 / 100) * 54);
      cap1Fill.setAttribute('y', (122 - h1).toFixed(1));
      cap1Fill.setAttribute('height', h1.toFixed(1));
    }
    if (cap1Pct) cap1Pct.textContent = `${c1}%`;

    // Update Capacitor 2 bar (max height 54 at y=68..122)
    if (cap2Fill) {
      const h2 = Math.max(2, (c2 / 100) * 54);
      cap2Fill.setAttribute('y', (122 - h2).toFixed(1));
      cap2Fill.setAttribute('height', h2.toFixed(1));
    }
    if (cap2Pct) cap2Pct.textContent = `${c2}%`;

    if (dirPinLabel) {
      dirPinLabel.textContent = isTurnout ? 'DIR Pin: HIGH (Turnout)' : 'DIR Pin: LOW (Straight)';
      dirPinLabel.setAttribute('fill', isTurnout ? '#f87171' : '#4ade80');
    }

    if (railStraight && railTurnout) {
      railStraight.setAttribute('opacity', isTurnout ? '0.32' : '1');
      railTurnout.setAttribute('opacity', isTurnout ? '1' : '0.32');
    }

    if (switchBlade) {
      switchBlade.setAttribute('transform', isTurnout ? 'rotate(-16 508 175)' : 'rotate(0 508 175)');
    }

    if (trackStatus) {
      trackStatus.textContent = isTurnout
        ? 'ACTIVE PATH: TURNOUT (RED WIRE)'
        : 'ACTIVE PATH: STRAIGHT (GREEN WIRE)';
      trackStatus.setAttribute('fill', isTurnout ? '#f87171' : '#4ade80');
    }

    if (pulseText && !activePulseMsg) {
      pulseText.textContent = isTurnout
        ? 'Relay: N.O. (9) Turnout'
        : 'Relay: N.C. (11) Straight';
    }

    if (readout) {
      const modeName = isTurnout ? 'TURNOUT (Red)' : 'STRAIGHT (Green)';
      const readyStatus = (c1 >= 80 && c2 >= 80)
        ? 'Ready for 2 Rapid Throws'
        : (c1 >= 80 || c2 >= 80)
          ? '1 Cap Charged (Trickle-Charging...)'
          : 'Trickle-Charging (~12s Cycle)...';
      readout.textContent = `Track: ${modeName} • Cap 1: ${c1}% • Cap 2: ${c2}% • ${readyStatus}`;
    }
  }

  function triggerSwitchThrow(toggleFirst) {
    if (toggleFirst) {
      isTurnout = !isTurnout;
    }

    // Discharge whichever capacitor has higher stored charge (demonstrating dual-capacitor advantage)
    let usedCap = 'C1';
    if (cap1 >= cap2 && cap1 >= 25) {
      cap1 = Math.max(8, cap1 - 88);
      usedCap = 'C1 (4700µF)';
    } else if (cap2 >= 25) {
      cap2 = Math.max(8, cap2 - 88);
      usedCap = 'C3 (2nd 4700µF)';
    } else {
      cap1 = Math.max(5, cap1 - 30);
    }

    if (mcuLed) mcuLed.setAttribute('fill', '#4ade80');
    if (trigPinLabel) {
      trigPinLabel.textContent = 'TRIG Pin: PULSING 4N25';
      trigPinLabel.setAttribute('fill', '#fde047');
    }
    if (pulseBar) pulseBar.setAttribute('fill', '#fef08a');
    if (pulseText) pulseText.textContent = `Discharged ${usedCap}!`;
    if (dischargeWire) {
      dischargeWire.setAttribute('stroke', '#f59e0b');
      dischargeWire.setAttribute('stroke-width', '5');
    }

    renderState(true);

    setTimeout(() => {
      if (mcuLed) mcuLed.setAttribute('fill', '#ef4444');
      if (trigPinLabel) {
        trigPinLabel.textContent = 'TRIG Pin: IDLE';
        trigPinLabel.setAttribute('fill', '#38bdf8');
      }
      if (pulseBar) pulseBar.setAttribute('fill', '#e2e8f0');
      if (dischargeWire) {
        dischargeWire.setAttribute('stroke', '#64748b');
        dischargeWire.setAttribute('stroke-width', '3');
      }
      renderState(false);
    }, 550);
  }

  dirBtn.addEventListener('click', () => {
    isTurnout = !isTurnout;
    renderState(false);
  });

  trigBtn.addEventListener('click', () => {
    triggerSwitchThrow(false);
  });

  if (doubleBtn) {
    doubleBtn.addEventListener('click', () => {
      // Throw 1 immediately using Cap 1, then Throw 2 in swift succession (650ms later) using Cap 2
      triggerSwitchThrow(true);
      setTimeout(() => {
        triggerSwitchThrow(true);
      }, 650);
    });
  }

  // Continuous trickle-charge loop (~12 seconds for a full 0 -> 100% recharge)
  setInterval(() => {
    let changed = false;
    if (cap1 < 100) {
      cap1 = Math.min(100, cap1 + 1.7);
      changed = true;
    }
    if (cap2 < 100) {
      cap2 = Math.min(100, cap2 + 1.7);
      changed = true;
    }
    if (changed) {
      renderState(false);
    }
  }, 200);

  renderState(false);
}

