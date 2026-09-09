# Zain Hamdia - High School Senior Engineering Portfolio

> **High School Senior • Aspiring Mechanical Engineer • Junior Volunteer Firefighter**  
> Princeton Day School • Class of 2026  
> GitHub: [@ZainHamdia](https://github.com/ZainHamdia) | Repository: [ZainPortfolio](https://github.com/ZainHamdia/ZainPortfolio)

A professional, multi-page engineering portfolio website highlighting Zain's work across **Robotics & Prototyping**, **Aviation & Aerodynamics Research**, and **Volunteer Junior Firefighting**.

---

## Portfolio Pages & Structure

```
ZainSite/
├── index.html            # Home: Command hub, 3 disciplinary portals, and executive summary
├── robotics.html         # Robotics: Zainiac 19, 2019 Philadelphia Maker Faire, STEAM Lab CAD & 3D prototyping
├── aviation.html         # Aviation: Princeton MAE Joseph Henry Project research internship, Aerodynamics studies
├── firefighting.html     # Firefighting: Junior volunteer firefighter service, Apparatus hydraulics & SCBA
├── about.html            # About & Skills: Academic background, Capabilities matrix, Milestones timeline
├── contact.html          # Contact: Direct inquiries desk, email and GitHub links
├── css/
│   └── styles.css        # Multi-page design system with distinct visual themes per page
├── js/
│   ├── app.js            # Theme toggle (Light/Dark) and mobile navigation controller
│   └── projects-data.js  # Grounded structured data model
└── README.md             # Project documentation & GitHub Pages deployment guide
```

---

## Core Focus Areas

1. **Robotics & Fabrication (`robotics.html`)**
   - ***Zainiac 19***: Custom mobile robot featured at the **2019 Philadelphia Maker Faire** in the Robotics category. Features custom chassis construction, motor control, and ultrasonic obstacle avoidance.
   - **STEAM Lab Prototyping**: Parametric 3D CAD modeling (Onshape, Fusion 360) and additive manufacturing for functional mechanical assemblies at Princeton Day School.

2. **Aviation & Aerodynamics Research (`aviation.html`)**
   - **Princeton University (MAE Dept) - Joseph Henry Project**: Summer 2025 research internship under Professor Michael Littman studying and reconstructing historical 19th-century scientific electromechanical apparatus, electromagnetic induction, and electric motor physics.
   - **Aeronautical & Flight Studies**: Airfoil aerodynamics, flight dynamics, lift/drag principles, and radio-controlled model aviation.

3. **Volunteer Junior Firefighting & Field Operations (`firefighting.html`)**
   - Active civic service as a junior volunteer firefighter.
   - Applied mechanics and hydraulics: Fireground water supply, hoseline friction loss, Self-Contained Breathing Apparatus (SCBA) pneumatics, and apparatus maintenance.
   - Operating under the Incident Command System (ICS), emphasizing safety-critical discipline and team coordination.

4. **About & Technical Skills (`about.html`)**
   - Background at Princeton Day School and aspiration to pursue a **B.S. in Mechanical Engineering**.
   - Technical capabilities matrix covering Robotics & Hardware, CAD & Digital Fabrication, Aerodynamics & Research, and Fire Service & Safety.
   - Chronological timeline tracking milestones from 2019 to senior year.

---

## Running Locally

```bash
# Start a local HTTP server
python3 -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

---

## Publishing to GitHub Pages

```bash
git add .
git commit -m "Update aspiration to Mechanical Engineering across all pages"
git push -u origin main
```
Enable GitHub Pages in your repository settings under **Pages** > **Deploy from a branch** > `main` / `root`.
