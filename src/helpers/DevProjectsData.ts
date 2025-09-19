// Images for Projects 
import NinjaDashImg1 from '../assets/images/DevProjects/Screenshot 2025-09-18 234305.png'
import NinjaDashImg2 from '../assets/images/DevProjects/Screenshot 2025-09-18 234340.png'
import NinjaDashImg3 from '../assets/images/DevProjects/Screenshot 2025-09-18 234349.png'
import NinjaDashImg4 from '../assets/images/DevProjects/Screenshot 2025-09-18 234425.png'
import NinjaDashImg5 from '../assets/images/DevProjects/Screenshot 2025-09-19 001218.png';
import CatCheeseEscapeAIImg1 from '../assets/images/DevProjects/Screenshot 2025-09-19 002121.png';
import CatCheeseEscapeAIImg2 from '../assets/images/DevProjects/Screenshot 2025-09-19 002351.png';
import CatCheeseEscapeAIImg3 from '../assets/images/DevProjects/Screenshot 2025-09-19 002421.png';
import DraconezImg1 from '../assets/images/DevProjects/Screenshot 2025-09-19 002614.png';
import DraconezImg3 from '../assets/images/DevProjects/Screenshot 2025-09-19 193001.png';
import DraconezImg4 from '../assets/images/DevProjects/Screenshot 2025-09-19 193011.png';
// import DraconezImg3 from '../assets/images/DevProjects';
import DragonRageImg1 from '../assets/images/DevProjects/Screenshot 2025-09-19 003124.png';
import DragonRageImg2 from '../assets/images/DevProjects/Screenshot 2025-09-19 003147.png';
// Video for Projects
import NinjaDashVideo from '../assets/images/Videos/GameDev/2025-09-19 00-18-35.mp4';
import CatCheeseEscapeAIVideo from '../assets/images/Videos/GameDev/2025-09-19 00-21-43.mp4';
import DraconezVideo from '../assets/images/Videos/GameDev/2025-09-19 00-26-50.mp4';
import DragonRageVideo from '../assets/images/Videos/GameDev/2025-09-19 00-32-21.mp4';

export interface DevProjectContent {
    id: number;
    title: string;
    mainImg: string; // Main image for the project
    innerDescription: string; // Description for the inner section
    imageCards: string[]; // Array of image URLs for the image cards navigation
    video?: string; // Optional video URL for the project
    gitHubLink?: string; // Optional GitHub link for the project
}

export const projectData: DevProjectContent[] = [
    {
        id: 1,
        title: "Draconez Unity 2D Game",
        mainImg: DraconezImg1,
        innerDescription: "Mobile infinite runner game where players control a dragon to avoid obstacles and collect coins.",
        imageCards: [
            DraconezImg1,
            DraconezImg3,
            DraconezImg4,
        ],
        video: DraconezVideo,
        gitHubLink: "https://github.com/KassieSanisclaws/Unity2D-Mobile-Infinite-Runner-Game",
    },
    {
        id: 2,
        title: "Ninja Run Unity 3D Game",
        mainImg: NinjaDashImg1,
        innerDescription: "A 3D endless runner game where players control a ninja to dodge obstacles and collect items.",
        imageCards: [
            NinjaDashImg1,
            NinjaDashImg2,
            NinjaDashImg3,
            NinjaDashImg4,
            NinjaDashImg5,
        ],
        video: NinjaDashVideo,
        gitHubLink: "https://github.com/KassieSanisclaws/ShadowDash-3D-Unity-Game-Mobile",
    },
    {
        id: 3,
        title: "Cat Escape AI Unity Game",
        mainImg: CatCheeseEscapeAIImg1,
        innerDescription: "A Unity 3D game where players control a mouse to escape from AI-controlled cats, birds and obstacles and collect the cheese to succeed.",
        imageCards: [
            CatCheeseEscapeAIImg1,
            CatCheeseEscapeAIImg2,
            CatCheeseEscapeAIImg3,
        ],
        video: CatCheeseEscapeAIVideo,
        gitHubLink: "https://github.com/KassieSanisclaws/Unity-3D-Cat-Chase-Game",
    },
    {
        id: 4,
        title: "Dragon Rage Unity 3D Game",
        mainImg: DragonRageImg1,
        innerDescription: "Under development: A Unity 3D game where players must survive waves of enemies as a dragon/ monsters/ orges.",
        imageCards: [
            DragonRageImg1,
            DragonRageImg2,
        ],
        video: DragonRageVideo,
        gitHubLink: "",
    },
    // {
    //     id: 5,
    //     title: "Anime MVC-App",
    //     mainImg: "/assets/images/anime-main.png",
    //     innerDescription: "A web application built using the MVC pattern, showcasing anime-related content.",
    //     imageCards: [
    //         "/assets/images/anime1.png",
    //         "/assets/images/anime2.png",
    //         "/assets/images/anime3.png",
    //     ],
    // },
    // {
    //     id: 6,
    //     title: "React ECommerce",
    //     mainImg: "/assets/images/ecommerce-main.png",
    //     innerDescription: "An e-commerce application built with React and Redux.",
    //     imageCards: [
    //         "/assets/images/ecommerce1.png",
    //         "/assets/images/ecommerce2.png",
    //         "/assets/images/ecommerce3.png",
    //     ],
    // },
    // {
    //     id: 7,
    //     title: "V-Js Calculator-App",
    //     mainImg: "/assets/images/vjs-calculator-main.png",
    //     innerDescription: "A calculator application built with Vue.js.",
    //     imageCards: [
    //         "/assets/images/vjs-calculator1.png",
    //         "/assets/images/vjs-calculator2.png",
    //         "/assets/images/vjs-calculator3.png",
    //     ],
    // },
];
