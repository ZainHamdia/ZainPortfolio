/**
 * Zain Hamdia - Engineering Portfolio Data
 * 100% Grounded in Official Resume & Verified Information
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Zain Hamdia",
    tagline: "Engineering & Robotics Student | Builder | Innovator | Volunteer Firefighter",
    aspiring: "Aspiring Mechanical Engineer",
    school: "Princeton Day School",
    expectedGraduation: "2027",
    email: "zaiham27@pds.org"
  },

  experience: [
    {
      organization: "Montgomery Township Volunteer Fire Company #2 (Fire Station 46)",
      role: "Volunteer Firefighter",
      period: "Summer 2025 – Present",
      bullets: [
        "Participate in firefighter training, emergency response, station operations, and community service with Fire Station 46.",
        "Leading an initiative to overhaul and strengthen the department's Junior Firefighter Program, updating digital resources, streamlining response certifications, and pairing youth recruits with senior firefighter mentors."
      ]
    },
    {
      organization: "Montgomery Township Volunteer Fire Company #2 (Fire Station 46)",
      role: "Technology & Engineering Intern",
      period: "Summer 2026 – Present",
      bullets: [
        "Leading the redesign and development of the fire company’s public website, transforming the existing site into a modern, accessible resource for department information, membership, community engagement, and recruitment.",
        "Designing and building a Raspberry Pi-based digital information system for permanent use in the station’s radio room, integrating operational information, weather radar and forecasts, emergency alerts, news, and station communications into a centralized dashboard.",
        "Engineering a custom wall-mounted enclosure for an 11-inch display and Raspberry Pi using CAD and 3D printing, incorporating ventilation, cable management, mounting hardware, and access to power and network connections.",
        "Developing the system from requirements gathering and design through software/hardware integration, prototyping, reliability testing, installation, firefighter feedback, and technical documentation."
      ]
    },
    {
      organization: "Ivy Tutoring",
      role: "Software & Technology Intern",
      period: "Spring 2026 – Present",
      bullets: [
        "Develop and enhance features for a startup SAT preparation platform using JavaScript, Java, and C++.",
        "Built functionality enabling users to log and track SAT practice and test scores over time.",
        "Developed AI-powered features that analyze prior performance to identify areas for improvement and generate personalized study recommendations.",
        "Created customized flashcards and practice exercises using the College Board’s existing question bank.",
        "Developed proficiency in Google Antigravity as part of the platform’s development and enhancement."
      ]
    },
    {
      organization: "True Value",
      role: "Sales Associate",
      period: "Summer 2026 – Present",
      bullets: [
        "Assist customers with product questions, merchandise selection, and general store needs in a customer-facing retail environment.",
        "Stock and organize new merchandise and support day-to-day store operations while balancing ongoing school, extracurricular, and community commitments."
      ]
    },
    {
      organization: "Princeton University Laboratory Learning Program",
      role: "Mechanical Engineering Summer Research Intern",
      period: "Summer 2025",
      bullets: [
        "Analyzed the ~20-year-old schematic of Princeton University’s MAE 412 DCC railroad track switch thrower with a trickle-charged capacitor (~12-second charge cycle from track power and optional 5V DC input).",
        "Redesigned the board from a double-sided PCB into a more complex single-sided PCB over ~2 weeks, adding an onboard ATMEGA-328P microprocessor to eliminate external connections and automate track control.",
        "Added a second 4700µF trickle-charged capacitor so more charge is stored and two switch-throwing actions can be performed in swift succession.",
        "Sourced all components and hand-soldered the board in ~1 week; incorporated two supervisor review corrections and deployed the board for active use in the curriculum."
      ]
    }
  ],

  projects: [
    {
      id: "zainiac-series",
      title: "Zainiac Robot Series — Zainiac 19, Zainiac 21 & Zainiac 25 (“Noggin”)",
      category: "robotics",
      description: "Original humanoid and animatronic robot lineage. Zainiac 19 (~5 ft tall, and the only robot in the series presented at public Maker Faires and conferences) was built on LEGO MINDSTORMS using wood for the legs, particle board and PVC pipe framework for the body, a sculpted paper-mâché head, and custom 3D-printed parts, with kinematics featuring a panning neck, panning waist, and synchronized straight arm motion (elbows do not bend) moving in opposite directions. Zainiac 21 (~4.5 ft tall) was fully 3D printed in white and used LEGO MINDSTORMS to move the jaw, rotate the neck, and swing each arm independently. Zainiac 25 (“Noggin”) is an entirely 3D-printed animatronic head based on a 1980s Creative Engineering animatronic head, replacing pneumatic cylinders with seven servo motors and linkage arms (2 at the base of the neck, 2 per eye, and 1 for the jaw) for smoother, cheaper, easier, and more programmable motion.",
      tags: ["~5 Ft Z19 & ~4.5 Ft Z21", "LEGO MINDSTORMS", "White 3D-Printed Z21", "Independent Arm Swing", "Zainiac 25 (“Noggin”) Animatronic Head", "Pneumatics to Servo Linkages", "Multi-Servo Kinematics", "Brussels Maker Faire (Zainiac 19)"]
    },
    {
      id: "little-bot",
      title: "Little Bot",
      category: "robotics",
      description: "Developed an independent compact robotic build exploring small-scale linkages, locomotion, hardware integration, and controls.",
      tags: ["Robotics", "Hardware Integration", "Movement", "Controls"]
    },
    {
      id: "flight-simulator",
      title: "3D-Printed Flight Simulator (Yoke & 4-Section Throttle Quadrant)",
      category: "aviation",
      description: "Designed and constructed a 3D-printed flight simulator featuring a flight yoke that uses springs to stay centered across its axes and a 4-section throttle quadrant, with all axes and quadrant sections connected to individual potentiometers.",
      tags: ["Spring-Centered Flight Yoke", "4-Section Throttle Quadrant", "Individual Potentiometers", "CAD Design", "3D Printing"]
    },
    {
      id: "n95-masks",
      title: "3D-Printed N95 Masks (COVID-19 Relief)",
      category: "robotics",
      description: "Designed and produced 3D-printed N95 masks donated to a New York cancer center during the COVID-19 pandemic.",
      tags: ["3D Printing", "CAD", "Healthcare Donation", "Community Service"]
    },
    {
      id: "radio-room-system",
      title: "Radio Room Digital Dashboard & Custom Enclosure",
      category: "firefighting",
      description: "Raspberry Pi-based operational information system and custom CAD-designed 3D-printed wall enclosure for an 11-inch display at Montgomery Township Volunteer Fire Company #2.",
      tags: ["Raspberry Pi", "CAD", "3D Printing", "Hardware Integration", "MTVFC #2"]
    }
  ],

  exhibitions: [
    "Brussels Maker Faire — Zainiac 19 (Featured on Belgian national news & opening ceremony with Brussels government leadership)",
    "Philadelphia Maker Faire — Zainiac 19",
    "Rochester Maker Faire — Zainiac 19",
    "Cairo Maker Faire — Zainiac 19",
    "Tandem Industrial Design Conference at Jefferson University — Zainiac 19"
  ],

  leadership: [
    { role: "Co-President, Robotics Club", entity: "Princeton Day School", period: "2025–Present" },
    { role: "Head of Design Team, Robotics Club", entity: "Princeton Day School", period: "2024–2025", note: "Led design efforts resulting in a 6th-place finish at the February 2025 Robotics Competition." },
    { role: "Co-President, Maker Club", entity: "Princeton Day School", period: "2024–Present" },
    { role: "Co-President, Moslem Student Association", entity: "Princeton Day School", period: "2024–Present" }
  ],

  publications: [
    "“Virtual Reality, Just What the Doctor Ordered”",
    "“The Clandestine Side of 3D Printing”",
    "“Have We Been Here Before?”",
    "“From COVID-19 to Zainiac 19”"
  ],

  recognition: [
    "PSAT National Recognition Program — Rural and Small Town Recognition Award",
    "Vex V5 Robotics Competition — Quarterfinalist, 2026",
    "Vex V5 Robotics Competition — 6th Place, 2025",
    "Featured on Belgian national news following participation in the Brussels Maker Faire, participating in the opening ceremony alongside Brussels government leadership."
  ],

  skills: {
    programming: ["Python", "Java", "JavaScript", "C++", "Arduino"],
    designEngineering: ["Fusion 360", "CAD", "Robotics Design", "3D Printing", "Prototyping"],
    appliedTechnology: ["Raspberry Pi", "Hardware Integration", "Web Development"]
  }
};
