export interface ProjectSubsection {
  title: string;
  content: string[];
  images: string[];
}

export interface ProjectSection {
  title: string;
  content?: string[];
  subsections?: ProjectSubsection[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  introduction: string;
  cover: string;
  image: string;
  techStack: string[];
  sections: ProjectSection[];
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
    introduction:
      "The 3D Plane Seat Configurator is an enterprise-grade web application designed to allow airlines to fully customize aircraft seating layouts and options through an intuitive, interactive 3D interface. The platform combines advanced React.js and Three.js rendering to provide realistic, real-time visualization of configurable seat components, including materials, colors, and modular parts. Built to be fully data-driven, all options, dependencies, cascades, and pricing rules are sourced from a centralized CSV data structure, allowing for dynamic UI generation and scalable maintenance. Users experience a guided workflow, with camera animations highlighting the currently configurable section of the seat. All configurations can be saved in draft or submitted states, stored via AWS Lambda APIs, and are accessible for review both in the configurator summary and through an admin management interface. The platform also includes automated PDF generation for order summaries and real-time pricing adjustments, streamlining internal workflows and enhancing operational efficiency. This solution demonstrates a combination of complex 3D engineering, UI/UX design, and backend integration to deliver a seamless, high-quality user experience.",
    image: "/assets/06-3d-config-02.png",
    cover: "/assets/3d-config-cover.png",
    sections: [
      {
        title: "Client Requirements",
        content: [
          "A highly interactive 3D seat configurator enabling airlines to customize modular aircraft seat models through an intuitive and responsive digital experience.",
          "A realistic seat architecture built from dynamically assembled GLB components, allowing independent modification of parts, materials, finishes, and colors with immediate visual feedback.",
          "A guided configuration workflow enhanced by smooth animated camera transitions and real-time pricing updates reflecting user selections instantly.",
          "An advanced configuration engine managing dependencies, cascades, prerequisites, and validation rules through a fully data-driven structure.",
          "A dynamically generated user interface derived entirely from structured configuration data, eliminating hardcoded logic and improving long-term scalability.",
          "Persistent configuration management supporting draft and submitted states, centralized administrative control, and automated PDF summary generation.",
        ],
      },
      {
        title: "The Solution",
        subsections: [
          {
            title: "Architecture",
            content: [
              "A modular, data-driven 3D configurator was designed and implemented using React.js and Three.js, with a strong emphasis on scalability and long-term flexibility. The seat model is composed of multiple configurable GLB components that are dynamically loaded and stacked within a single Three.js scene to form the complete seat structure. Each configuration option dynamically swaps specific GLB parts, updates material properties such as color, texture, and finish, or adjusts component visibility in real time. To enhance usability and create a guided experience, smooth camera transitions focus on the relevant seat section whenever a user configures a specific part, resulting in an intuitive and immersive 3D interaction flow.",
            ],
            images: [
              // "/assets/07-3d-config-03.png",
              // "/assets/08-3d-config-04.png",
            ],
          },
          {
            title: "Data-Driven Configuration Engine",
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
            content: [
              "User selections are stored via API calls to AWS Lambda functions, persisting data in a cloud database.",
              "Two configuration states are supported: Draft (Not Submitted) and Submitted.",
              "If a user refreshes the page, their saved selections can be retrieved via an API call and restored automatically.",
              "Finalized configurations are stored and displayed in both the configurator summary page and the admin management panel.",
            ],
            images: ["/assets/07-3d-config-03.png"],
          },
          {
            title: "Admin & Pricing System",
            content: [
              "The administrative interface is developed to view and manage user configurations, adjust configuration pricing, and monitor submitted orders.",
              "Pricing is dynamically linked to configuration options. As users make selections, the total price updates in real-time.",
              "Price retrieval and updates are handled via secure AWS Lambda API calls, ensuring centralized pricing control.",
            ],
            images: [],
          },
          {
            title: "Automated PDF Generation",
            content: [
              "Upon submission, configuration data is injected into a predefined PDF template to generate a structured order summary for clients.",
              "This automated document generation ensures consistency, accuracy, and operational efficiency.",
            ],
            images: [],
          },
        ],
      },
      {
        title: "Impact",
        content: [
          "Delivered a scalable and modular 3D configuration system adaptable to new seat models, reducing reliance on hardcoded UI logic through a fully data-driven architecture. The platform enhanced user experience with guided camera animations and real-time pricing feedback, while streamlining operational workflows through automated PDF generation and centralized pricing management.",
        ],
      },
    ],
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
    introduction:
      "The 2D 360° Vehicle Configurator is a high-performance web application designed to provide an interactive vehicle customization experience using frame-based rendering. Instead of relying on real-time 3D models, the system uses a sequence of pre-rendered image frames to simulate a smooth 360-degree rotation of the vehicle. Each frame is composed of layered image stacks representing configurable components, allowing individual parts (such as paint, trims, or materials) to be updated instantly without reloading entire frames. Built on a fully modular and data-driven architecture, the platform dynamically generates both configuration logic and UI components from a centralized data source. The solution enables fast visual updates, persistent configuration storage, downloadable screenshots, and automated PDF summaries, delivering a seamless and scalable customization workflow.",
    image: "/assets/09-2d-config-01.png",
    cover: "/assets/2d-config-cover.png",

    sections: [
      {
        title: "Client Requirements",
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
      },
      {
        title: "The Solution",
        subsections: [
          {
            title: "Frame-Based 360° Rendering Architecture",
            content: [
              "A frame-based rendering engine was designed and implemented in React.js to simulate a 360-degree vehicle rotation using a sequence of pre-rendered images. Users can drag left or right to navigate through the frames, creating a smooth rotational experience without requiring real-time 3D processing. Each rotational frame is composed of stacked image layers representing different configurable parts of the vehicle. This layered stacking approach allows individual components, such as paint or materials, to be swapped independently without reloading the entire frame. The architecture significantly improves performance and reduces bandwidth consumption compared to full image replacement strategies.",
            ],
            images: ["/assets/10-2d-config-02.png"],
          },
          {
            title: "Modular Configuration Engine",
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
            content: [
              "User configurations can be saved and retrieved through REST API integration.",
              "Returning users can restore previously saved builds seamlessly.",
              "The application maintains consistent configuration states across sessions.",
            ],
            images: [],
          },
          {
            title: "Screenshot & PDF Generation",
            content: [
              "Users can download high-quality screenshots of their configured vehicle directly from the application.",
              "At the end of the configuration process, a structured PDF summary is generated containing selected options and pricing details.",
              "Automated document generation ensures consistency and supports internal sales workflows.",
            ],
            images: [],
          },
        ],
      },
      {
        title: "Impact",
        content: [
          "A performant 360° vehicle configurator was delivered without requiring heavy 3D rendering, using an optimized image loading strategy through a layered stacking architecture. The system enables scalable, model-agnostic configuration through data-driven UI generation, while improving user engagement with smooth drag-based interaction and instant visual feedback. Sales processes are streamlined with downloadable screenshots and automated PDF summaries.",
        ],
      },
    ],
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
    introduction:
      "This project involved designing, developing, and maintaining the customer-facing website of an online gateway company, built to introduce enterprise clients to the company’s services across multiple regions. The platform required a scalable, multilingual architecture with region-specific service customization. All website content was dynamically driven from a centralized database, enabling tailored experiences per country. Components were built and maintained to adapt an atomic UI design system, ensuring consistency across the platform. In addition to the public website, an internal content management system (CMS) was developed to empowered regional teams to manage localized content across nine regions and multiple languages. The solution ensured consistency, scalability, and efficient content governance while supporting the company’s international growth strategy.",
    image: "/assets/11-tap-website-01.png",
    cover: "/assets/tap-payments-cover.webp",

    sections: [
      {
        title: "Client Requirements",
        content: [
          "Develop and maintain a customer-facing corporate website to present the company’s services to enterprise clients.",
          "Support multiple countries with region-specific service availability.",
          "Enable multilingual support with localized content per region.",
          "Ensure all content is dynamically managed rather than hardcoded.",
          "Provide internal teams with a content management platform to control regional content.",
          "Allow content customization for 9 different regions, each supporting multiple languages.",
          "Maintain scalability to support future regional expansion and service updates.",
        ],
      },
      {
        title: "The Solution",
        subsections: [
          {
            title: "Customer-Facing Website Architecture",
            content: [
              "The public-facing website was designed and developed using React.js and TypeScript with a modular component architecture adapted to an atomic UI design system. All website content, including service descriptions, regional offerings, and localized messaging, is dynamically rendered from a centralized database via REST APIs. The platform supports country-based service customization, ensuring users only see services available in their respective region. A multilingual framework was implemented to handle language switching and seamless retrieval of localized content. The overall architecture ensures maintainability and consistent performance across all regions.",
            ],
            images: ["/assets/12-tap-website-02.png"],
          },
          {
            title: "Multilingual & Regional Content System",
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
            content: [
              "Responsibility of ongoing maintenance, feature enhancements, and regional updates.",
              "The system was designed with scalability in mind to accommodate new services and additional regions.",
              "The architecture minimizes hardcoded logic, ensuring long-term maintainability and adaptability.",
            ],
            images: [],
          },
        ],
      },
      {
        title: "Impact",
        content: [
          "A scalable multilingual corporate platform was delivered, supporting nine regions and multiple languages, with centralized content governance enabled through a custom-built CMS. Operational efficiency was improved by removing hardcoded regional logic, and the flexible, modular architecture aligned with the atomic UI design system supported international expansion. The platform ensures consistent brand messaging and service presentation across global markets.",
        ],
      },
    ],
  },
];
