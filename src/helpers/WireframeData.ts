
export interface WireframeProjectContent {
    id: number;
    title: string;
    mainImg: string; // Main image for the project
    innerDescription: string; // Description for the inner section
    wireFrameImageCards: string[]; // Array of image URLs for the wireframe cards navigation
    }

export const wireframeData: WireframeProjectContent[] = [
  {
    id: 1,
    title: "React Store-App",
    mainImg: "/assets/images/store-main.png",
    innerDescription: "This store app showcases component reuse, cart functionality, and MUI theming strategy.",
    wireFrameImageCards: [
      "/assets/images/store-wire1.png",
      "/assets/images/store-wire2.png",
      "/assets/images/store-wire3.png",
    ],
  },
  {
    id: 2,
    title: "React Quiz-App",
    mainImg: "/assets/images/quiz-main.png",
    innerDescription: "The quiz app uses dynamic state management and animated progress.",
    wireFrameImageCards: [
      "/assets/images/quiz-wire1.png",
      "/assets/images/quiz-wire2.png",
    ],
  },
  {
    id: 3,
    title: "MAUI Note-App",
    mainImg: "/assets/images/maui-main.png",
    innerDescription: "A cross-platform app designed with native device access in mind.",
    wireFrameImageCards: [
      "/assets/images/maui-wire1.png",
      "/assets/images/maui-wire2.png",
      "/assets/images/maui-wire3.png",
      "/assets/images/maui-wire4.png",
    ],
  },
];