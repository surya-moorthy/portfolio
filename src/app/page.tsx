import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


const techStack = ["Typescript",""]

export default function Home() {
  return (
  <div className="bg-cod-gray-700 p-10 h-[400vh] w-full lg:w-[75%]">
       <Navbar/>
       <div className="relative flex justify-around items-center gap-10 px-8 mt-20 w-full">
             <Image src="/piccy.png" alt="Portfolio Image" width={400} height={400} className=""/>
             <div className="flex flex-col gap-2.5">
                  <h3 className="text-3xl font-semibold tracking-tight text-neutral-800">
                    Surya Moorthy
                  </h3>
                  <p className="text-lg font-medium text-neutral-600">
                      Description
                  </p>
                  <div className="flex flex-col">
                       <span className="text-lg">
                          Reach me here:
                      </span>
                      <div className="flex gap-2 p-1.5">
                            <Link href={"https://github.com/surya-moorthy"}>
                              <Image src="/github.png" alt="github" width={40} height={40}/>
                            </Link>
                            <Link href={"https://www.linkedin.com/in/surya-code"}>
                              <Image src="/linkedin.png" alt="lindedin" width={40} height={40}/>
                            </Link>
                            <Link href={"https://x.com/suryabuilds"}>
                              <Image src="/x.png" alt="twitter" width={40} height={40}/>
                            </Link>
                      </div>
                  </div>
             </div>
       </div>

       <div>
             <h3> Tech Stack</h3>
              <div>
                   buttons of techie
              </div>
       </div>

       <div>
            <h3> 
               Projects
            </h3>
            {/* <ProjectCard/> */}
       </div>
  </div>
  );
}
