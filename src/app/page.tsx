import About from "@/components/About";
import { Navbar } from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectSection";

export default function Home() {
  return (
  <div className="flex flex-col justify-center bg-neutral-300 w-full p-10 gap-y-4"> {/* Added gap-y-4 */}
    <Navbar/>  
    <About/>
    <ProjectsSection/>
  </div>
  );
}
