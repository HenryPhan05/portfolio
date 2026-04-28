"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger";
import { navLinks } from "@/app/constants";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useState } from "react";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // detect scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;

    if (latest > prev && latest > 100) {
      setHidden(true); // scroll down
    } else {
      setHidden(false); // scroll up
    }
  });

  return (
    <motion.nav
      animate={{
        y: hidden ? -100 : 0,
        opacity: 1,
        transition:{
          duration:0.7,
          ease:"easeOut",
        }
      }}
     
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/80 backdrop-blur-md
        border-b border-white/10
        text-white
      "
    >
      <div className="flex justify-between items-center 
      px-8 py-3 
      md:px-10 md:py-4
      lg:px-16 lg:py-6
      relative">
        {/* Logo */}
        <h1 className="text-xl lg:text-2xl font-bold tracking-wide">
          Henry
          
        </h1>
        {/**hamburger menu */}
        <motion.div
        initial={{opacity:0, y:-50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5, ease:"backOut"}}
        >
      
           <Hamburger /> 
        </motion.div>
        {/* Navigation desktop */}
        <div className=" gap-10 hidden lg:flex ">
          {navLinks.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{opacity:0, y:-50}}
              animate={{opacity:1, y:0}}
              transition={{duration: 0.2, delay:index*0.3, ease:"backOut"}}
              className="
                text-sm font-medium text-gray-300
                hover:text-purple-400
                hover:-translate-y-1
                hover:scale-105
                transition-all duration-300
                cursor-pointer
              "
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Glow line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/40 to-transparent" />
      </div>
    </motion.nav>
  );
};

export default NavBar;