
export interface SKills {
    name: string;
    icon: string; // URL or path to the skill icon
    level: number; // 1 to 10 scale
    experience: string; // Years of experience
    description: string; // Brief description of the skill
}

export interface SkillCategory {
    title: string;
    skills: SKills[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-End Development",
    skills: [
      {
        name: "React.js",
        icon: "/assets/icons/react.svg",
        level: 9,
        experience: "3+ years",
        description: "Built scalable and responsive apps using React with Redux Toolkit, TypeScript, and styled-components.",
      },
      {
        name: "JavaScript",
        icon: "/assets/icons/javascript.svg",
        level: 9,
        experience: "4+ years",
        description: "Expert in JavaScript ES6+ features, DOM manipulation, and front-end logic.",
      },
      {
        name: "TypeScript",
        icon: "/assets/icons/typescript.svg",
        level: 8,
        experience: "3 years",
        description: "Used in both frontend and backend projects to ensure type safety.",
      },
      {
        name: "HTML5",
        icon: "/assets/icons/html5.svg",
        level: 9,
        experience: "5 years",
        description: "Semantic markup, accessibility, and modern HTML practices.",
      },
      {
        name: "CSS3 / SCSS",
        icon: "/assets/icons/css3.svg",
        level: 8,
        experience: "4 years",
        description: "Responsive styling with Flexbox, Grid, and SCSS modules.",
      },
      {
        name: "Bootstrap",
        icon: "/assets/icons/bootstrap.svg",
        level: 7,
        experience: "3 years",
        description: "Utilized in various admin dashboards and landing pages.",
      },
    ],
  },
  {
    title: "Back-End Development",
    skills: [
      {
        name: "Node.js",
        icon: "/assets/icons/nodejs.svg",
        level: 8,
        experience: "3 years",
        description: "Built RESTful APIs and services using Node.js and Express.",
      },
      {
        name: "Express.js",
        icon: "/assets/icons/express.svg",
        level: 8,
        experience: "3 years",
        description: "Handled middleware, routing, JWT auth, and error handling.",
      },
      {
        name: "C# / .NET Core",
        icon: "/assets/icons/dotnet.svg",
        level: 8,
        experience: "3 years",
        description: "Built backend APIs and business logic in enterprise .NET apps.",
      },
      {
        name: "SQL / MSSQL",
        icon: "/assets/icons/sql.svg",
        level: 8,
        experience: "4 years",
        description: "Database design, queries, indexing, stored procedures.",
      },
      {
        name: "MongoDB",
        icon: "/assets/icons/mongodb.svg",
        level: 8,
        experience: "3 years",
        description: "NoSQL document database used in MERN stack projects.",
      },
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    skills: [
      {
        name: "MAUI",
        icon: "/assets/icons/maui.svg",
        level: 7,
        experience: "1 year",
        description: "Built cross-platform apps in .NET MAUI for iOS and Android.",
      },
      {
        name: "Android (Kotlin/Java)",
        icon: "/assets/icons/android.svg",
        level: 7,
        experience: "1.5 years",
        description: "Developed native apps with persistent storage and UI logic.",
      },
      {
        name: "Swift / SwiftUI",
        icon: "/assets/icons/swift.svg",
        level: 6,
        experience: "1 year",
        description: "iOS development using SwiftUI and UIKit.",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      {
        name: "AWS",
        icon: "/assets/icons/aws.svg",
        level: 6,
        experience: "1 year",
        description: "Used S3, EC2, and deployment strategies for apps.",
      },
      {
        name: "CI/CD",
        icon: "/assets/icons/ci-cd.svg",
        level: 6,
        experience: "1 year",
        description: "Automated build & deployment pipelines in project workflows.",
      },
      {
        name: "Microsoft Azure",
        icon: "/assets/icons/azure.svg",
        level: 6,
        experience: "1 year",
        description: "Worked on Azure integration for enterprise apps.",
      },
    ],
  },
  {
    title: "Testing & Tooling",
    skills: [
      {
        name: "Cypress",
        icon: "/assets/icons/cypress.svg",
        level: 7,
        experience: "2 years",
        description: "End-to-end testing for UI and business workflows.",
      },
      {
        name: "Postman",
        icon: "/assets/icons/postman.svg",
        level: 8,
        experience: "3 years",
        description: "API testing and automation with environments and scripts.",
      },
      {
        name: "Git / GitHub",
        icon: "/assets/icons/github.svg",
        level: 9,
        experience: "5+ years",
        description: "Version control, branching, pull requests, and collaboration.",
      },
    ],
  },
  {
    title: "UX/UI & Design",
    skills: [
      {
        name: "Figma",
        icon: "/assets/icons/figma.svg",
        level: 7,
        experience: "2 years",
        description: "UI mockups, prototyping, and collaboration with design teams.",
      },
      {
        name: "Responsive Design",
        icon: "/assets/icons/responsive.svg",
        level: 9,
        experience: "4 years",
        description: "Mobile-first and cross-device layout design.",
      },
      {
        name: "Accessibility (A11y)",
        icon: "/assets/icons/accessibility.svg",
        level: 7,
        experience: "2 years",
        description: "Built accessible interfaces meeting WCAG standards.",
      },
    ],
  },
  {
    title: "Professional & Soft Skills",
    skills: [
      {
        name: "Mentorship & Teaching",
        icon: "/assets/icons/mentor.svg",
        level: 9,
        experience: "4+ years",
        description: "Instructor at Trios College and mentor to junior devs.",
      },
      {
        name: "Agile / Scrum",
        icon: "/assets/icons/agile.svg",
        level: 8,
        experience: "4 years",
        description: "Daily standups, sprints, retrospectives, Jira tracking.",
      },
      {
        name: "Problem Solving",
        icon: "/assets/icons/brain.svg",
        level: 9,
        experience: "Ongoing",
        description: "Diagnosing, debugging, and providing scalable solutions.",
      },
    ],
  },
];