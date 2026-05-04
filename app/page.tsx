"use client"
import { useState, useEffect, useContext } from "react";
import NavBar from "@/components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import { AnimatePresence, motion } from "motion/react";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ScrollToTop from "@/components/ScrollToTop";
import { LenisContext } from "@/context/LenisContext";

export default function Home() {
  const {lenis} = useContext(LenisContext);
  const[menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
  const id = setTimeout(() => {
    lenis.current?.scrollTo(0, { immediate: true });
  }, 0);

  return () => clearTimeout(id);
}, []);
  return (
    <div
      className="min-h-screen text-white
                 bg-black
                 relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      </div>

      <NavBar isOpen={menuOpen} setOpen ={setMenuOpen}/>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
          />
        )}
      </AnimatePresence>
      <main className="relative
      pt-0 px-3 
      lg:pt-28 lg:px-10
      md:pt-20 md:px-8
      sm:pt-12 sm:px-5 
       ">
           <Hero />
          <About />
          <Projects />
          <Skills/>
          <Contact />

        <ScrollToTop/>
      </main>
      
    </div>
  );
}