import {motion} from "motion/react";
import { useState } from "react";
import * as z from  "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Trykker } from "next/font/google";
import { error } from "console";
const contactSchema = z.object({
  name: z
  .string()
  .min(2, "Name must be at least 2 character")
  .max(100, "Name must be less than 100 character!"),
  email: z
  .string()
  .email(),
  message : z.string()
})
type ContactForm = z.infer<typeof contactSchema>;
const Contact =() =>{
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues:{
      name: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
    shouldFocusError: true,
  })
  const onSubmit = async(data: ContactForm) =>{
    try{
      const res = await fetch("/api/contact",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if(!res.ok){
        throw new Error("Failed to send");
      }
      alert("Message sent!");
    }
    catch(error){
      alert("failed to send message");
    }
  }
  return(
     <div
      className="min-h-screen pt-10 lg:pt-0 flex flex-1 flex-col  gap-7 
      px-2 py-3
      xl:px-30 xl:py-20 
      lg:px-24 lg:py-18
      md:px-12 md:py-14
      sm:px-12 sm:py-8
      
      ">
      <motion.h1
        initial ={{opacity:0, x:-20}}
        whileInView={{opacity:1, x:0}}
        transition={{
          duration:0.5,
          ease:"easeOut",
        }}
        viewport={{once:true}}
        className="
        left-0
      text-2xl lg:text-4xl font-bold text-purple-300
    [text-shadow:
    0_0_20px_rgba(168,85,247,0.8),
    0_0_10px_rgba(168,85,247,0.7),
    0_0_20px_rgba(34,211,238,0.6),
    0_0_40px_rgba(34,211,238,0.5)
  
      "
      >
        Contact Me______
      </motion.h1>
      {/**form send message */}
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl w-full mx-auto bg-black/10 opacity-80 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 shadow-[0_0_35px_rgba(168,85,247,0.18)]
      flex flex-col gap-10
      lg:mt-10
      "
      >
        <div className="
          flex flex-row items-center gap-3
        ">
        <label htmlFor="name"
        className=" w-30 text-xl font-semibold text-purple-300 [text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
        >Name:</label>
        <Controller
          control={control}
          name="name"
          render={({ field: {onChange,value, ref}})=>(
            <input
            ref={ref}
            placeholder="Enter your name"
            value={value}
            onChange={onChange}
            autoComplete="name"
            className={`w-full  bg-black/30 border
            ${errors.name ? "border-red-400" : "border-white/50"} 
               rounded-xl px-4 py-3 outline-none text-white placeholder:text-gray-400 
            focus:border-purple-400  focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]`}
            />
          )}
        />
        </div>
        {errors.name && (
      <p className="text-red-400 text-sm">
          {errors.name.message}
      </p>
      )}
          <div
          className="flex flex-row items-center gap-3"
          >
        <label htmlFor="name"
        className="lg: w-30 text-xl font-semibold text-purple-300 [text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
        >Email:</label>
        <Controller
          control={control}
          name="email"
          render={({ field: {onChange,value, ref}})=>(
            <input
            ref={ref}
            placeholder="Enter your email"
            value={value}
            onChange={onChange}
            autoComplete="email"
            className={`w-full  bg-black/30 border 
              ${errors.email ? "border-red-400" : "border-white/50"} 
              rounded-xl px-4 py-3 outline-none text-white placeholder:text-gray-400 focus:border-purple-400 focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]`}
            />
          )}
        />
        </div>
        {errors.email && (
          <p className="text-red-400 text-sm">
        {errors.email.message}
          </p>
        )}
          <div
           className="flex flex-row gap-3"
          >
        <label htmlFor="message"
        className="lg:w-30 text-xl font-semibold text-purple-300 [text-shadow:0_0_10px_rgba(168,85,247,0.8)]">Message:</label>
        <Controller
          control={control}
          name="message"
          render={({ field: {onChange,value}})=>(
            <textarea
            placeholder="Enter your message"
            value={value}
            onChange={onChange}
            autoComplete="message"
            className={`w-full
            lg:min-h-[500]px  bg-black/30 border border-white/50
            rounded-xl px-4 py-3 outline-none text-white
            placeholder:text-gray-400 
            focus:border-purple-400 focus:shadow-[0_0_20px_rgba(244,114,182,0.3)]
            `}
            />
          )}
        />
        </div>

      {errors.message && (
      <p className="text-red-400 text-sm">
        {errors.message.message}
      </p>
      )}
      <button type="submit"
        className=" cursor-pointer mt-2 rounded-xl  bg-purple-600/100 py-3 font-semibold text-white
        shadow-[0_0_35px_rgba(168,85,247,0.35)]
        ">
        Send Message
      </button>
      </form>
      </div>
  ) 
}
export default Contact;