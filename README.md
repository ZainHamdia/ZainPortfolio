# Zain Hamdia - Engineering Portfolio

> **High School Student • Aspiring Mechanical Engineer • Volunteer Firefighter**  
> Princeton Day School • Expected Graduation: 2027  
> Contact: [zaiham27@pds.org](mailto:zaiham27@pds.org)

A professional, multi-page engineering portfolio website highlighting Zain Hamdia's verified achievements, leadership, and projects across **Robotics & Maker Engineering**, **Aviation & Academic Research**, and **Volunteer Firefighting & Applied Technology**.

---

## Portfolio Pages & Structure

```
ZainSite/
├── index.html            # Home: Command hub, 3 disciplinary portals, and verified summary
├── robotics.html         # Robotics: Zainiac 19, 21, 25, International Maker Faires, VEX V5, Little Bot, N95 Masks
├── aviation.html         # Aviation & Research: 3D-Printed Flight Simulator, Princeton University LLP Research Internship
├── firefighting.html     # Firefighting: Montgomery Township VFC #2, Tech Intern (Dashboard & 3D Enclosure), Volunteer Firefighter
├── about.html            # About & Skills: Resume education, Technical skills matrix, Work experience, Leadership, 4 Articles
├── contact.html          # Contact: Inquiries desk and direct email
├── css/
│   └── styles.css        # Responsive design system with distinct visual themes per discipline + Info Gap UI
├── js/
│   ├── app.js            # Mobile navigation controller and interactive kinematics/simulations
│   └── projects-data.js  # Grounded structured data model strictly mapped to verified resume
└── README.md             # Project documentation & deployment guide
```

---

## Verified Core Focus Areas (Strictly Grounded in Resume)

1. **Robotics & Maker Innovation (`robotics.html`)**
   - ***Zainiac Series (19, 21, 25 / “Noggin”)***: Designed and fabricated personal humanoid and animatronic robots—from Zainiac 19 (~5 ft wood/PVC/paper-mâché humanoid on LEGO Mindstorms) and Zainiac 21 (~4.5 ft humanoid fully 3D printed in white using LEGO Mindstorms to move the jaw, rotate the neck, and swing each arm independently) to Zainiac 25 (“Noggin”), an entirely 3D-printed animatronic head that replaces 1980s pneumatics with 7 servo motors and linkage arms for smoother, cheaper, easier, and more programmable motion.
   - **International & Regional Maker Faires (Zainiac 19)**: Presented Zainiac 19 (the only robot in the series taken to public exhibitions) at Brussels (featured on Belgian national news and attended by Brussels government leadership), Philadelphia, Rochester, Cairo, and Tandem at Jefferson University.
   - ***Little Bot***: Designed a custom compact companion robot.
   - **VEX V5 Robotics Competition**: Co-President & Head of Design; Quarterfinalist (2026), 6th Place (2025) out of 40+ teams. Led CAD (Onshape), fabrication, and driver controls.
   - **COVID-19 N95 3D-Printed Masks**: Partnered with an open-source medical initiative to 3D print N95 reusable masks for a New York cancer center during PPE shortages.

2. **Aviation & Academic Research (`aviation.html`)**
   - **3D-Printed Flight Simulator**: Custom-designed and 3D-printed flight yoke using springs to stay centered across its axes, paired with a 4-section throttle quadrant—all connected to individual potentiometers.
   - **Princeton University Laboratory Learning Program (LLP)**: Summer 2025 research intern modernizing Princeton’s ~20-year-old MAE 412 DCC railroad track switch thrower with a trickle-charged capacitor (~12s charge cycle). Designed (~2 weeks) and hand-soldered (~1 week) a single-sided PCB adding an onboard ATMEGA-328P microprocessor (eliminating external connections for easier track automation) and a second 4700µF capacitor (enabling two switch throws in swift succession).

3. **Firefighting & Applied Technology (`firefighting.html`)**
   - **Montgomery Township Volunteer Fire Company #2**:
     - *Technology & Engineering Intern (Summer 2026–Present)*: Built a dedicated radio room digital operational dashboard running on Raspberry Pi and engineered a custom CAD-modeled 3D-printed 11-inch wall enclosure. Redesigned the public company website.
     - *Volunteer Firefighter (July 2025–Present)*: Active member participating in operational training, gear checks, and spearheading a modernization overhaul of the Junior Firefighter Program.

4. **About, Skills & Experience (`about.html`)**
   - **Education**: Princeton Day School (Expected Graduation: 2027), Aspiring Mechanical Engineer.
   - **Technical Skills**: Programming (Python, C++, Java, JavaScript, HTML/CSS), Design & CAD (Onshape, Fusion 360, 3D Printing, Laser Cutting, Rapid Prototyping), Applied Tech (Raspberry Pi, Microcontrollers, Git, Linux), Fire Service (Volunteer Firefighter, Fireground Ops, Apparatus Maintenance, ICS).
   - **Work Experience**: Montgomery Township Volunteer Fire Company #2, Ivy Tutoring (SAT Prep Software Platform Intern), Princeton University LLP (Research Intern), True Value Hardware (Part-time Associate).
   - **Leadership**: Co-President & Head of Design (PDS Robotics Club), Maker Club Leader, Muslim Student Association (MSA) Leadership.
   - **Published Articles**:
     1. *"Virtual Reality, Just What the Doctor Ordered"*
     2. *"The Clandestine Side of 3D Printing"*
     3. *"Have We Been Here Before?"*
     4. *"From COVID-19 to Zainiac 19"*

---

## Info-Gap Callout Prompts

To preserve 100% factual accuracy without making assumptions, placeholder callout boxes (`.info-gap-box`) are placed in specific sections where Zain can drop in:
- High-resolution photographs of Zainiac robots & Maker Faire booths
- CAD screenshots or STL/STEP files for the flight simulator and radio room wall enclosure
- Direct links to published articles and the Ivy Tutoring platform

---

## Running Locally

```bash
# Start a local HTTP server
python3 -m http.server 3000
```
Then navigate to `http://localhost:3000` in your web browser.

---

## Publishing to GitHub Pages

```bash
git add .
git commit -m "Ground portfolio strictly in verified resume facts and add info gap prompts"
git push -u origin main
```
Enable GitHub Pages in your repository settings under **Settings** > **Pages** > **Deploy from a branch** > `main` / `root`.
