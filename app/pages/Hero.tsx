  "use client"

  import { SocialIcons } from "../constants/type";
  import { socialLinks } from "../constants";
  import { FaArrowRight } from "react-icons/fa";
  import { TypeAnimation } from "react-type-animation";
  import {
  motion,
} from "motion/react";



  const Hero = () =>{
    
    return(
      <div
     
      className="min-h-screen flex flex-1 flex-col gap-7 px-30 py-20">
          <motion.h3
           initial={{opacity: 0, y:-50}}
      animate={{opacity: 1, y:0}}
      transition={{duration:0.3,ease: "backOut"}} 
            className="text-xl font-medium  
                      text-purple-600
                      "
          >
            Hi There, my name is
          </motion.h3>
  
          <motion.h1
          initial={{opacity:0, y: -50}}
          animate={{opacity: 1, y:0}}
          transition={{delay:0.2,duration:0.3, ease:"backOut"}}         
          className="text-4xl font-extrabold text-shadow-white">Phan Cao Thanh Vinh (Henry)
          </motion.h1>
          <motion.div
          initial={{opacity:0, y:-50}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.4, duration:0.3, ease: "backOut"}} 
          >
        <TypeAnimation
        sequence={[
          'Software Development Student',
          500,
          'Learning Something new',
          500,
        ]}
        speed={30}
        repeat={Infinity}
        className=" text-2xl font-medium text-purple-600"/>
        </motion.div>

        <motion.p
        initial={{opacity: 0, y:-50}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.6, duration:0.3, ease:"backOut"}}
         className="text-white font-medium text-xl max-w-5xl leading-relaxed space-y-2">
    I build applications and websites with modern frameworks, focusing on clean architecture and intuitive user experiences.
    I enjoy tackling complex problems and turning ideas into functional, impactful products.
  </motion.p>
  {/**social icons */}
    <div className=" flex flex-row gap-5">
      {socialLinks.map((item :SocialIcons ,index) =>{
        const Icon = item.icon;
        return(
          <motion.a
          initial={{opacity:0, y:-50}}
          animate={{opacity:1, y:0}}
          transition={{ duration: 1, delay: index*0.2, ease:"backOut"}}
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer">
          <Icon className="cursor-pointer transition-all duration-300 hover:text-purple-500 hover:-translate-y-2" size={30}/>
          </motion.a>
        )
  })}
    </div>
    {/**button */}
    <div className="flex flex-row gap-7">
      <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        rotate: 3,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 18,
        },
      }}
      whileTap={{
        scale: 0.97,
        transition: {
        duration: 0.08
        }
      }}
      transition={{
        delay: 0.2,
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        text-xl font-semibold
      bg-purple-800 px-5 py-3
      rounded-full cursor-pointer
      hover:opacity-90
      shadow-lg shadow-purple-900/30
      "
      >
      Contact Me
      </motion.button>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        whileHover={{
          scale: 1.05,
          transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
        }}
        whileTap={{
          scale: 0.97,
          transition: {
            duration: 0.08
          }
           }}
        className="
          group
          text-xl font-semibold
          border-2 border-purple-800 text-purple-800
          px-5 py-3 rounded-full
          cursor-pointer
          flex items-center gap-2
          overflow-hidden
        "
      >
        View My Projects
  <FaArrowRight
    className="
      opacity-0
      max-w-0
      -translate-x-2
      group-hover:opacity-100
      group-hover:max-w-5
      group-hover:translate-x-0
      transition-all duration-150
    "
  />
  </motion.button>
    </div>
      </div>
    )
  }
  export default Hero;