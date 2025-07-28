"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {motion, useMotionValueEvent, useScroll } from "motion/react" 


const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] 


export default function Navbar() {
  const [scrolled,setScrolled] = useState(false);
  const [Hovered,setHovered] = useState(false);
  const {scrollY} = useScroll();

useMotionValueEvent(scrollY,"change",(latest)=> {
  if (latest > 20) {
    setScrolled(true);
  }else{
    setScrolled(false);
  }
})
 
          console.log(Hovered);
        
  return (
  <motion.nav 
  animate={{
            boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
            width: scrolled ? "40%" : "100%",
            y : scrolled ? 10 : 0,
        }}

  className='fixed top-0 inset-x-0 max-w-4xl mx-auto flex items-center justify-between mt-3 px-4 rounded-full shadow-aceternity'>
        {/* Navbar content goes here */}
        <div>
              <Image src={"/avatar.png"} width={60} height={50} alt='avatar' className='rounded-full'/>
        </div>
        
        <div className=" p-4">
           {
            nav.map((item)=> {
              return (
                  <Link
                      href={item.href}
                      key={item.name}
                      className="relative text-lg font-semibold text-neutral-800 rounded-3xl px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors"
                    >
                      <motion.span
                        animate={{
                          textDecoration: Hovered ? 'underline' : 'none',
                          textUnderlineOffset: Hovered ? 6 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
              )
            })
           }
        </div>
    </motion.nav>
  )
}
