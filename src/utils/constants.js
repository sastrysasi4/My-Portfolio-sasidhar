import {
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  TbBrandCpp,
  TbDatabaseSearch,
  TbHexagonLetterC 
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql,BiLogoGmail  } from "react-icons/bi";
import {
  SiGooglecloud ,
  SiMysql,
  SiTableau,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiPandas,
  SiScikitlearn,
  SiMicrosoftazure
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { RiOpenaiFill } from "react-icons/ri";
import { LuBird } from "react-icons/lu";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Data Science",
    icon: TbDatabaseSearch,
  },
  {
    interest: "Machine Learning",
    icon: LuBrainCircuit,
  },
  {
    interest: "Artificial Intelligence",
    icon: IoHardwareChipOutline,
  },
  {
    interest: "Gen AI",
    icon: FaRobot,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Cloud",
    icon: SiGooglecloud,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
  {
    interest: "Docker",
    icon: FaDocker ,
  },
];

export const skillsData = [
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "C",
    icon: TbHexagonLetterC ,
  },
  {
    name: "C++",
    icon: TbBrandCpp,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Pandas",
    icon: SiPandas,
  },
  {
    name: "Tableau",
    icon: SiTableau ,
  },
  {
    name: "Scikit",
    icon: SiScikitlearn  ,
  },
  {
    name: "Tensorflow",
    icon: SiTensorflow ,
  },
  {
    name: "Pytorch",
    icon: SiPytorch ,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "Flask",
    icon: SiFlask,
  },
  {
    name: "GCP",
    icon: DiGoogleCloudPlatform,
  },
  {
    name: "Azure",
    icon: SiMicrosoftazure,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "OpenAI",
    icon: RiOpenaiFill,
  },
  {
    name: "LangChain",
    icon: LuBird,
  },
];

export const workData = [
  {
    company: "Zelarsoft",
    designation: "AI/ML Engineer",
    duration: "August 2023 - Present",
    companyImg: "zelar_logo.jpg",
    description: (
      <>
          I am employed as a data scientist and AI/ML engineer. 
          My experience includes developing Data analysis, Machine Learning and AI models. Along with expertise in various text-generation models including OpenAI, llama, falcon, and palm. 
          Additionally, I have proficiency in utilizing a range of agents, tools, and LLM integration tools like Langchain. I also possess knowledge of Google and Azure cloud platforms, as well as a variety of computer vision tools.
      </>
    ),
  },

];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Magnet",
    image: "movie-magnet",
    link: "https://movie-magnet-smoky.vercel.app/",
    source: "https://github.com/vaheedsk36/movie-magnet",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    link: "https://vaheedsk36.github.io/weather-app/",
    source: "https://github.com/vaheedsk36/weather-app",
  },
  {
    type: "WEB-APP",
    title: "Landing Page",
    image: "landing-page",
    link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
    source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
  },
  {
    type: "WEB-APP",
    title: "Guess Game",
    image: "guess-game",
    link: "https://vaheedsk36.github.io/guess-my-number",
    source: "https://github.com/vaheedsk36/guess-my-number",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "https://vaheedsk36.github.io/react-notes-app/",
    source: "https://github.com/vaheedsk36/react-notes-app",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "https://vaheedsk36.github.io/dice-multiplayer",
    source: "https://github.com/vaheedsk36/dice-multiplayer",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://vaheedsk36.github.io/Snake-game",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://vaheedsk36.github.io/text-utility-app/",
    source: "https://github.com/vaheedsk36/text-utility-app",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/sastrysasi4",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/sai-sasidhar-sastry-guggilla-556aa0184/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "mailto:Sastrysasi4@gmail.com",
    icon: BiLogoGmail,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  }
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
