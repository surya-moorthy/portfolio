
"use client"

import {motion} from "motion/react";

type stackType = {
    title : string;
    libraries: string[];
}

const stacks: stackType[] = [
   {
    title: "Languages",
    libraries : ["Typescript","Rust"]
   },
   {
    title : "Frontend",
    libraries: ["React{Nextjs}","Tailwindcss","Motion.dev",]
   } ,
   {
    title : "Backend",
    libraries: ["Nodejs","Actix","Expressjs"],
   },
   {
    title: "Devops",
    libraries: ["Docker","AWS"]
   },
   {
    title: "Database",
    libraries: ["Mongodb","Postgres","MySQL"],
   },

]

export default function TechStack() {
    return (
       <div className='flex flex-col min-h-screen bg-neutral-200  justify-center items-center w-full mx-auto'>
             <h1 className="font-poppins text-4xl font-bold">
                Tech Stack
            </h1>
            <div>
                {
                    stacks.map((stack,index)=>{
                        return (
                            <motion.div className="flex ">
                                 
                            </motion.div>
                        )})}
            </div>
        </div>
    )
}