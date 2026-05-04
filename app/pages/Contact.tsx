import {motion} from "motion/react";
import { useState } from "react";
import * as z from  "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { OrbitProgress } from "react-loading-indicators";
const contactSchema = z.object({
  name: z
  .string()
  .min(2, "Name must be at least 2 character")
  .max(100, "Name must be less than 100 character!"),
  email: z
  .string()
  .email("Incorrect email! Please try again!"),
  message : z.string()
})
type ContactForm = z.infer<typeof contactSchema>;

const Contact =() =>{
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset
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
  const successfullySubmit = () =>{
    return(
     <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 "
    >
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="relative w-[90%] max-w-md rounded-3xl bg-black/70 backdrop-blur-xl border border-purple-500/20 p-8 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
      >
      <button
        onClick={() => {
          setShowSuccess(false)
        }}
        className="absolute top-2 right-4 text-red-400 text-xl cursor-pointer"
        >
          ✕
      </button>
      <div className="flex flex-col items-center gap-3 ">
        <h2
          className="
          text-2xl
          font-bold
        text-green-400
      "
      >
        Message Sent
      </h2>

      <p className="mt-4 text-gray-300">
        Thank you for contacting me! 
      </p>
      </div>
    </motion.div>
  </div>
    )
  }
  const errorSubmit=() =>{
    return(
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
        initial={{
          opacity:0,
          scale:0.8,
          y:30,
        }}
        animate={{
          opacity:1,
          scale:1,
          y:0
        }}
        exit={{
          opacity:0,
        }}
        className="relative w-[90%] max-w-md rounded-3xl bg-black/70 backdrop-blur-xl border border-purple-500/20 p-8 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
        >
           <button
        onClick={() => {
          setShowError(false)
        }}
        className="absolute top-2 right-4 text-red-400 text-xl cursor-pointer"
        >
          ✕
      </button>
          <div className="flex flex-col items-center gap-3 ">
            <h2
              className="
                text-2xl
                  font-bold
              text-red-400
              "
            >
            Message Error!
            </h2>
          <p className="mt-4 text-gray-300">
            Please try again! Thank you😭 
          </p>
        </div>
        </motion.div>    
      </div>
    )
  }
  const onSubmit = async(data: ContactForm) =>{
    try{
      setLoading(true);
      const res = await fetch("/api/contact",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if(!res.ok){
        setShowError(true);
      }
      setShowSuccess(true);
      reset();
    }
    catch(error){
      
    }
    finally{
      setLoading(false);
    }
  }
  if(isLoading){
    return(
      <div className="min-h-screen flex flex-col justify-center items-center">
        <OrbitProgress color="#8d34a5" size="medium"/>
      </div>
    )
  }
  return(
     <div
     id="contact"
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
      <motion.form
      initial={{opacity:0, scale:0.8, y:50}}
      whileInView={{opacity:1, scale:1, y:0}}
      viewport={{once: true}}
      transition={{
        duration: 0.5,
        ease:"easeOut",
      }}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl w-full mx-auto bg-black/10 opacity-80 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 shadow-[0_0_35px_rgba(168,85,247,0.18)]
      flex flex-col gap-10
      mt-8 lg:mt-10 
      "
      >
        <div className="
          flex flex-row items-center gap-3
        ">
        <label htmlFor="name"
        className="w-35 lg:w-30 lg:text-xl font-semibold text-purple-300 [text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
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
        className="w-35 lg:w-30 text-xl font-semibold text-purple-300 [text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
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
        className="w-35 lg:w-30 text-xl font-semibold text-purple-300 [text-shadow:0_0_10px_rgba(168,85,247,0.8)]">Message:</label>
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
      <motion.button type="submit"
        whileHover={{
          scale: 1.05,
          transition:{
            duration:0.3,
            ease:"easeOut",
          }
        }}  
        whileTap={{
          scale:0.95,
          transition:{
            duration:0.3,
            ease:"easeOut"
          }
        }}
        className=" cursor-pointer mt-2 rounded-xl  bg-purple-600/100 py-3 font-semibold text-white
        shadow-[0_0_35px_rgba(168,85,247,0.35)]
        ">
        Send Message
      </motion.button>
      </motion.form>
      {showSuccess &&(successfullySubmit())}
      {showError &&(errorSubmit())}
      </div>
  ) 
}
export default Contact;