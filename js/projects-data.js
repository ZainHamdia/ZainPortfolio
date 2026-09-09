/**
 * Zain Hamdia - Engineering Portfolio Data
 * High School Senior | Aspiring Aerospace Engineer | Junior Volunteer Firefighter
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Zain Hamdia",
    title: "High School Senior & Aspiring Aerospace Engineer",
    subtitle: "Robotics Innovator • Junior Volunteer Firefighter • Princeton MAE Research Intern",
    tagline: "Bridging autonomous robotics, aerospace systems, and community service through hands-on fabrication, rapid prototyping, and empirical research.",
    location: "Princeton, New Jersey",
    school: "Princeton Day School",
    expectedGraduation: "2026",
    github: "https://github.com/ZainHamdia",
    repoUrl: "https://github.com/ZainHamdia/ZainPortfolio",
    email: "zainhamdia@gmail.com",
    aboutShort: "I am a high school senior and maker dedicated to hands-on hardware engineering, aerospace design, and civic duty. From building my first obstacle-navigating robot, Zainiac 19, and showcasing it at the Philadelphia Maker Faire, to interning in the Mechanical & Aerospace Engineering department at Princeton University, to serving my town as a volunteer junior firefighter—I thrive at the intersection of precision mechanics, real-time control systems, and high-stakes teamwork.",
    stats: [
      { label: "Years Prototyping", value: "6+", desc: "Since first Maker Faire build" },
      { label: "Core Disciplines", value: "3", desc: "Robotics • Aerospace • Firefighting" },
      { label: "Research Cohort", value: "2025", desc: "Princeton Joseph Henry MAE Intern" },
      { label: "Service Hours", value: "150+", desc: "Volunteer Fire Department & Community" }
    ]
  },

  skills: {
    mechanical: [
      { name: "3D CAD Modeling (Onshape, SolidWorks, Fusion 360)", level: 90 },
      { name: "Additive Manufacturing (FDM, PETG/Nylon/CF, Slicing)", level: 95 },
      { name: "Rapid Prototyping & Fabrication (Laser, CNC, Shop Tools)", level: 85 },
      { name: "Mechanism Design & Drivetrains (Gear ratios, linkages)", level: 85 },
      { name: "Structural & Weight Optimization", level: 80 }
    ],
    electrical: [
      { name: "Embedded Systems (Arduino, ESP32, Raspberry Pi)", level: 90 },
      { name: "Circuit Design & Soldering (Power distribution, buck converters)", level: 88 },
      { name: "Sensor Integration (Ultrasonic, IMU, LiDAR, Optical)", level: 85 },
      { name: "Motor Controls (PWM, H-Bridge, Brushless ESCs)", level: 88 },
      { name: "Telemetry & RF Communication (Wi-Fi, Bluetooth, 2.4GHz RC)", level: 82 }
    ],
    aerospace: [
      { name: "Aerodynamics Fundamentals & Airfoil Analysis (NACA series)", level: 82 },
      { name: "Fixed-Wing RC Aircraft Design & CG Tuning", level: 85 },
      { name: "Electromagnetics & Apparatus Reconstruction (Princeton MAE)", level: 88 },
      { name: "Flight Envelope Testing & Telemetry Logging", level: 80 },
      { name: "Fluid & Hydraulic Pressure Principles", level: 84 }
    ],
    fieldOps: [
      { name: "Junior Volunteer Firefighter Operations", level: 90 },
      { name: "Incident Command System (ICS) Safety & Protocol", level: 92 },
      { name: "SCBA (Self-Contained Breathing Apparatus) Operation", level: 90 },
      { name: "Pneumatic & Hydraulic Tool Handling", level: 85 },
      { name: "High-Stress Team Execution & Problem Solving", level: 95 }
    ]
  },

  projects: [
    {
      id: "zainiac-19",
      title: "Zainiac 19: Autonomous & RC Mobile Robotics Platform",
      category: "robotics",
      badge: "Maker Faire Featured",
      date: "2019",
      role: "Lead Designer, Fabricator & Programmer",
      shortDescription: "Zain's landmark first mobile robot, engineered from the ground up for obstacle detection and remote operation. Selected and exhibited live at the 2019 Philadelphia Maker Faire.",
      fullDescription: `Zainiac 19 was the seminal project that launched Zain's engineering journey. Conceived, designed, and constructed independently in 2019, the robot was built to solve autonomous spatial navigation and obstacle avoidance within unstructured environments. 

The robot utilizes an Arduino microcontroller managing dual high-torque DC motors driven by an L298N dual H-bridge motor driver. Forward-facing ultrasonic sonar transducers generate continuous range scans, feeding an avoidance algorithm that dynamically adjusts wheel speeds through Pulse Width Modulation (PWM). 

Zain brought Zainiac 19 to the 2019 Philadelphia Maker Faire, where it was featured in the Robotics and Flying & Aeronautics category. Zain presented live technical demos to thousands of attendees, field engineers, and makers, explaining the circuit schematics, chassis kinematics, and code architecture.`,
      highlights: [
        "Featured official exhibitor in Robotics at the 2019 Philadelphia Maker Faire",
        "Custom scratch-built chassis with balanced center of gravity and shock absorption",
        "Autonomous collision avoidance algorithm using real-time ultrasonic echo calculation",
        "Integrated dual-mode control: autonomous sensor-directed roaming vs. manual RF remote override",
        "Public communication: explained embedded logic and mechanical assembly to thousands of attendees"
      ],
      specs: [
        { key: "Microcontroller", val: "ATmega328P (Arduino Architecture)" },
        { key: "Motor Driver", val: "L298N Dual Full-Bridge Driver (up to 2A per channel)" },
        { key: "Actuation", val: "Dual 12V DC Geared Motors with High-Traction All-Terrain Wheels" },
        { key: "Sensing", val: "HC-SR04 Ultrasonic Sonar Array (2cm – 400cm range, 3mm resolution)" },
        { key: "Power System", val: "Multi-cell high-discharge battery pack with 5V LDO linear regulation" },
        { key: "Chassis Construction", val: "Custom laser-cut acrylic baseplate with 3D printed vibration dampeners" }
      ],
      media: {
        icon: "robot",
        tagline: "The foundation of all future autonomous systems."
      }
    },
    {
      id: "joseph-henry-project",
      title: "Princeton University: Joseph Henry Project Research",
      category: "aviation",
      badge: "Princeton MAE Internship",
      date: "Summer 2025",
      role: "Engineering Research Intern",
      shortDescription: "Summer research internship in Princeton University's Department of Mechanical & Aerospace Engineering, rigorously reconstructing 19th-century electromechanical apparatus and investigating electromagnetic actuation.",
      fullDescription: `During the Summer of 2025, Zain served as a high school research intern for the Joseph Henry Project in the Department of Mechanical and Aerospace Engineering (MAE) at Princeton University under Professor Michael Littman.

The project centers on the physical, historical, and mathematical reconstruction of seminal scientific apparatus developed by American physicist Joseph Henry (1799–1878)—the pioneer of mutual inductance and early electromagnetic motors. 

Zain worked hands-on in the lab, analyzing the physics of electromagnetic coils, magnetic field distribution, and mechanical commutators. By bridging historical electromechanical design with modern diagnostic tools (oscilloscopes, Gauss meters, and precision fabrication equipment), the internship provided rigorous training in experimental design, sensor validation, and the core physical principles underpinning modern aerospace actuators and motors.`,
      highlights: [
        "Conducted laboratory research in Princeton University's Department of Mechanical & Aerospace Engineering",
        "Reconstructed historical electromagnetic coils and reciprocating motion mechanisms",
        "Measured magnetic flux density, coil inductance, and thermal dissipation under varied duty cycles",
        "Collaborated with university faculty and engineering scholars on scientific verification and replication methods",
        "Gained deep foundational knowledge in electromagnetic force generation directly applicable to aerospace actuation"
      ],
      specs: [
        { key: "Institution", val: "Princeton University, Dept. of Mechanical & Aerospace Engineering" },
        { key: "Faculty Lead", val: "Prof. Michael Littman" },
        { key: "Focus Area", val: "Electromechanical Motors, Mutual Inductance & Historical Apparatus" },
        { key: "Instrumentation", val: "Hall-effect Gauss meters, Digital Storage Oscilloscopes, Precision Calipers" },
        { key: "Fabrication Methods", val: "Precision coil winding jigs, insulated copper magnet wire, mechanical balancing" }
      ],
      media: {
        icon: "zap",
        tagline: "Where historical physics meets modern aerospace actuation."
      }
    },
    {
      id: "volunteer-firefighting",
      title: "Junior Volunteer Firefighting & Emergency Field Engineering",
      category: "firefighting",
      badge: "Active Service & Leadership",
      date: "2024 - Present",
      role: "Junior Volunteer Firefighter",
      shortDescription: "Serving the local community through emergency response readiness, high-pressure hydraulic & pneumatic apparatus maintenance, and strict Incident Command System (ICS) execution.",
      fullDescription: `Serving as a Junior Volunteer Firefighter requires combining physical endurance, tactical composure, and a rigorous technical understanding of heavy mechanical systems under life-critical conditions.

Zain trains and operates within the Incident Command System (ICS), learning the mechanical operation and deployment of emergency apparatus. This includes mastering the physics of fireground hydraulics (calculating friction loss across 1.75" and 2.5" attack lines, friction coefficients, and nozzle pressures from 50 to 100 PSI), Self-Contained Breathing Apparatus (SCBA) pneumatic regulator mechanics, positive pressure ventilation (PPV) airflow dynamics, and hydraulic vehicle extrication spreaders/cutters operating at over 10,000 PSI.

This experience instills an uncompromising discipline for checklist compliance, mechanical fail-safes, and calm, decisive execution in chaotic, high-temperature environments—qualities directly transferable to mission-critical aerospace and flight engineering.`,
      highlights: [
        "Active member of the local volunteer fire service, dedicated to community life safety and property preservation",
        "Trained on SCBA (Self-Contained Breathing Apparatus) donning, inspection, seal-testing, and emergency bailout protocols",
        "Practical study of fireground hydraulics: friction loss, pump discharge pressure (PDP), and nozzle flow rates (GPM)",
        "Equipment maintenance: positive pressure ventilation fans, multi-gas detectors, thermal imaging cameras (TIC), and generator sets",
        "Developed rapid situational awareness and communication under extreme acoustic and thermal stress"
      ],
      specs: [
        { key: "Service Role", val: "Junior Volunteer Firefighter" },
        { key: "Standards & System", val: "Incident Command System (ICS) / NFPA Operational Guidelines" },
        { key: "Life Support Tech", val: "High-Pressure SCBA (4500 PSI carbon composite cylinder, dual-stage regulator)" },
        { key: "Hydraulic Equipment", val: "Hydraulic rescue cutters/spreaders operating at 10,500 PSI" },
        { key: "Fluid Dynamics", val: "Attack lines (100–200 GPM) and master streams (500–1000 GPM) hydraulic calculations" }
      ],
      media: {
        icon: "flame",
        tagline: "Precision engineering and rapid tactical execution when lives depend on it."
      }
    },
    {
      id: "aerodynamics-rc-flight",
      title: "Experimental RC Aerodynamics & Fixed-Wing UAV Platform",
      category: "aviation",
      badge: "Aerospace Prototype",
      date: "2024 - 2025",
      role: "Aeronautical Designer & Flight Test Pilot",
      shortDescription: "Design, computational airfoil selection, and flight envelope testing of a custom fixed-wing RC aircraft with real-time telemetry logging and composite reinforcement.",
      fullDescription: `Combining a passion for flight with hands-on fabrication, Zain designed and constructed an experimental fixed-wing radio-controlled aircraft to validate aerodynamic stability principles in real-world conditions.

The design process began with airfoil evaluation (comparing cambered NACA 2412 and semi-symmetrical sections for optimal lift-to-drag ratios at low Reynolds numbers). Zain calculated wing loading, static margin, and neutral point to guarantee positive pitch stability without requiring active flight computer stabilization.

The airframe was constructed from high-density foam core with carbon-fiber spar reinforcements, 3D-printed PETG motor firewall mounts, and precision control horns. Real-time telemetry was installed to log airspeed, barometric altitude, and lithium polymer battery voltage draw throughout all flight phases, culminating in successful glide tests and sustained powered circuits.`,
      highlights: [
        "Computed theoretical lift, stall speed, and center-of-gravity (CG) envelope prior to physical fabrication",
        "Engineered a lightweight composite structure: expanded foam reinforced with unidirectional carbon-fiber tubes",
        "Fabricated custom PETG motor bulkheads and servo linkages using precision FDM 3D printing",
        "Integrated 2.4GHz FHSS radio link with onboard telemetry logging for voltage and altitude monitoring",
        "Conducted iterative flight test campaigns, analyzing control surface trim and dynamic roll/pitch damping"
      ],
      specs: [
        { key: "Wingspan & Chord", val: "1100 mm Wingspan | 185 mm Mean Aerodynamic Chord" },
        { key: "Airfoil Section", val: "Modified NACA 2412 (High lift coefficient at low Re ~150,000)" },
        { key: "Propulsion", val: "2212 1400KV Brushless Outrunner + 8x4.5 APC Aerodynamic Propeller" },
        { key: "Speed Controller", val: "30A Electronic Speed Controller (ESC) with 5V/3A Switching BEC" },
        { key: "Telemetry & Radio", val: "FrSky/OpenTX 2.4GHz Telemetry Receiver with A2 analog voltage divider" },
        { key: "All-Up Weight (AUW)", val: "680 grams (Wing loading: ~33.4 g/dm²)" }
      ],
      media: {
        icon: "plane",
        tagline: "Exploring the fundamentals of lift, stability, and flight dynamics."
      }
    },
    {
      id: "steam-lab-rapid-prototyping",
      title: "PDS STEAM Lab: Additive Manufacturing & Rapid Prototyping",
      category: "robotics",
      badge: "Fabrication & Design",
      date: "2023 - Present",
      role: "Designer & Fabricator",
      shortDescription: "Leveraging school STEAM lab facilities and home workshop equipment for precision 3D CAD modeling, multi-material FDM slicing, and functional hardware fabrication.",
      fullDescription: `Engineering ideas achieve their greatest potential when translated from screen to physical prototype. As an active builder at the Princeton Day School STEAM Lab and his home workshop, Zain leads complex design-for-additive-manufacturing (DFAM) projects.

His workflow spans parametric modeling in Onshape, SolidWorks, and Fusion 360, slicing optimization in OrcaSlicer and Bambu Studio, and printing functional prototypes using high-strength polymers (PETG, Polycarbonate, and Carbon-Fiber filled filaments). 

Projects include custom robotic gearboxes, snap-fit sensor brackets, aerodynamic fairings, and precision test jigs. By mastering print orientation, anisotropic layer adhesion, and mechanical tolerances, Zain ensures every printed part withstands mechanical fatigue and operational shock.`,
      highlights: [
        "Advanced proficiency in parametric 3D CAD modeling with strict tolerance constraints (+/- 0.15mm)",
        "Tuned slicer profiles for multi-material engineering: infill geometry optimization, wall loop structural strength",
        "Fabricated end-use functional brackets, gears, and structural enclosures resistant to mechanical vibration",
        "Applied Design for Additive Manufacturing (DFAM) principles: minimizing overhang supports, optimizing print bed adhesion",
        "Mentored peers on safe lab operation, 3D printer calibration, and iterative hardware troubleshooting"
      ],
      specs: [
        { key: "Primary CAD Suites", val: "Onshape, Fusion 360, SolidWorks" },
        { key: "Slicers & Pre-Flight", val: "Bambu Studio, OrcaSlicer, PrusaSlicer" },
        { key: "Materials Mastered", val: "PLA+, PETG, TPU (95A flexible), Polycarbonate, CF-Nylon" },
        { key: "Hardware Utilized", val: "Bambu Lab X1-Carbon, Prusa MK4, Epilog Laser Cutter, Shop Drill Press" },
        { key: "Tolerance Control", val: "Interference fit (0.1mm), Sliding fit (0.25mm), Snap-fit joints" }
      ],
      media: {
        icon: "box",
        tagline: "Transforming digital geometries into battle-tested physical mechanisms."
      }
    },
    {
      id: "autonomous-rover-slam",
      title: "Next-Gen Sensor-Fused Autonomous Ground Vehicle",
      category: "robotics",
      badge: "Advanced Robotics",
      date: "2025 - Present",
      role: "Systems Architect & Embedded Engineer",
      shortDescription: "The evolution of Zainiac 19: an ESP32-powered all-wheel-drive rover featuring 9-DOF IMU orientation tracking, dual ultrasonic depth mapping, and local telemetry web server.",
      fullDescription: `Building directly upon the lessons learned from Zainiac 19, this next-generation mobile rover integrates modern low-cost compute and wireless telemetry to achieve superior spatial awareness.

Powered by a dual-core ESP32 microcontroller running real-time FreeRTOS tasks, the rover decouples motor control and PID velocity loops from sensor polling and network telemetry. An onboard 9-axis Inertial Measurement Unit (IMU) provides sensor fusion for heading and tilt compensation, while dual forward/lateral sonar sensors build an obstacle proximity matrix.

The vehicle broadcasts an asynchronous WebSockets telemetry dashboard, allowing live telemetry streaming (battery voltage, motor current draw, obstacle distances, and IMU pitch/roll/yaw) to any mobile device or laptop on the local network.`,
      highlights: [
        "Dual-core FreeRTOS architecture: Core 0 handles Wi-Fi/WebSockets, Core 1 executes real-time PID loops",
        "9-DOF IMU integration with Kalman-filtered attitude estimation (pitch, roll, yaw)",
        "Onboard web server hosting interactive HTML/CSS live telemetry and control HUD",
        "Modular 3D printed chassis featuring quick-swap battery bays and independent suspension dampers",
        "Emergency watchdog timers and low-voltage cutoff protection circuits"
      ],
      specs: [
        { key: "Controller", val: "ESP32-WROOM-32D (Dual-Core 240MHz, 520KB SRAM, Wi-Fi/BLE)" },
        { key: "Sensors", val: "MPU-9250 9-DOF IMU, Dual HC-SR04 Sonar, INA219 Voltage/Current Sensor" },
        { key: "Drivetrain", val: "4-Wheel Independent Metal Gearmotors with Optical Quadrature Encoders" },
        { key: "Telemetry", val: "Asynchronous WebSockets over 802.11 b/g/n (50Hz state broadcast)" },
        { key: "Battery System", val: "2S 7.4V 3000mAh 18650 Li-Ion Pack with integrated BMS protection" }
      ],
      media: {
        icon: "cpu",
        tagline: "Pushing embedded edge computing into autonomous spatial exploration."
      }
    }
  ],

  timeline: [
    {
      year: "2019",
      title: "Zainiac 19 & Philadelphia Maker Faire",
      category: "Robotics",
      description: "Designed and built first mobile obstacle-avoiding robot, Zainiac 19. Featured as an official maker in the Robotics category at the 2019 Philadelphia Maker Faire."
    },
    {
      year: "2023 - 2024",
      title: "STEAM Lab & Advanced 3D Prototyping",
      category: "Fabrication",
      description: "Expanded into high-precision parametric CAD and additive manufacturing at Princeton Day School's STEAM Lab, fabricating custom linkages, gearboxes, and multi-polymer assemblies."
    },
    {
      year: "2024 - Present",
      title: "Junior Volunteer Firefighter Service",
      category: "Field Operations",
      description: "Joined the local volunteer fire department in a junior capacity. Trained in fireground hydraulics, breathing apparatus (SCBA), positive pressure ventilation, and high-stress incident coordination."
    },
    {
      year: "2024 - 2025",
      title: "Aerodynamics & Fixed-Wing Flight Models",
      category: "Aerospace",
      description: "Conducted airfoil optimization, CG stability modeling, and flight testing with custom composite-reinforced RC aircraft and onboard telemetry systems."
    },
    {
      year: "Summer 2025",
      title: "Princeton University MAE Research Intern",
      category: "Aerospace & Research",
      description: "Selected as an intern for the Joseph Henry Project in the Department of Mechanical and Aerospace Engineering under Prof. Michael Littman, reconstructing historic electromechanical apparatus and investigating electromagnetic physics."
    },
    {
      year: "2025 - 2026",
      title: "High School Senior & Future Aerospace Engineer",
      category: "Milestone",
      description: "Synthesizing robotics, aerospace engineering research, and emergency service experience as a high school senior preparing for university engineering studies."
    }
  ]
};
