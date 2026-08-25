"use client";

import { AnimatePresence, motion, wrap } from "motion/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ProjectCard from "@/components/ProjectCard";
import { ProjectLinks } from "../constants";

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? "42%" : "-42%", opacity: 0, scale: 0.94 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? "-42%" : "42%", opacity: 0, scale: 0.94 }),
};

const spring = { type: "spring" as const, stiffness: 210, damping: 27, mass: 0.8 };

const Projects = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const projectIndex = wrap(0, ProjectLinks.length, page);
  const paginate = (newDirection: 1 | -1) => setPage(([current]) => [current + newDirection, newDirection]);

  return (
    <section id="projects" className="flex min-h-screen flex-col justify-center gap-8 overflow-hidden px-4 py-20 sm:px-12 lg:px-24 xl:px-30">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} viewport={{ once: true }} className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-purple-300 [text-shadow:0_0_20px_rgba(168,85,247,0.65),0_0_32px_rgba(34,211,238,0.35)] lg:text-4xl">Projects</h1>
        </div>
        <p className="hidden text-sm text-white/45 sm:block">Drag or use the arrows to explore</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }} className="relative mx-auto flex w-full max-w-7xl items-center justify-center">
        <button type="button" onClick={() => paginate(-1)} aria-label="Previous project" className="absolute left-0 z-30 grid size-11 place-items-center rounded-full border border-white/10 bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:border-purple-400/70 hover:bg-purple-500/20 hover:text-purple-200 active:scale-95 sm:left-2 lg:left-6">
          <FaChevronLeft aria-hidden="true" />
        </button>

        <div className="relative flex min-h-[590px] w-full items-center justify-center [perspective:1200px] sm:min-h-[620px]">
          <div className="pointer-events-none absolute right-[calc(50%+250px)] hidden origin-right scale-[0.76] opacity-50 lg:block">
            <ProjectCard {...ProjectLinks[wrap(0, ProjectLinks.length, projectIndex - 1)]} preview />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div key={page} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={spring} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12} onDragEnd={(_, info) => {
              if (info.offset.x < -70 || info.velocity.x < -500) paginate(1);
              if (info.offset.x > 70 || info.velocity.x > 500) paginate(-1);
            }} className="absolute z-20 cursor-grab touch-pan-y select-none active:cursor-grabbing [will-change:transform,opacity]">
              <ProjectCard {...ProjectLinks[projectIndex]} />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute left-[calc(50%+250px)] hidden origin-left scale-[0.76] opacity-50 lg:block">
            <ProjectCard {...ProjectLinks[wrap(0, ProjectLinks.length, projectIndex + 1)]} preview />
          </div>
        </div>

        <button type="button" onClick={() => paginate(1)} aria-label="Next project" className="absolute right-0 z-30 grid size-11 place-items-center rounded-full border border-white/10 bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:border-purple-400/70 hover:bg-purple-500/20 hover:text-purple-200 active:scale-95 sm:right-2 lg:right-6">
          <FaChevronRight aria-hidden="true" />
        </button>
      </motion.div>

      <div className="flex justify-center gap-2" aria-label="Project pagination">
        {ProjectLinks.map((project, index) => (
          <button key={project.id} type="button" onClick={() => setPage([page + (index - projectIndex), index > projectIndex ? 1 : -1])} aria-label={`View ${project.name}`} aria-current={index === projectIndex ? "true" : undefined} className={`h-1.5 rounded-full transition-all duration-300 ${index === projectIndex ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-400" : "w-1.5 bg-white/25 hover:bg-white/50"}`} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
