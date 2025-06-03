
import './App.css'
import  About  from './pages/About'
import { Navbar } from './components/Navbar'
import ProjectsSection from './pages/ProjectSection'
import TechStackSection from './pages/TechStack'

function App() {

  return (
    <>
       <Navbar/> 
       <About/> 
       <TechStackSection/>
       <ProjectsSection/> 
    </>
  )
}

export default App
