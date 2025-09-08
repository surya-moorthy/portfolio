import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='sticky top-4 z-[1000] flex items-center mx-auto justify-between overflow-hidden bg-neutral-100 shadow-xl w-[80%] px-10 py-4 rounded-2xl'>
        <h3 className='text-2xl font-semibold font-serif'>
             Surya Moorthy
        </h3>

        <div className='flex gap-5'>
             <Link href={"#skills"}>Skills</Link>
             <Link href={"#Projects"}>Projects</Link>
        </div>
    </div>
  )
}
