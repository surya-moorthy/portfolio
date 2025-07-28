
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import { div } from 'motion/react-client'
import React from 'react'


export default function page() {
  return (
    <div className='min-h-[200vh]'>
        <About/>
        <TechStack/>
    </div>
  )
}
