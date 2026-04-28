import { useRef, useState } from "react";
import { navLinks } from "@/app/constants";
import { AnimatePresence, motion } from "motion/react";
import { Spin as HamburgerMenu } from 'hamburger-react'
import Link from "next/link";
const Hamburger=()=>{
  const [isOpen, setOpen] = useState(false);
  const [isClose, setClose] = useState<boolean>(false)
  const ref = useRef(null);

  return(
    <div className="flex lg:hidden text-2xl md:text-3xl"> 
      <HamburgerMenu toggled={isOpen} toggle={setOpen}/>
      {isOpen &&(
        <div className="fixed left-0 shadow-4xl right-0 top-19 p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
          <ul className="grid gap-2">
            {navLinks.map((item,index)=>{
              return(
                <li key={item.id}
                className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
                  <Link
                  href={item.href}
                  className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950">
                      <span className="flex gap-1 text-lg">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
export default Hamburger;