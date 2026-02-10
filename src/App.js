import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"
import { AboutSection } from "./components/AboutSection"
import { ProjectSection } from "./components/ProjectSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <main className=" min-h-screen  flex flex-col bg-gradient-to-r from-slate-950 to-blue-950  px-8 py-4">
      <NavBar/>
      <div className="  mt-[100px]">
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<AboutSection/>}/>
            <Route path="/contact" element={<EmailSection/>}/>
            <Route path="/projects" element={<ProjectSection/>}/>
        </Routes>
      </div>
      <Footer/>
    </main>
  )
}


export default App;
