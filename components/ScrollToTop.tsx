import { LenisContext } from "@/context/LenisContext";
import { useContext, useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";
import {motion} from "motion/react";
const ScrollToTop = () =>{
  const [show, setShow] = useState(false);
  const {lenis} = useContext(LenisContext)
  useEffect(() =>{
    const handleScroll =() =>{
      if(window.scrollY > 300){
        setShow(true);
      }
      else{
        setShow(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
  const scrollToTop = () =>{
    lenis.current?.scrollTo(0,{
      duration: 1.2,
    })
  }
  return(
    <>
    {show && (
      <motion.button
        onClick={(e) =>{
          e.preventDefault();
          scrollToTop() }}
          initial={{opacity:0, y:20}}
          animate={{
            opacity:1, 
            y:[-8, 8, -8],
          }}
          exit={{opacity:0 , y:20}}
          whileHover={{scale:1.2}}
          whileTap={{scale:0.9}}
          transition={{
            y:{
              duration:4,
              repeat:Infinity,
              ease: "easeInOut",
            },
            opacity:{
              duration: 0.4,
              ease: "easeOut"
            }
          }}
          className="group cursor-pointer fixed bottom-10 right-10 z-50 bg-purple-600/50 hover:bg-purple-600/10 text-white p-4 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] "
          >
          <FaArrowUp className="text-xl lg:text-2xl text-purple-200 group-hover:text-purple-600 group-active:text-purple-600  "/>
      </motion.button>
    )}
    </>
  )
}
export default ScrollToTop;