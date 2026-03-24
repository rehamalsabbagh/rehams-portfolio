export interface ProjectSubsection {
  title: string;
  subTitle: string;
  content: string[];
  images: string[];
}

export interface ProjectSection {
  title: string;
  subTitle: string;
  content?: string[];
  images: string[];
  subsections?: ProjectSubsection[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  introduction: ProjectSection;
  requirements: ProjectSection;
  solution: ProjectSection;
  cover: string;
  image: string;
  hoverImage: string;
  mobileImage: string | null;
  techStack: string[];
  sections: ProjectSection[];
  visitWebsite: string;
}

export const projects: Project[] = [
  {
    id: "3d-plane-seat-configurator",
    title: "3D Plane Seat Configurator",
    role: "Lead Frontend Developer",
    techStack: [
      "React.js",
      "TypeScript",
      "Three.js",
      "AWS Lambda",
      "REST APIs",
      "CSV-driven configuration",
      "DOC generation",
    ],
    introduction: {
      title: "Introduction",
      subTitle: "Enterprise Design Solution",
      content: [
        "An enterprise-grade platform for airlines to customize aircraft interiors via an |interactive 3D interface|. Built with React and |Three.js|, the system provides real-time visualization of modular components and materials. The architecture is |fully data-driven|, utilizing centralized CSV structures for dynamic UI generation and pricing logic. Featuring |animated camera transitions| and AWS Lambda integration, it streamlines the workflow from initial design to |automated DOC order summaries|.",
      ],
      images: [],
    },
    image: "/assets/22-3d-config.png",
    hoverImage: "/assets/23-3d-config.png",
    mobileImage: null,
    cover: "/assets/3d-config-cover.png",
    requirements: {
      title: "Client Requirements",
      subTitle: "Scope Overview",
      content: [
        "An interactive 3D configurator for airlines to customize modular aircraft seats through an intuitive, responsive experience.",
        "A realistic GLB-based architecture allowing independent modification of parts, materials, and finishes with instant feedback.",
        "A guided configuration workflow featuring smooth camera transitions and real-time pricing updates.",
        "An advanced engine managing complex dependencies and validation rules through a fully data-driven structure.",
        "A dynamic UI generated entirely from configuration data, eliminating hardcoded logic for maximum scalability.",
        "Full lifecycle management supporting persistent drafts, administrative control, and automated DOC summaries.",
      ],
      images: [],
    },
    solution: {
      title: "The Solution",
      subTitle: "Architecture",
      content: [
        "A modular 3D configurator was built with React.js and Three.js | featuring dynamically loaded GLB components | that stack into a single scene for maximum scalability. The system swaps parts and material properties | in real-time | while synchronized camera transitions | focus on active sections | to provide an intuitive, immersive interaction flow.",
      ],
      images: [
        "/assets/13-3d-config.png",
        "/assets/07-3d-config-03.png",
        "/assets/09-3d-config-05.png",
        "/assets/10-3d-config-06.png",
        "/assets/11-3d-config-07.png",
      ],
    },
    sections: [
      {
        title: "Solution Details",
        subTitle: "",
        subsections: [
          {
            title: "Data-Driven Configuration Engine",
            subTitle: "Data-Driven Configuration Engine",
            content: [
              "All configuration data is sourced from a structured CSV file, including option names, dependencies, cascades, prerequisites, and pricing rules.",
              "A modular logic engine is implemented to handle dependency resolution, cascading selections, validation of prerequisites, and conflict prevention.",
              "The UI is dynamically generated from the CSV data, allowing new configuration options to be introduced without modifying core UI logic.",
              "This approach ensured flexibility and reduced long-term maintenance effort.",
            ],
            images: [],
          },
          {
            title: "State Persistence & AWS Integration",
            subTitle: "State Persistence & AWS Integration",

            content: [
              "User selections are stored via API calls to AWS Lambda functions, persisting data in a cloud database.",
              "Two configuration states are supported: Draft (Not Submitted) and Submitted.",
              "If a user refreshes the page, their saved selections can be retrieved via an API call and restored automatically.",
              "Finalized configurations are stored and displayed in both the configurator summary page and the admin management panel.",
            ],
            images: [],
          },
          {
            title: "Admin & Pricing System",
            subTitle: "Admin & Pricing System",

            content: [
              "The administrative interface is developed to view and manage user configurations, adjust configuration pricing, and monitor submitted orders.",
              "Pricing is dynamically linked to configuration options. As users make selections, the total price updates in real-time.",
              "Price retrieval and updates are handled via secure AWS Lambda API calls, ensuring centralized pricing control.",
            ],
            images: [],
          },
          {
            title: "Automated DOC Generation",
            subTitle: "Automated DOC Generation",

            content: [
              "Upon submission, configuration data is injected into a predefined DOC template to generate a structured order summary for clients.",
              "This automated document generation ensures consistency, accuracy, and operational efficiency.",
            ],
            images: [],
          },
        ],
        images: [],
      },
      {
        title: "Impact",
        subTitle: "Operational Efficiency & UX",
        content: [
          "Delivered a |scalable 3D configuration system| that eliminates hardcoded UI logic through a |fully data-driven architecture|. The platform elevated the user experience with |guided camera animations| and real-time feedback, while |streamlining operational workflows| via automated DOC generation and |centralized pricing management|.",
        ],
        images: [],
      },
    ],
    visitWebsite: "",
  },
  {
    id: "2d-vehicle-configurator",
    title: "2D 360° Vehicle Configurator",
    role: "Lead Frontend Developer",
    techStack: [
      "React.js",
      "TypeScript",
      "REST APIs",
      "Canvas Rendering",
      "Data-driven architecture",
      "DOC generation",
    ],
    introduction: {
      title: "Introduction",
      subTitle: "Modular 360° Visualization",
      content: [
        "A high-performance configurator utilizing |frame-based rendering| to simulate smooth 360° rotation without 3D overhead. The system uses |layered image stacks| to allow instant updates of paints and trims without reloading frames. Built on a |modular, data-driven architecture|, it dynamically generates logic and UI from a central source, supporting persistent storage and |automated DOC summaries| for a seamless, scalable customization workflow.",
      ],
      images: [],
    },
    // "A high-performance configurator utilizing |frame-based rendering| to simulate smooth 360° rotation without 3D overhead. The system uses |layered image stacks| to allow instant updates of paints and trims without reloading frames. Built on a |modular, data-driven architecture|, it dynamically generates logic and UI from a central source, supporting persistent storage and |automated DOC summaries| for a seamless, scalable customization workflow.",
    image: "/assets/17-2d-config-.png",
    hoverImage: "/assets/18-2d-config-.png",
    cover: "/assets/2d-config-cover.png",
    mobileImage: null,

    requirements: {
      title: "Client Requirements",
      subTitle: "Scope Overview",
      content: [
        "A high-performance 360° engine enabling interactive drag-to-rotate navigation without the overhead of real-time 3D rendering.",
        "A layered rendering architecture allowing instant customization of paints, materials, and trims without full image reloads.",
        "A data-driven configuration engine that automatically generates the UI and manages complex modular dependencies.",
        "Integrated state persistence and export tools for saving configurations, capturing screenshots, and generating structured DOC summaries.",
        "A fully scalable framework designed for rapid deployment and adaptation across diverse vehicle models and variations.",
      ],
      images: [],
    },
    solution: {
      title: "The Solution",
      subTitle: "Frame-Based 360° Rendering Architecture",
      content: [
        "A frame-based engine was built in React.js | to simulate 360-degree vehicle rotation | using pre-rendered image sequences. Users navigate via drag-and-drop interaction | while individual components are managed through stacked image layers | for independent material swapping. This layered architecture | eliminates full image reloads | significantly reducing bandwidth consumption | and optimizing performance without real-time 3D processing.",
      ],
      images: ["/assets/17-2d-config.png"],
    },
    sections: [
      {
        title: "Solution Details",
        subTitle: "The Solution",
        subsections: [
          {
            title: "Modular Configuration Engine",
            subTitle: "Modular Configuration Engine",

            content: [
              "All configuration options, rules, dependencies, and pricing structures are defined in a centralized data source.",
              "The UI is dynamically generated from this data, eliminating hardcoded configuration logic.",
              "The configuration handler is built to be modular to manage option selection, validation, and cascading rules.",
              "This approach enables rapid onboarding of new vehicle models and option sets without modifying core application logic.",
            ],
            images: [],
          },
          {
            title: "State Management & Persistence",
            subTitle: "State Management & Persistence",

            content: [
              "User configurations can be saved and retrieved through REST API integration.",
              "Returning users can restore previously saved builds seamlessly.",
              "The application maintains consistent configuration states across sessions.",
            ],
            images: [],
          },
          {
            title: "Screenshot & DOC Generation",
            subTitle: "Screenshot & DOC Generation",

            content: [
              "Users can download high-quality screenshots of their configured vehicle directly from the application.",
              "At the end of the configuration process, a structured DOC summary is generated containing selected options and pricing details.",
              "Automated document generation ensures consistency and supports internal sales workflows.",
            ],
            images: [],
          },
        ],
        images: [],
      },
      {
        title: "Impact",
        subTitle: "Performance & Conversion",
        content: [
          "Delivered a |performant 360° vehicle configurator| without heavy 3D overhead, utilizing an |optimized layered stacking architecture|. The system enables |scalable, model-agnostic configuration| through data-driven UI generation, while boosting engagement with |smooth drag-based interaction|. Operational efficiency was achieved through |instant visual feedback| and automated |sales-ready DOC summaries|.",
        ],
        images: [],
      },
    ],
    visitWebsite: "",
  },
  {
    id: "configurator-admin-control-plane",
    title: "Configurator Admin Portal",
    role: "Lead Frontend Developer",
    techStack: [
      "React.js",
      "TypeScript",
      "AWS Cognito (RBAC)",
      "AWS Lambda & S3",
      "Dynamic CSV Orchestration",
      "Tailwind CSS",
    ],
    introduction: {
      title: "Introduction",
      subTitle: "Operational Control Plane",
      content: [
        "A centralized |administrative dashboard| acting as the |Single Source of Truth| for the 3D Plane Seat Configurator. Utilizing an |S3-hosted CSV architecture|, it synchronizes pricing and logic across platforms while providing |AWS Cognito-secured| management of user lifecycles, |real-time cost breakdowns|, and custom asset uploads.",
      ],
      images: [],
    },
    image: "/assets/24-admin-app-01.png",
    hoverImage: "/assets/25-admin-app-02.png",
    mobileImage: null,
    cover: "/assets/admin-portal-cover.png",
    requirements: {
      title: "Client Requirements",
      subTitle: "Scope Overview",
      content: [
        "A secure management interface with robust user CRUD operations and account verification workflows.",
        "Live data-driven synchronization of configuration rules and pricing via centralized S3 storage.",
        "Comprehensive user activity monitoring, including last-login tracking and inactivity filtering.",
        "Centralized access to user-submitted assets and automated DOC order summaries.",
        "Granular account status control including manual verification and automated activation emails.",
      ],
      images: [],
    },
    solution: {
      title: "The Solution",
      subTitle: "Infrastructure & Security",
      content: [
        "We implemented a |bi-directional data flow| where administrative changes to S3-hosted CSVs instantly update the logic of the public configurator. Security is handled via |AWS Cognito RBAC|, ensuring only authorized personnel can manage sensitive user data or modify |pricing architectures|. The UI was built to be purely functional and high-density, allowing for |rapid filtering of pending accounts| and seamless document retrieval.",
      ],
      images: ["/assets/26-admin-app-03.png"],
    },
    sections: [
      {
        title: "Solution Details",
        subTitle: "",
        subsections: [
          {
            title: "Identity & Access Management",
            subTitle: "Security First",
            content: [
              "Integrated |AWS Cognito| to handle complex user states (Verified vs. Pending) and secure activation workflows.",
              "Implemented |batch email triggers| through Lambda to re-send activation credentials to inactive or unverified users.",
              "Designed a |high-density user table| with advanced filtering for last-login timestamps and verification status.",
            ],
            images: [],
          },
          {
            title: "Dynamic Asset & Price Control",
            subTitle: "Data Orchestration",
            content: [
              "Engineered the |CSV synchronization layer|, allowing admins to adjust cost-breakdowns without writing a single line of code.",
              "Created a |centralized file viewer| for user-uploaded customization specs stored in |AWS S3|.",
              "Shared the |DOC generation logic| between the client and admin apps to ensure 100% document consistency.",
            ],
            images: [],
          },
        ],
        images: [],
      },
      {
        title: "Impact",
        subTitle: "Operational Governance",
        content: [
          "Successfully |bridged the gap| between client-side customization and back-office operations. By centralizing the |CSV-driven logic|, we reduced maintenance overhead by 50% and eliminated data discrepancies. The |automated activation workflow| significantly decreased manual support tickets, while the |unified S3 architecture| ensured that every order summary remains a perfectly accurate reflection of the user's intent.",
        ],
        images: [],
      },
    ],
    visitWebsite: "",
  },
  {
    id: "examiner-avatar-simulator",
    title: "Examiner Avatar Simulator",
    role: "Lead Frontend Developer",
    techStack: [
      "React.js",
      "Three.js",
      "React Three Fiber",
      "GLSL / Shaders",
      "Web Audio API",
      "State Machine Logic",
    ],
    introduction: {
      title: "Introduction",
      subTitle: "Conversational AI Visualization",
      content: [
        "A high-fidelity |examiner simulator| designed to visualize AI-driven conversations through a lifelike 3D avatar. Built with |React Three Fiber|, the system synchronizes complex |facial animations| with voice synthesis to simulate realistic human interaction. The project focuses on creating a |natural behavioral flow| through randomized animation blending and state-based logic, ensuring an immersive and non-repetitive user experience.",
      ],
      images: [],
    },
    image: "/assets/21-avatar-01.png",
    hoverImage: "/assets/22-avatar-02.png",
    mobileImage: null,
    cover: "",
    requirements: {
      title: "Client Requirements",
      subTitle: "Scope Overview",
      content: [
        "A dynamic 3D avatar system capable of loading and controlling animated GLB models in real-time.",
        "Precision lip-sync simulation and facial expressions synchronized with external audio streams.",
        "A state-based animation engine supporting four distinct modes: Idle, Talking, Listening, and Encouraging.",
        "Advanced procedural randomization to prevent repetitive movements and ensure natural facial behavior.",
        "A language-agnostic architecture designed for English phonemes with scalability for global localization.",
      ],
      images: [],
    },
    solution: {
      title: "The Solution",
      subTitle: "Behavioral Logic",
      content: [
        "The system utilizes a |custom State Machine| to manage animation transitions | while a randomization layer | selects from a library of facial variations to avoid the 'Uncanny Valley.' For speech, we implemented |adaptive mouth movement logic| that simulates English phonemes | even in the absence of raw audio data | by utilizing timed sequence testing to cover various speaking speeds and cadences.",
      ],
      images: ["/assets/23-avatar-03.png"],
    },
    sections: [
      {
        title: "Solution Details",
        subTitle: "",
        subsections: [
          {
            title: "Animation Blending & State Management",
            subTitle: "Procedural Behavior",
            content: [
              "Developed a library of animation variations for each state—|Idle, Talking, Listening, and Encouraging|—to ensure visual variety.",
              "Implemented a |randomized selection logic| that blends transitions between states, mimicking natural micro-expressions.",
              "Designed the system to be |completely decoupleable from specific audio assets|, allowing for flexible testing across different speech patterns.",
            ],
            images: [],
          },
          {
            title: "Phonetic Simulation & Scalability",
            subTitle: "Linguistic Flexibility",
            content: [
              "Engineered the |mouth movement sequences| to prioritize English linguistic patterns while maintaining a modular structure for future languages.",
              "Utilized |testing phases with varying pause-and-play sequences| to ensure the avatar remained convincing across different speaking speeds.",
              "Optimized the |GLB rendering pipeline| to maintain 60fps during complex facial morphing on web browsers.",
            ],
            images: [],
          },
        ],
        images: [],
      },
      {
        title: "Impact",
        subTitle: "Human-Centric UX",
        content: [
          "Delivered a |lifelike simulation environment| that effectively bridges the gap between AI voice data and human visual expectation. The |randomized animation engine| successfully eliminated mechanical repetition, while the |state-driven architecture| provided a robust framework for expanding into localized markets and |multi-language support|.",
        ],
        images: [],
      },
    ],
    visitWebsite: "",
  },
  {
    id: "online-gateway-website",
    title: "Payment Gateway Website & CMS",
    role: "Frontend Developer",
    techStack: [
      "React.js",
      "TypeScript",
      "REST APIs",
      "Multilingual Architecture",
      "Dynamic Content",
      "Role-Based CMS",
      "Atomic UI Design System",
    ],
    introduction: {
      title: "Introduction",
      subTitle: "Multi-market Service Architecture",
      content: [
        "A scalable, |multilingual platform| designed to deliver region-specific services across nine international markets. The architecture is entirely |data-driven|, serving tailored content from a centralized database. Developed using an |Atomic UI design system| for maximum consistency, the solution includes a |custom internal CMS| that empowers regional teams to manage localized governance and content, supporting rapid international growth.",
      ],
      images: [],
    },
    image: "/assets/19-tap-payments.png",
    hoverImage: "/assets/20-tap-payments.png",
    mobileImage: "/assets/21-tap-payments.png",
    cover: "/assets/tap-payments-cover.webp",

    requirements: {
      title: "Client Requirements",
      subTitle: "Scope Overview",
      content: [
        "A customer-facing corporate platform designed to present enterprise-level services across global markets.",
        "A multi-regional architecture supporting localized service availability and multilingual content for nine international territories.",
        "A dynamic data-driven system that replaces hardcoded logic with centralized content management via REST APIs.",
        "An internal CMS framework empowering regional teams to manage localized governance and content independently.",
        "A modular, scalable foundation built to support rapid regional expansion and continuous service updates.",
      ],
      images: [],
    },
    solution: {
      title: "The Solution",
      subTitle: "Customer-Facing Website Architecture",

      content: [
        "A public-facing platform was built using React.js and TypeScript | with a modular atomic UI design system | to ensure maintainability. All content is dynamically rendered via REST APIs | from a centralized database | supporting country-based service customization | and a multilingual framework. This architecture allows for localized content and regional offerings | to be served seamlessly | across all global markets.",
      ],
      images: [
        "/assets/11-tap-website-01.png",
        "/assets/12-tap-website-02.png",
        "/assets/13-tap-website-03.png",
        "/assets/14-tap-website-04.png",
        "/assets/15-tap-website-05.png",
      ],
    },
    sections: [
      {
        title: "Soluton Details",
        subTitle: "Soluton Details",
        subsections: [
          {
            title: "Multilingual & Regional Content System",
            subTitle: "Multilingual & Regional Content System",

            content: [
              "Content is structured to support 9 regions, each containing multiple languages.",
              "Regional logic determines available services and localized content dynamically.",
              "Language and region configurations are abstracted from the UI layer to maintain clean separation of concerns.",
              "This modular structure allows easy onboarding of new countries or language expansions without major codebase changes.",
            ],
            images: [],
          },
          {
            title: "Internal Content Management Platform",
            subTitle: "Internal Content Management Platform",

            content: [
              "Developed a dedicated internal CMS to manage all customer-facing content.",
              "The CMS allows authorized users to create, edit, and manage content for each region and language.",
              "Role-based access control ensures secure content governance across teams.",
              "Content updates made through the CMS are immediately reflected on the public website through API-driven rendering.",
            ],
            images: [],
          },
          {
            title: "Maintenance & Scalability",
            subTitle: "Maintenance & Scalability",

            content: [
              "Ongoing maintenance, feature enhancements, and regional updates.",
              "The system was designed with scalability in mind to accommodate new services and additional regions.",
              "The architecture minimizes hardcoded logic, ensuring long-term maintainability and adaptability.",
            ],
            images: [],
          },
        ],
        images: [],
      },
      {
        title: "Impact",
        subTitle: "Global Governance & Scale",
        content: [
          "Delivered a |scalable multilingual platform| supporting nine regions through a |centralized content governance| system. Operational efficiency was achieved by replacing hardcoded logic with a |custom-built CMS|, while a |modular atomic UI design system| ensured consistent brand messaging. This architecture provides a |high-performance foundation| for rapid international expansion across global markets.",
        ],
        images: [],
      },
    ],
    visitWebsite: "https://tap.company",
  },
];
