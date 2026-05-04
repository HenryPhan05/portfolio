  import { HTMLMotionProps, motion,} from "motion/react";
  import CssIcon from "@/components/icons/Css";
  import HtmlIcon from "@/components/icons/Html";
  import JavaScriptIcon from "@/components/icons/JavaScript";
  import ReactIcon from "@/components/icons/React";
  import TailwindIcon from "@/components/icons/Tailwind";
  import NextjsIcon from "@/components/icons/Nextjs";
  import NodejsIcon from "@/components/icons/Nodejs";
  import FigmaIcon from "@/components/icons/Figma";
  import FirebaseIcon from "@/components/icons/Firebase";
  import FramerMotionIcon from "@/components/icons/FramerMotion";
  import GitHubIcon from "@/components/icons/Github";
  import GitIcon from "@/components/icons/Git";
  import JavaIcon from "@/components/icons/Java";
  import MysqlIcon from "@/components/icons/MySql";
  import NpmIcon from "@/components/icons/Npm";
  import OracleIcon from "@/components/icons/Oracle";
  import PythonIcon from "@/components/icons/Python";
  import SupabaseIcon from "@/components/icons/Supabase";
  import TypeScriptIcon from "@/components/icons/TypeScript";
  import VercelIcon from "@/components/icons/Vercel";

  const Skills =() =>{
    const icons = [HtmlIcon,CssIcon, JavaScriptIcon, TypeScriptIcon, TailwindIcon, FigmaIcon,NextjsIcon, NodejsIcon, FirebaseIcon, SupabaseIcon, FramerMotionIcon, ReactIcon, GitHubIcon, GitIcon, JavaIcon, MysqlIcon, NpmIcon, OracleIcon, PythonIcon, VercelIcon];
    //animation Icons
    const slideX: HTMLMotionProps<"div"> ={
       animate:{
            x:[3,-3,3]
          },
          transition:{
            duration: 3, 
            repeat:Infinity,
            ease:"easeInOut",
          }
    }
    const slideY: HTMLMotionProps<"div"> ={
      animate:{
            y:[-3,3,-3]
          },
          transition:{
            duration:3,
            repeat:Infinity,
            ease:"easeInOut",
          }
    }
    const zoom: HTMLMotionProps<"div"> ={
       animate:{scale:[1.05, 0.9, 1.05],
                    opacity:[1, 0.9, 1]
                },
          transition:{
            duration:2.5,
            repeat:Infinity,
            ease:"easeInOut",
          }
    }
    const rotate: HTMLMotionProps<"div"> ={
          animate:{
              rotate:[-3,3,-3]
            },
            transition:{
              duration:3,
              repeat:Infinity,
              ease:"easeInOut"
            }
    }
    const animations = [slideX, slideY,zoom, rotate];

    return(
      <motion.div
        id="skills"
        className="
        lg:min-h-screen flex flex-col  gap-0 lg:gap-7 
        px-2 py-3 mt-20
        xl:px-30 xl:py-10
        lg:px-24 lg:p-0 lg:mt-0
        md:px-12 md:py-6
        sm:px-12 sm:py-4
      "
      >
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
          Skills______
        </motion.h1>
        <motion.div
         initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{
        duration:0.5,
        ease:"easeOut"
      }}
      viewport={{once:true}}

            className="mt-15
            px-4 py-8 
            md:px-8 md:py-10
            lg:px-10 lg:py-15
            rounded-2xl border border-purple-500/30  
            grid grid-cols-3 
            sm:grid-cols-4 
            md:grid-cols-5
            lg:grid-cols-6 
            bg-linear-to-br from-purple-600/10 to-purple-600/20
            gap-x-10 gap-y-15
            place-items-center
        "
        >
        {icons.map((Icon, index) => {
          const animationIcon = animations[index % animations.length];
        return (
          <motion.div 
          key={index} 
           {...animationIcon}>
            <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </motion.div>
        );
      })}
      </motion.div>
        </motion.div>
    )
  }

  export default Skills;