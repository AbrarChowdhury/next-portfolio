import {
  virtyouTechList,
  langaraTechList,
  reflectTechList,
  hmsTechList,
  vsmTechLists,
  mindbloomTechList,
} from "../techIconList"

const experience = [
  {
    date: "Now",
    company: "Tech Dojo Ltd.",
    companyURL: "https://www.tech-dojo.org/",
    role: "Software Engineer",
    responsibilities:
      "In my role at Techdojo Ltd, I investigate, conceptualize, and develop inventive solutions tailored for international clientele. I harness external machine learning models and services to enhance the capabilities of the software we develop. My responsibilities include continuously exploring cutting-edge technologies and maintaining flexibility in technology stacks, prioritizing project specifications and timely delivery. I build Web apps, VR apps, and Mobile apps as required by the project needs. Additionally, I collaborate with teammates, conduct code reviews, and maintain thorough documentation to ensure the quality and reliability of our software solutions.",
    during: "techdojo",
    background: "feelgoodboxes/rect_back_blue.svg",
  },
  {
    date: "July 2023",
    company: "Bioforge Health Systems",
    companyURL: "https://www.bioforgehealth.org/",
    role: "Software Engineer",
    responsibilities:
      "During my tenure at Bioforge Health Systems Ltd, I engaged in system design dialogues, emphasizing scalability, system flow, user requirements, and data management priorities. I designed and constructed modules for an integrated hospital management system and developed rapid, responsive, and interactive web applications that aligned with industry standards, with a strong focus on user experience (UX). I implemented componentization and application structuring using React.js, optimizing development efficiency for both myself and my team.",
    during: "bioforge-2",
    background: "/feelgoodboxes/rect_back_pink.svg",
  },
  {
    date: "September 2020",
    company: "Bioforge Health Systems",
    companyURL: "https://www.bioforgehealth.org/",
    role: "Product Designer",
    responsibilities:
      "As a Product Designer at Bioforge Health Systems Ltd, I designed and built medical IoT devices and hardware. I made sketches for rapid idea generation and translated these sketches into 3D models using Autodesk 360. I built scaled-down models using 3D printing and craftsmanship, contributing to the development of innovative medical products.",
    during: "bioforge-1",
    background: "/feelgoodboxes/rect_back_green.svg",
  },
]

