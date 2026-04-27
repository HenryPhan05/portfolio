import { Navigation } from "./type"
import { SocialIcons } from "./type";
  import { FaGithub } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
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