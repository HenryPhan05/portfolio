"use client";

import { motion, AnimatePresence, wrap } from "motion/react";
import { useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import { ProjectLinks } from "../constants";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.85,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 10,
  },

  exit: (direction: number) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.85,
    zIndex: 0,
    position: "absolute" as const,
  }),
};

const Projects = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const projectIndex = wrap(0, ProjectLinks.length, page);

  const prevProject = wrap(
    0,
    ProjectLinks.length,
    projectIndex - 1
  );

  const nextProject = wrap(
    0,
    ProjectLinks.length,
    projectIndex + 1
  );

  const paginate = (newDirection: 1 | -1) => {
    setPage(([prev]) => [prev + newDirection, newDirection]);
  };

  return (
    <div
      className="
      min-h-screen flex flex-col  gap-7 
      px-2 py-3
      xl:px-30 xl:py-10
      lg:px-24 lg:p-0
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
        Projects______
      </motion.h1>

      <motion.div
      initial={{opacity:0, y:60}}
      whileInView={{opacity:1, y:0}}
      transition={{
        duration:0.5, 
        ease:"easeOut",
      }}
      viewport={{once: true}}
        className="
        relative
        flex
        items-center
        justify-center
        w-full
      "
      >
        
        <motion.button
          whileHover={{
            x: [-2, 2, -2],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => paginate(-1)}
          className="
            absolute
            left-0
            z-30
            text-3xl
            lg:text-4xl
            cursor-pointer hover:text-purple-600 active:text-purple-600
          "
        >
          <FaRegArrowAltCircleLeft />
        </motion.button>

        {/* SLIDER */}
        <div
          className="
          relative
          w-full
          max-w-6xl
          h-150
          flex
          items-center
          justify-center
          overflow-hidden
        "
        >
          {/* PREV CARD */}
          <motion.div
            animate={{
              x: -350,
              scale: 0.82,
              opacity: 0.45,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
            }}
            className="
              hidden
              lg:block
              lg:absolute
              left-1/2
              -translate-x-1/2
              pointer-events-none
              blur-[1px]
            "
          >
            <ProjectCard {...ProjectLinks[prevProject]} />
          </motion.div>

          {/* CURRENT CARD */}
          <AnimatePresence
            initial={false}
            custom={direction}
          >
            <motion.div
              key={projectIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="absolute 
              left-1/2 -translate-x-1/2
              lg:left-1/3 lg:-translate-x-1
               z-20 lg:scale-100 md:scale-80 scale-70"
            >
              <ProjectCard {...ProjectLinks[projectIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* NEXT CARD */}
          <motion.div
            animate={{
              x: 350,
              scale: 0.82,
              opacity: 0.45,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
            }}
            className="
              hidden
              lg:block
              absolute
              left-1/2
              -translate-x-1/2
              pointer-events-none
              blur-[1px]
            "
          >
            <ProjectCard {...ProjectLinks[nextProject]} />
          </motion.div>
        </div>

        {/* RIGHT BUTTON */}
        <motion.button
          whileHover={{
            x: [2, -2, 2],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => paginate(1)}
          className="
            absolute
            right-0
            z-30
            text-3xl lg:text-4xl
            text-white 
            
            cursor-pointer hover:text-purple-600 active:text-purple-600
          "
        >
          <FaRegArrowAltCircleRight />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Projects;