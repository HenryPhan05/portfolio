import { Navigation } from "./type"
import { SocialIcons } from "./type";
import { ProfessionalCardProps } from "./type";
import { DescriptionProps } from "./type";
import { ProjectProps } from "./type";
  import { FaGithub } from "react-icons/fa";
  import { FiGithub } from "react-icons/fi";
  import { FaLinkedin } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import { HiComputerDesktop } from "react-icons/hi2";
  import { FaMobileAlt } from "react-icons/fa";
  import { GoDatabase } from "react-icons/go";
  import { RiExternalLinkFill } from "react-icons/ri";
  import { FaRegPlayCircle } from "react-icons/fa";
  import { FaFigma } from "react-icons/fa";
  import EvolvraImage from "@/public/projectImages/Evolvra.png"
  import FitmonkeyImage from "@/public/projectImages/fitMonkey.png"
  import KnowlyImage from "@/public/projectImages/Knowly.png"
  import PortfolioImage from "@/public/projectImages/portfolio.png"
export const navLinks : Navigation[] =[
  {
    id:1,
    name: 'About',
    href:'#about',
  },
  {
    id:2,
    name: 'Projects',
    href: '#projects',
  },
  {
    id:3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id:4,
    name: "Contact",
    href: "#contact",
  }
]
export const socialLinks: SocialIcons[] =[
  {
    id:1, 
    nameIcon: "Github",
    icon: FaGithub,
    href:"https://github.com/HenryPhan05"
  },
  {
    id: 2,
    nameIcon: "LinkedLn",
    icon: FaLinkedin,
    href:"https://www.linkedin.com/in/vinh-phan-cao-thanh-9a865733b/"
  },
  {
    id: 3,
    nameIcon: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/1z1nh23/"
  }
]
export const ProfessionalCardLinks : ProfessionalCardProps[]=[
  {
    id:1,
    name: "Web Development",
    description:"Build responsive and high-performance web applications using modern frameworks like React and Next.js, with Node.js for backend services and Tailwind CSS for styling",
    icon: HiComputerDesktop,
  },
  {
    id:2,
    name: "Mobile Application Development",
    description: "Build cross-platform mobile apps with React Native, providing smooth and consistent experiences on iOS and Android",
    icon: FaMobileAlt
  },
  {
    id:3,
    name:"Database Management",
    description: "Design and manage relational and NoSQL databases, including ERD design and CRUD development, to ensure data integrity, security, and performance. Work with MySQL as well as NoSQL solutions like Firebase and Supabase",
    icon: GoDatabase
  }
]
export const Descriptions: DescriptionProps[] =[
  {
    id:1,
    description: "I’m a junior software developer with a strong passion for building modern web and mobile applications. I enjoy turning ideas into real, interactive products and focus on creating smooth, user-friendly digital experiences."
  },
  {
    id:2,
    description:"My work involves both frontend and backend development, along with exploring cross-platform mobile solutions, testing, and basic security practices. I like working across the full development process from designing interfaces to implementing functionality and optimizing performance."
  },
  {
    id:3,
    description:"I’m a fast learner who enjoys solving problems, adapting to new technologies, and collaborating with others. With a continuous drive to improve, I aim to build reliable and impactful software that delivers real value to users."
  }
]
export const ProjectLinks: ProjectProps[] =[
  {
    id:1,
    name:"Fit Monkey",
    description:"A modern fitness and workout tracking web application",
    tools:[
      "TypeScript",
      "React",
      "Tailwind",
      "Next.js",
      "Supabase",
      "Firebase",
      "Open Food Facts API",
      "ExerciseDB API"
    ],
    icons:[
      {
        nameIcon:"Github",
        icon:FiGithub,
        link:"https://github.com/HenryPhan05/fitMonkey",
      },
      {
        nameIcon:"Demo",
        icon: RiExternalLinkFill,
        link : "https://fit-monkey.vercel.app/",
      },
      {
        nameIcon:"Figma",
        icon:FaFigma,
        link: "https://www.figma.com/proto/JHMCE4nlc4CJBCHBUgzpsH/fitMonkey-Figma?node-id=3002-175&t=mrsoovifJG8GfVLR-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3002%3A175"
      },
    ], 
    image: FitmonkeyImage
  },
  {
    id:2,
    name:"Knowly",
    description: "A cross platform to help users manage their study tasks, track progress and build effective learning habits",
    tools:[
      "TypeScript",
      "React Native",
      "Expo",
      "Supabase",
      "Zod",
    ],
    icons:[
      {
        nameIcon:"Github",
        icon:FiGithub,
        link: "https://github.com/HenryPhan05/Knowly"
      },
      {
        nameIcon: "Demo",
        icon: FaRegPlayCircle,
        link : "https://www.youtube.com/watch?v=A8zKp43XvWs"
      },
      {
        nameIcon: "Figma",
        icon:FaFigma,
        link : "https://www.figma.com/design/ejeGypk1WQ7TNrr4zDnkNS/Knowly?node-id=0-1&t=p8gjsNVUrIpcX5bL-0"
      }
    ],
    image: KnowlyImage
  },
  {
    id:3,
    name: "Evolvra",
    description: "UI platform that allow users to track personal goals and tasks",
    tools:[
      "Figma",
      "TeamWork",
      "Design",
      "Creative Thinking"
    ],
    icons:{
      nameIcon: "Another",
      icon: FaFigma,
      link:"https://www.figma.com/proto/Ev7x9SfZmiQRBwbLOmVVNP/P2-Starwberry-wireframe?node-id=540-1349&p=f&t=T6s9Z2lwRyVLuPyQ-1&scaling=scale-down&content-scaling=fixed&page-id=351%3A388&starting-point-node-id=849%3A2005"
    },
    image: EvolvraImage
  },
  {
    id:4,
    name:"Portfolio",
    description: "My Interactive Porfolio Design that showed my projects, skills",
    tools:[
      "TypeScript",
      "Tailwind",
      "React",
      "Reponsive Design",
      "Motion",
    ],
    icons:[
      {
        nameIcon: "Github",
        icon: FiGithub,
        link:"https://github.com/HenryPhan05/portfolio"
      },
      {
        nameIcon: "Demo",
        icon: RiExternalLinkFill,
        link: "https://portfolio-flax-two-3ter20efwn.vercel.app/"
      }
    ],
    image: PortfolioImage
  }
]