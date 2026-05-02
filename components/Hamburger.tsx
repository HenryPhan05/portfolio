
import { navLinks } from "@/app/constants";
import { AnimatePresence, motion , useScroll,useMotionValueEvent,} from "motion/react";
import {
} from "motion/react";
import { Spin as HamburgerMenu } from 'hamburger-react'
import Link from "next/link";
type HamburgerProps = {
  isHidden: boolean;
  isOpen: boolean;
  setOpen:React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger=({isHidden, isOpen, setOpen} :HamburgerProps)=>{ 
  const {scrollY} = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    
    if (latest > prev && latest > 100 ) {
      setTimeout(() =>{
         setOpen(false); 
      }, 300)
     // scroll down
    }
  });
  return(
    <motion.div
     className="flex lg:hidden text-2xl md:text-3xl"> 
      <HamburgerMenu toggled={isOpen} toggle={setOpen}/>
      <AnimatePresence>
      {isOpen &&(
        <>
    {/**menu */}
        <motion.div
        initial={{opacity:0, y:-20}}
         animate={{opacity:isHidden?0:1, y:0,
          transition:{
            duration:1,
          }
         }}
          exit={{opacity:0, y:-20}}
        transition={{duration:0.2}}
        className="fixed left-0 shadow-4xl right-0 
        top-20
        max-h-[40vh]
        md:max-h-[45vh]
        px-5 py-0 pt-0 bg-neutral-950 border-b border-b-white/20">
          <ul className="grid gap-8">
            {navLinks.map((item,index)=>{
              return(
                <motion.li key={item.id}
                initial={{opacity:0, y:index*20}}
                animate={{opacity:isHidden ? 0:1, y:isHidden ||isOpen?index*-20:0,
                  transition:{
                    duration:0.5,
                    delay: index*0.1,
                    ease: "easeOut"
                  }
                }}
                exit={{opacity:0, y:20}}
                transition={{duration:0.5, delay:index*0.1, ease:"backOut"}}
                whileHover={{
                  scale: 1.02,
                
                  transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 18,
                  },
                }}
                whileTap={{
                  scale:0.95,
                  transition:{
                    duration:0.2,
                    ease:'easeIn',
                  }
                }}
                className="w-full p-[0.08rem] rounded-xl 
                bg-linear-to-tr from-neutral-80 
                hover:bg-linear-to-tr hover:from-purple-900 via-neutral-950 to-neutral-700 hover:text-purple-700">
                  <Link
                  href={item.href}
                  className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950">
                      <span className="flex gap-1 text-lg">{item.name}</span>
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
        </>
      )}
      </AnimatePresence>
    </motion.div>
  )
}
export default Hamburger;