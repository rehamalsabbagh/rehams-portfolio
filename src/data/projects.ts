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
      "PDF generation",
    ],
    introduction: {
      title: "Introduction",
      subTitle: "Enterprise Design Solution",
      content: [
        "An enterprise-grade platform for airlines to customize aircraft interiors via an |interactive 3D interface|. Built with React and |Three.js|, the system provides real-time visualization of modular components and materials. The architecture is |fully data-driven|, utilizing centralized CSV structures for dynamic UI generation and pricing logic. Featuring |animated camera transitions| and AWS Lambda integration, it streamlines the workflow from initial design to |automated PDF order summaries|.",
      ],
      images: [],
    },
    // "An enterprise-grade platform for airlines to customize aircraft interiors via an |interactive 3D interface|. Built with React and |Three.js|, the system provides real-time visualization of modular components and materials. The architecture is |fully data-driven|, utilizing centralized CSV structures for dynamic UI generation and pricing logic. Featuring |animated camera transitions| and AWS Lambda integration, it streamlines the workflow from initial design to |automated PDF order summaries|.",
    image: "/assets/06-3d-config-02.png",
    cover: "/assets/3d-config-cover.png",
    requirements: {
      title: "Client Requirements",
      subTitle: "Scope Overview",
      content: [
        "A highly interactive 3D seat configurator enabling airlines to customize modular aircraft seat models through an intuitive and responsive digital experience.",
        "A realistic seat architecture built from dynamically assembled GLB components, allowing independent modification of parts, materials, finishes, and colors with immediate visual feedback.",
        "A guided configuration workflow enhanced by smooth animated camera transitions and real-time pricing updates reflecting user selections instantly.",
        "An advanced configuration engine managing dependencies, cascades, prerequisites, and validation rules through a fully data-driven structure.",
        "A dynamically generated user interface derived entirely from structured configuration data, eliminating hardcoded logic and improving long-term scalability.",
        "Persistent configuration management supporting draft and submitted states, centralized administrative control, and automated PDF summary generation.",
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
        "/assets/07-3d-config-03.png",
        // "/assets/08-3d-config-04.png",
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
            title: "Automated PDF Generation",
            subTitle: "Automated PDF Generation",

            content: [
              "Upon submission, configuration data is injected into a predefined PDF template to generate a structured order summary for clients.",
              "This automated document generation ensures consistency, accuracy, and operational efficiency.",
            ],
            images: [],
          },
        ],
        images: [],
      },
      {
        title: "Impact",
        subTitle: "Impact",
        content: [
          "Delivered a scalable and modular 3D configuration system adaptable to new seat models, reducing reliance on hardcoded UI logic through a fully data-driven architecture. The platform enhanced user experience with guided camera animations and real-time pricing feedback, while streamlining operational workflows through automated PDF generation and centralized pricing management.",
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
      "PDF generation",
    ],
    introduction: {
      title: "Introduction",
      subTitle: "Introduction",
      content: [
        "A high-performance configurator utilizing |frame-based rendering| to simulate smooth 360° rotation without 3D overhead. The system uses |layered image stacks| to allow instant updates of paints and trims without reloading frames. Built on a |modular, data-driven architecture|, it dynamically generates logic and UI from a central source, supporting persistent storage and |automated PDF summaries| for a seamless, scalable customization workflow.",
      ],
      images: [],
    },
    // "A high-performance configurator utilizing |frame-based rendering| to simulate smooth 360° rotation without 3D overhead. The system uses |layered image stacks| to allow instant updates of paints and trims without reloading frames. Built on a |modular, data-driven architecture|, it dynamically generates logic and UI from a central source, supporting persistent storage and |automated PDF summaries| for a seamless, scalable customization workflow.",
    image: "/assets/18-2d-config.png",
    cover: "/assets/2d-config-cover.png",

    requirements: {
      title: "Client Requirements",
      subTitle: "Scope Overview",
      content: [
        "Provide a smooth 360-degree interactive view of a vehicle without using heavy 3D rendering.",
        "Enable users to rotate the vehicle by dragging left and right across the screen.",
        "Allow dynamic customization of vehicle components such as paint, materials, trims, and accessories.",
        "Ensure fast performance without reloading entire high-resolution images for every change.",
        "Support data-driven configuration rules and modular option management.",
        "Automatically generate the UI based on configuration data.",
        "Allow users to retrieve previously saved configurations.",
        "Enable users to download screenshots of their configured vehicle.",
        "Generate a structured PDF summary of the final configuration.",
        "Ensure the system is scalable and adaptable to new vehicle models and variations.",
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
            title: "Frame-Based 360° Rendering Architecture",
            subTitle: "Frame-Based 360° Rendering Architecture",

            content: [
              "A frame-based rendering engine was designed and implemented in React.js to simulate a 360-degree vehicle rotation using a sequence of pre-rendered images. Users can drag left or right to navigate through the frames, creating a smooth rotational experience without requiring real-time 3D processing. Each rotational frame is composed of stacked image layers representing different configurable parts of the vehicle. This layered stacking approach allows individual components, such as paint or materials, to be swapped independently without reloading the entire frame. The architecture significantly improves performance and reduces bandwidth consumption compared to full image replacement strategies.",
            ],
            images: ["/assets/17-2d-config.png"],
          },
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
            title: "Screenshot & PDF Generation",
            subTitle: "Screenshot & PDF Generation",

            content: [
              "Users can download high-quality screenshots of their configured vehicle directly from the application.",
              "At the end of the configuration process, a structured PDF summary is generated containing selected options and pricing details.",
              "Automated document generation ensures consistency and supports internal sales workflows.",
            ],
            images: [],
          },
        ],
        images: [],
      },
      {
        title: "Impact",
        subTitle: "Impact",

        content: [
          "A performant 360° vehicle configurator was delivered without requiring heavy 3D rendering, using an optimized image loading strategy through a layered stacking architecture. The system enables scalable, model-agnostic configuration through data-driven UI generation, while improving user engagement with smooth drag-based interaction and instant visual feedback. Sales processes are streamlined with downloadable screenshots and automated PDF summaries.",
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
      "Dynamic Content Rendering",
      "Role-Based CMS",
      "Atomic UI Design System",
    ],
    introduction: {
      title: "Introduction",
      subTitle: "Introduction",
      content: [
        "A scalable, |multilingual platform| designed to deliver region-specific services across nine international markets. The architecture is entirely |data-driven|, serving tailored content from a centralized database. Developed using an |Atomic UI design system| for maximum consistency, the solution includes a |custom internal CMS| that empowers regional teams to manage localized governance and content, supporting rapid international growth.",
      ],
      images: [],
    },
    // "A scalable, |multilingual platform| designed to deliver region-specific services across nine international markets. The architecture is entirely |data-driven|, serving tailored content from a centralized database. Developed using an |Atomic UI design system| for maximum consistency, the solution includes a |custom internal CMS| that empowers regional teams to manage localized governance and content, supporting rapid international growth.",
    image: "/assets/11-tap-website-01.png",
    cover: "/assets/tap-payments-cover.webp",

    requirements: {
      title: "Client Requirements",
      subTitle: "Scope Overview",
      content: [
        "Develop and maintain a customer-facing corporate website to present the company’s services to enterprise clients.",
        "Support multiple countries with region-specific service availability.",
        "Enable multilingual support with localized content per region.",
        "Ensure all content is dynamically managed rather than hardcoded.",
        "Provide internal teams with a content management platform to control regional content.",
        "Allow content customization for 9 different regions, each supporting multiple languages.",
        "Maintain scalability to support future regional expansion and service updates.",
      ],
      images: [],
    },
    solution: {
      title: "The Solution",
      subTitle: "Customer-Facing Website Architecture",

      content: [
        "A public-facing platform was built using React.js and TypeScript | with a modular atomic UI design system | to ensure maintainability. All content is dynamically rendered via REST APIs | from a centralized database | supporting country-based service customization | and a multilingual framework. This architecture allows for localized messaging and regional offerings | to be served seamlessly | across all global markets.",
      ],
      images: [
        "/assets/11-tap-website-01.png",
        "/assets/12-tap-website-02.png",
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
              "Regional logic determines available services and localized messaging dynamically.",
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
              "Responsibility of ongoing maintenance, feature enhancements, and regional updates.",
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
        subTitle: "Impact",
        content: [
          "A scalable multilingual corporate platform was delivered, supporting nine regions and multiple languages, with centralized content governance enabled through a custom-built CMS. Operational efficiency was improved by removing hardcoded regional logic, and the flexible, modular architecture aligned with the atomic UI design system supported international expansion. The platform ensures consistent brand messaging and service presentation across global markets.",
        ],
        images: [],
      },
    ],
    visitWebsite: "https://tap.company",
  },
];
