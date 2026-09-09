# Zain Hamdia - High School Senior Engineering Portfolio

> **High School Senior • Aspiring Aerospace Engineer • Junior Volunteer Firefighter**  
> GitHub: [@ZainHamdia](https://github.com/ZainHamdia) | Repository: [ZainPortfolio](https://github.com/ZainHamdia/ZainPortfolio)

An engineering portfolio website engineered for college admissions officers, research advisors, internship evaluators, and engineering teams. The site highlights Zain's work across **Robotics**, **Aviation & Aerospace Engineering**, and **Volunteer Junior Firefighting**.

---

## Technical Highlights & Sections

1. **Robotics & Rapid Prototyping**
   - ***Zainiac 19***: Landmark autonomous & RC mobile robot featured at the **2019 Philadelphia Maker Faire**. Includes custom dual H-bridge motor control, ultrasonic obstacle avoidance, and live demonstration metrics.
   - **PDS STEAM Lab & Additive Manufacturing**: High-precision parametric CAD (Onshape, SolidWorks, Fusion 360) and multi-material 3D printing (PETG, Carbon-Fiber Nylon, Polycarbonate).
   - **Next-Gen Autonomous Ground Vehicle**: ESP32 dual-core FreeRTOS rover featuring 9-DOF IMU Kalman filtering and real-time WebSockets telemetry.

2. **Aviation & Aerospace Engineering**
   - **Princeton University (MAE Dept) - Joseph Henry Project**: Summer 2025 research internship under Professor Michael Littman studying and reconstructing historical electromechanical apparatus, electromagnetic coil winding physics, and magnetic flux mechanics.
   - **Experimental Fixed-Wing UAV & Aerodynamics**: Computational airfoil selection (NACA 2412), wing loading and static margin calculations, composite carbon-foam construction, and real-time flight telemetry logging.

3. **Volunteer Junior Firefighting & Field Engineering**
   - Hands-on emergency response, fireground hydraulics (friction loss, GPM, nozzle pressure), Self-Contained Breathing Apparatus (SCBA) pneumatic operation (4,500 PSI), and hydraulic rescue tools (10,500 PSI).
   - Demonstrates checklist discipline, failure-tolerant operations, and rapid decision-making in safety-critical environments.

4. **Interactive Architecture**
   - Filterable Project Gallery with real-time category filtering.
   - Deep-Dive Engineering Spec Sheet Modals with subsystem tables and design challenges.
   - Interactive Skills Matrix with categorized proficiencies and laboratory toolkits.
   - Engineering Blueprint Light / Dark Theme toggle with persistent `localStorage` settings.

---

## Directory Structure

```
ZainSite/
├── index.html            # Semantic HTML5 portfolio markup
├── css/
│   └── styles.css        # Engineering blueprint design system & responsive layout
├── js/
│   ├── projects-data.js  # Project specifications, metrics, and case studies
│   └── app.js            # UI logic, modals, filtering, and theme controller
└── README.md             # Documentation & deployment guide
```

---

## Running Locally

To preview the portfolio locally, run Python's built-in web server:

```bash
# From the project root:
python3 -m http.server 8000
```

Then open your browser to `http://localhost:8000`.

---

## Deploying to GitHub Pages

To publish this portfolio to your GitHub repository and host it for free on GitHub Pages:

1. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Build engineering portfolio for Zain Hamdia"
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Navigate to your repository on GitHub: `https://github.com/ZainHamdia/ZainPortfolio/settings/pages`
   - Under **Build and deployment** > **Source**, select `Deploy from a branch`.
   - Under **Branch**, select `main` and `/ (root)`, then click **Save**.
   - Within 1–2 minutes, your portfolio will be live at:
     `https://zainhamdia.github.io/ZainPortfolio/`
