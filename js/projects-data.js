/**
 * Zain Hamdia - Engineering Portfolio Data
 * 100% Grounded in Official Resume & Verified Information
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Zain Hamdia",
    tagline: "Engineering & Robotics Student | Builder | Innovator | Junior Firefighter",
    aspiring: "Aspiring Mechanical Engineer",
    school: "Princeton Day School",
    expectedGraduation: "2027",
    github: "https://github.com/ZainHamdia",
    repoUrl: "https://github.com/ZainHamdia/ZainPortfolio",
    email: "zainhamdia@gmail.com"
  },

  experience: [
    {
      organization: "Montgomery Township Volunteer Fire Company #2",
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
      organization: "Montgomery Township Volunteer Fire Company #2",
      role: "Junior Firefighter",
      period: "July 2025 – Present",
      bullets: [
        "Participate in firefighter training, station operations, emergency response activities, and community service as a member of the department's Junior Firefighter Program.",
        "Leading an initiative to redesign and strengthen the department's Junior Firefighter Program, including updating online information on junior firefighting, streamlining the process for certifying Juniors to respond, and making the mentor-finding process easier between all the firefighters."
      ]
    },
    {
      organization: "Ivy Tutoring",
      role: "Software/Technology Intern",
      period: "Summer 2026 – Present",
      bullets: [
        "Develop and enhance features for a startup SAT preparation platform using JavaScript, Java, and C++.",
        "Built functionality enabling users to log and track SAT practice and test scores over time.",
        "Developed AI-powered features that analyze prior performance to identify areas for improvement and generate personalized study recommendations.",
        "Created customized flashcards and practice exercises using the College Board’s existing question bank.",
        "Developed proficiency in Google Antigravity as part of the platform’s development and enhancement."
      ]
    },
    {
      organization: "Princeton University Laboratory Learning Program",
      role: "Summer Research Intern",
      period: "Summer 2025",
      bullets: [
        "Participated in the Joseph Henry Project research program.",
        "Conducted scientific research and contributed to academic project work."
      ]
    },
    {
      organization: "True Value",
      role: "Part-Time Associate",
      period: "July 2026 – Present",
      bullets: [
        "Assist customers with product questions, merchandise selection, and general store needs in a customer-facing retail environment.",
        "Stock and organize new merchandise and support day-to-day store operations while balancing ongoing school, extracurricular, and community commitments."
      ]
    }
  ],

  projects: [
    {
      id: "zainiac-series",
      title: "Zainiac Robot Series — Zainiac 19, Zainiac 21 & Zainiac 25",
      category: "robotics",
      description: "Original articulated and mobile robot lineage. Zainiac 19 and 21 were built on LEGO MINDSTORMS; Zainiac 19 was constructed using wood for the legs, a particle board and PVC pipe framework for the body, a sculpted paper-mâché head, and custom 3D-printed parts, with kinematics featuring a panning neck, panning waist, and synchronized arm motion moving in opposite directions.",
      tags: ["LEGO MINDSTORMS", "Synced Opposing Arms", "Pan-Only Kinematics", "Wood & PVC Framing", "3D Printing", "Brussels Maker Faire"]
    },
    {
      id: "little-bot-noggin",
      title: "Little Bot & Noggin",
      category: "robotics",
      description: "Developed independent robotic projects exploring design, movement, hardware integration, and controls.",
      tags: ["Robotics", "Hardware Integration", "Movement", "Controls"]
    },
    {
      id: "flight-simulator",
      title: "3D-Printed Flight Simulator",
      category: "aviation",
      description: "Designed and constructed a flight simulator incorporating custom-designed and 3D-printed components.",
      tags: ["Flight Simulator", "CAD Design", "3D Printing", "Mechanical Assembly"]
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
    "Brussels Maker Faire (Featured on Belgian national news & opening ceremony with Brussels government leadership)",
    "Philadelphia Maker Faire",
    "Rochester Maker Faire",
    "Cairo Maker Faire",
    "Tandem Industrial Design Conference at Jefferson University"
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
