 import {
  motion,
} from "motion/react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectLinks } from "../constants";
const Projects = () => {
  return(
     <div
      className="lg:min-h-screen flex flex-col gap-7 
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
  Projects______ 
</motion.h1>
  <div 
  className="flex flex-row gap-10">
  { 
    ProjectLinks.map((project) =>(
      <ProjectCard key={project.id} {...project}/>
    ))
  }
  </div>
    </div>
  )
}
export default Projects;