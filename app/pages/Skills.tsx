  import { HTMLMotionProps, motion,} from "motion/react";
  import Image from "next/image";
  import type { IconType } from "react-icons";
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
  import { SiDocker, SiPostman, SiExpress, SiRaspberrypi, SiHuggingface } from "react-icons/si";
  import { VscAzure } from "react-icons/vsc";
  import { TbBrain } from "react-icons/tb";

  const additionalSkills: { name: string; icon?: IconType; color?: string; image?: string }[] = [
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Azure", icon: VscAzure, color: "#38BDF8" },
    { name: "Azure AI Foundry", icon: TbBrain, color: "#C084FC" },
    { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#E74675" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Express.js", icon: SiExpress, color: "#E5E7EB" },
    { name: "Piper", image: "/skillIcons/piper.svg" },
    { name: "Vosk", image: "/skillIcons/vosk.png" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
  ];

  const Skills =() =>{
    const icons = [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "Next.js", icon: NextjsIcon },
      { name: "Node.js", icon: NodejsIcon },
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Supabase", icon: SupabaseIcon },
      { name: "Motion", icon: FramerMotionIcon },
      { name: "React", icon: ReactIcon },
      { name: "GitHub", icon: GitHubIcon },
      { name: "Git", icon: GitIcon },
      { name: "Java", icon: JavaIcon },
      { name: "MySQL", icon: MysqlIcon },
      { name: "npm", icon: NpmIcon },
      { name: "Oracle", icon: OracleIcon },
      { name: "Python", icon: PythonIcon },
      { name: "Vercel", icon: VercelIcon },
    ];
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
            gap-x-4 gap-y-15 sm:gap-x-10
            place-items-center
        "
        >
        {icons.map(({ name, icon: Icon }, index) => {
          const animationIcon = animations[index % animations.length];
        return (
          <div key={name} className="flex w-full min-w-0 flex-col items-center gap-3 self-start text-center" title={name}>
            <motion.div {...animationIcon} aria-hidden="true">
              <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            </motion.div>
            <span className="text-xs leading-4 font-medium text-purple-100/80 sm:text-sm">{name}</span>
          </div>
        );
      })}
        {additionalSkills.map(({ name, icon: Icon, color, image }, index) => (
          <div key={name} className="flex w-full min-w-0 flex-col items-center gap-3 self-start text-center" title={name}>
            <motion.div {...animations[(icons.length + index) % animations.length]}>
              {image ? (
                <Image src={image} alt="" width={80} height={48} unoptimized
                  className={`h-8 w-16 object-contain md:h-10 md:w-20 lg:h-12 ${name === "Piper" ? "invert" : ""}`} />
              ) : Icon ? <Icon
                className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
                style={{ color }}
                aria-hidden="true"
              /> : null}
            </motion.div>
            <span className="text-xs leading-4 font-medium text-purple-100/80 sm:text-sm">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
        </motion.div>
    )
  }

  export default Skills;
