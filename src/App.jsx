import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import CursorGlow from "./components/CursorGlow"
import Experience from "./sections/Experience"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-40"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-40"></div>

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <CursorGlow />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App