import {motion} from "motion/react";
const Contact =() =>{
  return(
     <div
      className="min-h-screen pt-10 lg:pt-0 flex flex-1 flex-col  gap-7 
      px-2 py-3
      xl:px-30 xl:py-20 
      lg:px-24 lg:py-18
      md:px-12 md:py-14
      sm:px-12 sm:py-8
      ">
      <motion.h1
        initial ={{opacity:0, x:-20}}
        whileInView={{opacity:1, x:0}}
        transition={{
          duration:0.5,
          ease:"easeOut",
        }}
        viewport={{once:true}}
        className="
      text-2xl lg:text-4xl font-bold text-purple-300
    [text-shadow:
    0_0_20px_rgba(168,85,247,0.8),
    0_0_10px_rgba(168,85,247,0.7),
    0_0_20px_rgba(34,211,238,0.6),
    0_0_40px_rgba(34,211,238,0.5)
  
      "
      >
        Contact Me______
      </motion.h1>
      {/**form send message */}
      <form>
        <input type="text" />
      </form>
      </div>
  ) 
}
export default Contact;