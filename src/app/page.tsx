import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex flex-col justify-center items-center p-10 max-w-full lg:max-w-2xl">
       <Navbar/>
       <div className="flex justify-center items-center gap-10 px-8">
             <Image src={""} alt=""/>
             <div>
                  <h3>Surya Moorthy</h3>
                  <p>
                      Description
                  </p>
                  <div>
                       <span>
                          Reach me here:
                      </span>
                      <div>
                            github
                            instagram
                            linkedin
                            X
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
            <ProjectCard/>
       </div>
  </div>
  );
}