const projects = [
  {
    imageSrc: "./project_images/virtyou.png",
    imageAlt: "VirtYou Logo",
    title: "VirtYou",
    url: "https://virtyou.com/",
    shortDesc:
      "Automated emotion (AE) software for photorealistic 3D virtual actors.",
    description:
      "VirtYou specializes in creating automated emotion (AE) software for photorealistic 3D virtual actors. This technology enables virtual actors to deliver emotionally compelling, interactive, and live performances using AI-generated responses as a script.",
    role: {
      text: "I am a core developer for VirtYou, involved in various aspects of the project, including web development, creating procedural animations with JavaScript, building 3D models, rigging, animating, and implementing machine learning models. Simultaneously, building two inherently different applications for a couple of clients of VirtYou and gradually developing an easy-to-integrate system for anybody to incorporate into their app",
    },
    iconList: virtyouTechList,
    during: "techdojo",
  },
  {
    isSubProject: true,
    imageSrc: "./project_images/langara.png",
    imageAlt: "virtyou langara screenshot",
    logoSrc: "images/langara.svg",
    logoAlt: "Langara Logo",
    companyURL: "https://langara.ca/",
    title: "Langara",
    iconList: langaraTechList,
    shortDesc: "Educational VR APP",
    description:
      "A WebXR app designed to train teachers by simulating interactions with a virtual child in a childcare setting, allowing educators to practice and improve their skills in handling various emotional scenarios.",
    role: {
      text: "Although very familiar with Three.js at this point, this was the first time I was working on a VR app. Worked across different parts of this app, setting up structural code, creating, and retargeting preset animations alongside VirtYou's procedural animations. Increased the depth of my knowledge working with various animation techniques both on the web and in Blender. A lot of research + experimentation = a lot of fun",
    },
    during: "techdojo",
  },
  {
    isSubProject: true,
    imageSrc: "./project_images/mindbloom.jpg",
    imageAlt: "Mindbloom Logo",
    logoSrc: "images/mindbloom.svg",
    logoAlt: "Mindbloom Logo",
    companyURL: "https://www.mindbloom.ai/",
    title: "Mindbloom AI",
    iconList: mindbloomTechList,
    shortDesc: "Employee training app",
    description:
      "Mindbloom AI helps bridge the training and practice gap for managers by providing a scalable and accessible practice environment for difficult conversations, such as performance reviews and workplace disputes.",
    role: {
      text: "I developed a web app that allows users to practice conversations with a lifelike virtual coach. This involves collecting user inputs, processing scenarios with Mindbloom's backend, facilitating real-time interactions with the virtual coach, and providing performance feedback.",
    },
    during: "techdojo",
  },
  {
    imageSrc: "./images/reflect.png",
    imageAlt: "Reflect AI screenshot",
    title: "Reflect AI",
    url: "https://www.alphyco.com/",
    shortDesc:
      "AI driven communication add-on for Webex, Google Meet, Outlook™, and Gmail™",
    description:
      "Reflect AI is a communication add-on for Webex, Google Meet, Outlook™, and Gmail™ that flags harmful, unlawful, and unethical language before sending. For video calls in Webex and Google Meet, it converts speech-to-text and provides live feedback through icons and emojis, helping protect against ethical breaches.",
    role: {
      text: "I primarily worked on the Webex integration for Reflect AI. My responsibilities included:",
      bullets: [
        "Designing and implementing the WebSocket architecture for providing live feedback.",
        "Researching and understanding the Webex developer documentation.",
        "Developing the extension for Webex.",
        "Implementing voice-to-text functionality for Webex video calls.",
        "Resolving permission issues and ensuring seamless integration.",
      ],
    },
    iconList: reflectTechList,
    during: "techdojo",
  },
  {
    imageSrc: "./project_images/hms.gif",
    imageAlt: "HMS screenshot",
    title: "Hospital Management System",
    shortDesc:
      "An integrated solution designed to streamline hospital operations",
    description:
      "Bioforge HMS (Hospital Management System) is an integrated solution designed to streamline hospital operations, enhance patient care, and improve overall efficiency. It includes various modules such as discharge, lab, appointment, and statistics, each tailored to address specific aspects of hospital management.",
    role: {
      text: "As a software engineer, I played a key role in developing and maintaining several modules within the Bioforge HMS, including:",
    },
    iconList: hmsTechList,
    during: "bioforge-2",
  },
  {
    isSubProject: true,
    imageSrc: "./project_images/hms_discharge.gif",
    imageAlt: "hms data flow diagram",
    title: "Discharge Module",
    shortDesc: "Web-App: simplify patient discharges",
    iconList: hmsTechList,
    description:
      "The HMS-Discharge Module is part of a comprehensive hospital management system designed to streamline the discharge process for patients. It ensures accurate and efficient handling of discharge procedures, including documentation and coordination with other hospital departments.",
    role: {
      text: "I developed the discharge module, focusing on:",
      bullets: [
        "Implementing features for managing patient discharge records.",
        "Ensuring smooth data flow and integration with other hospital management modules.",
        "Collaborating with the team to ensure the module met hospital requirements and standards.",
      ],
    },
    during: "bioforge-2",
  },
  {
    isSubProject: true,
    imageSrc: "./project_images/hms_lab.gif",
    imageAlt: "hms data flow diagram",
    title: "Lab Module",
    shortDesc: "Lab Module",
    iconList: hmsTechList,
    description:
      "The HMS-Lab Module manages the laboratory operations within the hospital, including test orders, results, and lab workflows.",
    role: {
      text: "I worked on the lab module, where I:",
      bullets: [
        "Developed and maintained functionalities for managing lab tests and results.",
        "Integrated lab results with patient records for seamless data accessibility.",
        "Ensured compliance with medical standards and protocols.",
      ],
    },
    during: "bioforge-2",
  },
  {
    isSubProject: true,
    imageSrc: "./project_images/hms_stastistics.gif",
    imageAlt: "hms data flow diagram",
    title: "Statistics Module",
    shortDesc: "Statistics",
    iconList: hmsTechList,
    description:
      "The HMS-Statistics Module provides comprehensive data analytics and reporting tools for hospital management, aiding in decision-making and performance evaluation.",
    role: {
      text: "I was involved in the development of the statistics module, focusing on:",
      bullets: [
        "Implementing data aggregation and visualization features.",
        "Ensuring accurate and real-time reporting of hospital metrics.",
        "Collaborating with stakeholders to define key performance indicators and reporting requirements.",
      ],
    },
    during: "bioforge-2",
  },
  {
    isSubProject: true,
    imageSrc: "./project_images/hms_appointment.gif",
    imageAlt: "hms data flow diagram",
    title: "Appointment Module",
    shortDesc: "Appointment",
    iconList: hmsTechList,
    description:
      "The HMS-Appointment Module facilitates the scheduling and management of patient appointments, improving the efficiency of hospital operations.",
    role: {
      text: "I contributed to the appointment module by:",
      bullets: [
        "Implementing features for appointment booking and management.",
        "Ensuring real-time updates and notifications for both patients and healthcare providers.",
        "Optimizing the appointment scheduling system for better resource utilization.",
      ],
    },
    during: "bioforge-2",
  },
  {
    imageSrc: "./images/vsm.png",
    imageAlt: "VSM screenshot",
    title: "Real-Time Vital Sign Monitor",
    description:
      "The Vital Sign Monitor project involves the development of a cost-effective solution for real-time remote monitoring of patients' vital signs.",
    role: {
      text: "I worked on the software integration of the vital sign monitor, ensuring:",
      bullets: [
        "Seamless data transmission from IoT devices to the hospital management system.",
        "Real-time processing and alert mechanisms for abnormal vital signs.",
        "User-friendly interface for healthcare providers to monitor patients remotely.",
      ],
    },
    iconList: vsmTechLists,
    during: "bioforge-2",
  },

  {
    imageSrc: "./images/incubator1.png",
    imageAlt: "Neonatal Incubator screenshot",
    title: "Neonatal Incubator",
    shortDesc: "Affordable, portable, designed for low-resource environments",
    description:
      "Designed a low-cost neonatal incubator to provide a controlled environment for newborns. The design focused on affordability and ease of use in low-resource settings.",
    role: {
      text: "As a product designer, I:",
      bullets: [
        "Worked on the design and development of the neonatal incubator.",
        "Collaborated with medical professionals to ensure the incubator met healthcare standards.",
        "Contributed to the project that received recognition and awards for its innovative design and impact.",
      ],
    },
    during: "bioforge-1",
  },
  {
    imageSrc: "./images/ptl.jpg",
    imageAlt: "Phototherapy Lights screenshot",
    title: "Phototherapy Lights",
    shortDesc: "Phototherapy lights for treating neonatal jaundice",
    description:
      "Developed phototherapy lights for treating neonatal jaundice. The design ensures effective treatment while being safe and affordable.",
    role: {
      text: "As a product designer, I:",
      bullets: [
        "Designed the phototherapy light device, focusing on functionality and ease of use.",
        "Integrated IoT capabilities for real-time monitoring and data collection.",
        "Ensured the device met medical requirements for effective treatment of neonatal jaundice.",
      ],
    },
    during: "bioforge-1",
  },
]

export { experience, projects }
