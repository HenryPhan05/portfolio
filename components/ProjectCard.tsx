import Image from "next/image";
import { ProjectProps } from "@/app/constants/type";
import {motion} from "motion/react";
const ProjectCard =(
  {
    image,
    name,
    description,
    tools,
    icons
  } : ProjectProps
)=>{
  const iconsDisplay = () =>{
    const iconList = Array.isArray(icons) ? icons : [icons];
    return(
      <>
       {iconList.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            title={item.nameIcon}
          >
            <Icon className="cursor-pointer transition-all duration-300 hover:text-purple-500 hover:-translate-y-2 
          text-2xl
          lg:text-3xl 
          "/>
          </a>
        );
      })}
      </>
    ) 
  }
  return(
    
    <motion.div
    className="
        w-100 flex flex-col gap-3 items-center text-center p-5
        bg-black/80 rounded-2xl
        backdrop-blur-xl

        border border-purple-600/40
        shadow-[0_0_20px_rgba(168,85,247,0.25)]

        hover:border-purple-400
        hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
        transition-all duration-250 ease-out"
    >
       <Image
       src={image}
       alt={name}
       className="w-80 h-35 rounded"
       />
       <h1
       className="w-full h-10 text-2xl font-bold text-purple-600 text-shadow-purple-[0_0_30px_rgba(120,85,247,0.5)]">
        {name}
      </h1>
       <p
       className="w-full flex-1 text-xl font-extralight"
       >{description}
       </p>
       <div>
        <div 
        className="flex flex-row flex-wrap gap-5 justify-center"
        >
        {Array.isArray(tools) && tools.length > 1 ? tools.map((tool, index) =>(
          <p
          className="
          text-sm font-light text-purple-400
          bg-black/80 backdrop-blur-xl px-5 py-3 rounded-full
          border border-purple-600/40
          shadow-[0_0_20px_rgba(168,85,247,0.25)]
          
           hover:border-purple-400
        hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
          " 
          key={index}>{tool}</p>
        )) : 
          <p
             className="
             justify-center items-center
          text-sm font-light text-purple-400
          bg-black/80 backdrop-blur-xl px-5 py-3 rounded-full
          border border-purple-600/40
          shadow-[0_0_20px_rgba(168,85,247,0.25)]
          
           hover:border-purple-400
        hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
          " 
          >{tools}</p>
      }
      </div>
      <div className="flex flex-row justify-center mt-10 gap-10">
        {iconsDisplay()}
    </div>
        
       </div>
    </motion.div>
  )
}
export default ProjectCard;