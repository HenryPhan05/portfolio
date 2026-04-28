import { Navigation } from "./type"
import { SocialIcons } from "./type";
import { ProfessionalCardProps } from "./type";
  import { FaGithub } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import { HiComputerDesktop } from "react-icons/hi2";
  import { FaMobileAlt } from "react-icons/fa";
  import { GoDatabase } from "react-icons/go";
export const navLinks : Navigation[] =[
  {
    id:1,
    name: 'About',
    href:'#About',
  },
  {
    id:2,
    name: 'Projects',
    href: '#Projects',
  },
  {
    id:3,
    name: 'Skills',
    href: '#Skills',
  },
  {
    id:4,
    name: "Contact",
    href: "#Contact",
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