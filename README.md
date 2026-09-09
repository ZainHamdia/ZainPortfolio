# Zain Hamdia - Engineering Portfolio

> **High School Student • Aspiring Mechanical Engineer • Junior Firefighter**  
> Princeton Day School • Expected Graduation: 2027  
> GitHub: [@ZainHamdia](https://github.com/ZainHamdia) | Repository: [ZainPortfolio](https://github.com/ZainHamdia/ZainPortfolio)

A professional, multi-page engineering portfolio website highlighting Zain Hamdia's verified achievements, leadership, and projects across **Robotics & Maker Engineering**, **Aviation & Academic Research**, and **Volunteer Firefighting & Applied Technology**.

---

## Portfolio Pages & Structure

```
ZainSite/
├── index.html            # Home: Command hub, 3 disciplinary portals, and verified summary
├── robotics.html         # Robotics: Zainiac 19, 21, 25, International Maker Faires, VEX V5, Little Bot, N95 Masks
├── aviation.html         # Aviation & Research: 3D-Printed Flight Simulator, Princeton University LLP Research Internship
├── firefighting.html     # Firefighting: Montgomery Township VFC #2, Tech Intern (Dashboard & 3D Enclosure), Junior Firefighter
├── about.html            # About & Skills: Resume education, Technical skills matrix, Work experience, Leadership, 4 Articles
├── contact.html          # Contact: Inquiries desk, direct email, and GitHub links
├── css/
│   └── styles.css        # Responsive design system with distinct visual themes per discipline + Info Gap UI
├── js/
│   ├── app.js            # Theme toggle (Light/Dark mode) and mobile navigation controller
│   └── projects-data.js  # Grounded structured data model strictly mapped to verified resume
└── README.md             # Project documentation & GitHub Pages deployment guide
```

---

## Verified Core Focus Areas (Strictly Grounded in Resume)

1. **Robotics & Maker Innovation (`robotics.html`)**
   - ***Zainiac Series (19, 21, 25)***: Designed and fabricated personal autonomous/mobile robots.
   - **International & Regional Maker Faires**: Exhibited at Brussels (featured on Belgian national news and attended by Brussels government leadership), Philadelphia, Rochester, Cairo, and Tandem at Jefferson.
   - ***Little Bot & Noggin***: Designed a custom companion robot.
   - **VEX V5 Robotics Competition**: Co-President & Head of Design; Quarterfinalist (2026), 6th Place (2025) out of 40+ teams. Led CAD (Onshape), fabrication, and driver controls.
   - **COVID-19 N95 3D-Printed Masks**: Partnered with an open-source medical initiative to 3D print N95 reusable masks for a New York cancer center during PPE shortages.

2. **Aviation & Academic Research (`aviation.html`)**
   - **3D-Printed Flight Simulator**: Custom-designed and 3D-printed flight simulator components, controls, and ergonomic mounts for flight physics simulation.
   - **Princeton University Laboratory Learning Program (LLP)**: Summer 2025 research intern on the Joseph Henry Project under Prof. Michael Littman. Researched and helped reconstruct historical electromechanical scientific apparatus and electromagnetic motor physics.

3. **Firefighting & Applied Technology (`firefighting.html`)**
   - **Montgomery Township Volunteer Fire Company #2**:
     - *Technology & Engineering Intern (Summer 2026–Present)*: Built a dedicated radio room digital operational dashboard running on Raspberry Pi and engineered a custom CAD-modeled 3D-printed 11-inch wall enclosure. Redesigned the public company website.
     - *Junior Firefighter (July 2025–Present)*: Active member participating in operational training, gear checks, and spearheading a modernization overhaul of the Junior Firefighter Program.

4. **About, Skills & Experience (`about.html`)**
   - **Education**: Princeton Day School (Expected Graduation: 2027), Aspiring Mechanical Engineer.
   - **Technical Skills**: Programming (Python, C++, Java, JavaScript, HTML/CSS), Design & CAD (Onshape, Fusion 360, 3D Printing, Laser Cutting, Rapid Prototyping), Applied Tech (Raspberry Pi, Microcontrollers, Git/GitHub, Linux), Fire Service (Junior Firefighter, Fireground Ops, Apparatus Maintenance, ICS).
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
