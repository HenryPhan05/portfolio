"use client"
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Hero = () =>{
 
  return(
    <div className=" flex flex-col gap-7 px-40 py-50">
        <h3
          className="text-3xl font-medium  
                    text-purple-600
                    "
        >
          Hi There, my name is
        </h3>
        <h1 className="text-5xl font-extrabold text-shadow-white">Phan Cao Thanh Vinh (Henry)</h1>
        <h2 className=" text-4xl font-medium text-purple-600">Software development student</h2> {/**learning something new! */}
      <p className="text-white font-medium text-2xl max-w-7xl leading-relaxed space-y-2">
  I build applications and websites with modern frameworks, focusing on clean architecture and intuitive user experiences.
  I enjoy tackling complex problems and turning ideas into functional, impactful products.
</p>
{/**social icons */}
  <div className=" flex flex-row gap-5">
    <a
    href="https://github.com/HenryPhan05"
    target="_blank"
    rel="noopener noreferrer"
    >
    <FaGithub className="cursor-pointer transition duration-300 hover:text-purple-500 hover:-translate-y-2" size={40}  />
    </a>
    <a 
    href="https://www.linkedin.com/in/vinh-phan-cao-thanh-9a865733b/"
    target="_blank"
    rel="noopener noreferrer"
    >
    <FaLinkedin className="cursor-pointer transition duration-300 hover:text-purple-500 hover:-translate-y-2" size={40}/>
    </a>
    <a 
    href="https://www.instagram.com/1z1nh23/"
    target="_blank"
    rel="noopener noreferrer">
    <FaInstagram className="cursor-pointer transition duration-300 hover:text-purple-500 hover:-translate-y-2" size={40}/>
    </a>
  </div>
  {/**button */}
  <div className="flex flex-row gap-7">
    <button className="text-2xl font-semibold bg-purple-800 px-5 py-3 rounded-full cursor-pointer hover:opacity-90 hover:scale-105 hover:rotate-3 transition duration-300">Contact Me</button>
   <button
  className="group text-2xl font-semibold border-2 border-purple-800 text-purple-800 px-5 py-3 rounded-full cursor-pointer flex items-center gap-3 transition-all duration-300"
>
  View My Projects

  <FaArrowRight
    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0  transition-all duration-300"
  />
</button>
  </div>
    </div>
  )
}
export default Hero;