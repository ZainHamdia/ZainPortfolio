/**
 * Zain Hamdia - Engineering Portfolio Data
 * Grounded strictly in verified information
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Zain Hamdia",
    role: "High School Senior & Aspiring Aerospace Engineer",
    school: "Princeton Day School",
    location: "Princeton, NJ",
    github: "https://github.com/ZainHamdia",
    repoUrl: "https://github.com/ZainHamdia/ZainPortfolio",
    email: "zainhamdia@gmail.com",
    bio: "I am a high school senior at Princeton Day School with a focus on aerospace engineering, robotics, and community service. My experience spans building custom robotics—beginning with my first robot, Zainiac 19, which was featured at the 2019 Philadelphia Maker Faire—to interning at Princeton University's Department of Mechanical and Aerospace Engineering, and serving as a volunteer junior firefighter."
  },

  projects: [
    {
      id: "zainiac-19",
      title: "Zainiac 19",
      subtitle: "First Custom Robot • 2019 Philadelphia Maker Faire",
      category: "robotics",
      badge: "Maker Faire 2019",
      date: "2019",
      summary: "Zain's first custom-built robot, designed for mobile navigation and exhibited at the 2019 Philadelphia Maker Faire in the Robotics category.",
      description: "Zainiac 19 was Zain's first major robotics build, sparked by an early interest in hardware and mechanical design. Built as a mobile robotics platform, it incorporated custom chassis assembly, motor control, and obstacle detection. The project was selected for exhibition at the 2019 Philadelphia Maker Faire, where Zain presented the robot live to event attendees in the Robotics category.",
      tags: ["Robotics", "Chassis Design", "Motor Control", "Maker Faire 2019", "Public Exhibition"]
    },
    {
      id: "joseph-henry-project",
      title: "Joseph Henry Project",
      subtitle: "Princeton University • Department of Mechanical & Aerospace Engineering",
      category: "aviation",
      badge: "Princeton MAE Internship",
      date: "Summer 2025",
      summary: "Summer research internship in Princeton University's MAE department studying and reconstructing historical scientific electromechanical apparatus.",
      description: "During the summer of 2025, Zain interned with the Joseph Henry Project in the Department of Mechanical and Aerospace Engineering at Princeton University under Professor Michael Littman. The project focuses on historical engineering reconstruction—investigating the physical apparatus, motors, and electromagnetic experiments developed by 19th-century physicist Joseph Henry. The work combined laboratory study, physics principles, and precision electromechanical modeling.",
      tags: ["Research Internship", "Princeton University", "Electromechanical Systems", "Physics", "MAE"]
    },
    {
      id: "volunteer-firefighting",
      title: "Volunteer Junior Firefighting",
      subtitle: "Emergency Response & Apparatus Training",
      category: "firefighting",
      badge: "Community Service",
      date: "Active Service",
      summary: "Serving the local community in a junior volunteer capacity, participating in emergency training, apparatus readiness, and teamwork under pressure.",
      description: "Zain serves as a junior volunteer firefighter, contributing to local community safety and emergency response operations. The experience involves hands-on training with fire service apparatus, understanding fluid flow in hoselines, mastering safety procedures (including Self-Contained Breathing Apparatus protocols), and working effectively as a disciplined team under the Incident Command System.",
      tags: ["Volunteer Firefighter", "Emergency Services", "Apparatus Operations", "Safety Protocols", "Team Leadership"]
    },
    {
      id: "steam-lab-prototyping",
      title: "STEAM Lab Prototyping & 3D Design",
      subtitle: "Princeton Day School",
      category: "robotics",
      badge: "Fabrication",
      date: "Ongoing",
      summary: "Using CAD modeling and 3D printing in the Princeton Day School STEAM Lab and home workshop to design and fabricate functional parts.",
      description: "An active builder at Princeton Day School's STEAM Lab, Zain designs 3D models and manufactures physical prototypes. Projects involve CAD modeling (Onshape, Fusion 360) and 3D printing functional components, brackets, and mechanisms for robotics and engineering ideas.",
      tags: ["CAD Modeling", "3D Printing", "Rapid Prototyping", "PDS STEAM Lab"]
    },
    {
      id: "aviation-projects",
      title: "Aviation & Aerodynamics Projects",
      subtitle: "Flight Principles & Aircraft Exploration",
      category: "aviation",
      badge: "Aerospace",
      date: "Ongoing",
      summary: "Projects and study focused on aeronautical engineering, flight dynamics, model aircraft, and the physics of lift and stability.",
      description: "Driven by a long-term goal of studying aerospace engineering in college, Zain undertakes projects exploring aerodynamics, wing profiles, and flight dynamics. This includes work with radio-controlled model aircraft and independent study of flight stability and propulsion.",
      tags: ["Aviation", "Aerodynamics", "Aerospace Engineering", "Flight Dynamics"]
    }
  ],

  skills: [
    {
      category: "Robotics & Hardware",
      items: ["Robot Assembly", "Microcontroller Integration", "Motor Drivers & Actuators", "Sensor Interfacing", "Soldering & Wiring"]
    },
    {
      category: "CAD & Prototyping",
      items: ["3D CAD (Onshape, Fusion 360)", "3D Printing (FDM)", "Laser Cutting", "Rapid Prototyping", "Design for Fabrication"]
    },
    {
      category: "Aviation & Research",
      items: ["Aerodynamics Basics", "Historical Apparatus Reconstruction", "Electromechanical Physics", "Laboratory Research", "Scientific Documentation"]
    },
    {
      category: "Fire Service & Leadership",
      items: ["Junior Volunteer Firefighter", "Incident Command System (ICS)", "Apparatus & Equipment Handling", "SCBA Protocols", "Emergency Teamwork"]
    }
  ]
};
