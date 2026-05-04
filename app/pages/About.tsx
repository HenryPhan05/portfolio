import ProfileCard from "@/components/ProfileCard";
import ProfessionalCard from "@/components/ProfessionalCard";
import { Descriptions, ProfessionalCardLinks } from "../constants";
  import {
  motion,
} from "motion/react";
const About =() =>{
  return(
    <>
     <div
     id="about"
      className="min-h-screen flex flex-col  gap-7 
      px-2 py-3
      xl:px-30 xl:py-10
      lg:px-24 lg:py-8
      md:px-12 md:py-6
      sm:px-12 sm:py-4
      ">
  <motion.h1
  initial ={{opacity:0, x:-20}}
  whileInView={{opacity:1, x:0}}
  transition={{
    duration:0.5,
    ease:"easeOut",
  }}
  viewport={{once:true}}
  className="text-2xl lg:text-4xl font-bold text-purple-300
  [text-shadow:
    0_0_20px_rgba(168,85,247,0.8),
    0_0_10px_rgba(168,85,247,0.7),
    0_0_20px_rgba(34,211,238,0.6),
    0_0_40px_rgba(34,211,238,0.5)
  ]"
>
  About Me______ 
</motion.h1>

     <div
     className="flex flex-col gap-8 items-center
     lg:grid lg:grid-cols-3 lg:gap-3 ">
      <div
      className="flex flex-col gap-5 w-80 " 
      >
        <motion.div
          initial={{opacity:0, scale:0}}
          whileInView={{opacity:1, scale:1}}
          transition={{
            duration:0.5,
            ease:"backOut"
          }}
          viewport={{once:true}}
        >
          <ProfileCard/>
        </motion.div>
        <div
        className="flex flex-col p-3 justify-between gap-5"
        >
          <motion.button
          initial={{opacity:0, x:-20,}}
          whileInView={{x:0, opacity:1}}
          transition={{
            duration:0.5,
            ease: "easeOut",
          }}
          viewport={{once:true}}
          whileHover={{
            scale:1.05,
            transition:{
              duration:0.15,
              ease:"easeOut",
            }
          }}
          whileTap={{
            scale:0.97,
            transition: {
              duration:0.2,
              ease:"backOut",
            }
          }}
          className="
          cursor-pointer
          text-xl
          font-semibold
          text-purple-600
          px-5 py-3
        border border-purple-600/40
        shadow-[0_0_20px_rgba(168,85,247,0.25)]
        hover:border-purple-400
        hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
          "
          >Contact Me</motion.button>
          <motion.button
            initial={{opacity:0, x:-20,}}
          whileInView={{x:0, opacity:1}}
          transition={{
            duration:0.5,
            ease: "easeOut",
            delay:0.1,
          }}
          viewport={{once:true}}
          whileHover={{
            scale:1.05,
            transition:{
              duration:0.15,
              ease:"easeOut",
            }
          }}
          whileTap={{
            scale:0.97,
            transition: {
              duration:0.2,
              ease:"backOut",
            }
          }}
          className="cursor-pointer
           text-xl
          font-semibold
          text-purple-600
          px-5 py-3
        border border-purple-600/40
        shadow-[0_0_20px_rgba(168,85,247,0.25)]

        hover:border-purple-400
        hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
        "
          >Download CV</motion.button>
        </div>
      </div>
      <div className="flex flex-col line-clamp-6 max-w-xs text-center gap-5 text-sm font-medium">
          {Descriptions.map((description) => (
            <motion.p key={description.id}
            initial={{opacity:0, x:20}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{
              duration:0.3,
              delay: description.id *0.12,
              ease:"easeOut",
            }}
            >
                {description.description}
            </motion.p>
          ))}
      </div>
      <div className="flex flex-col gap-3">
        {ProfessionalCardLinks.map((card) =>(
          <motion.div
          initial={{opacity:0,  y:20,}}
          whileInView={{opacity:1, y:0, }}
          viewport={{once:true}}
          transition={{
            duration:0.35,
            delay: card.id * 0.1,
            ease:"easeOut"
          }}

          key={card.id}>
            <ProfessionalCard key={card.id}  {...card} /> 
            </motion.div>  
      ))}
      </div>
      </div>
    </div>
    </>
  )
}
export default About;