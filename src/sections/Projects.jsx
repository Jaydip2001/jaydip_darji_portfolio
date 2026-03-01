import { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import {
  FaGithub,
  FaFolderOpen,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa"

function Projects() {
  /* FEATURED PROJECTS */
  const featured = [
    {
      title: "AI-Powered Gymni Tracker App",
      desc: "A modern React Native fitness app using Gemini AI to deliver smart workout guidance.",
      img: `${import.meta.env.BASE_URL}gymni_thumbnail1.png`,
      github: "https://github.com/Jaydip2001/my-fitness-tracking-app",
      live: "",
      tech: "React Native | Gemini API | Sanity | Clerk | Expo",
    },
    {
      title: "Ochi Website Clone",
      desc: "Responsive and visually rich landing page inspired by the Ochi agency website.",
      img: `${import.meta.env.BASE_URL}ochi_clone.png`,
      github: "https://github.com/Jaydip2001/ochi-clone",
      live: "",
      tech: "React.js | Tailwind CSS | GSAP | Locomotive Scroll | Vite",
    },
  ]

  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = () =>
    setIndex((prev) => (prev + 1) % featured.length)

  const prev = () =>
    setIndex((prev) => (prev - 1 + featured.length) % featured.length)

  /* AUTO SLIDE WITH HOVER PAUSE */
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featured.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovered, featured.length])

  /* SMALL PROJECT GRID */
  const projects = [
    {
      title: "Clothing Website",
      desc: "Responsive e-commerce website for a clothing brand.",
      tech: "JS | HTML | CSS",
      github: "https://github.com/Jaydip2001/clothing-website11",
      live: "",
    },
    {
      title: "Food Website",
      desc: "Premium food delivery landing website.",
      tech: "JavaScript | HTML | CSS",
      github: "https://github.com/Jaydip2001/food-website",
      live: "",
    },
    {
      title: "Medical Store",
      desc: "Full-stack e-commerce platform for online medicine sales.",
      tech: "Java | MySQL | JavaScript | HTML | CSS",
      github: "https://github.com/Jaydip2001/medical_store",
      live: "",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto"
    >
      {/* FEATURED SLIDER */}
      <div className="relative mb-20">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-gray-700"
          >
            <img
              src={featured[index].img}
              alt=""
              className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100">
                {featured[index].title}
              </h3>

              <p className="text-gray-300 mt-3 text-xs sm:text-sm max-w-md">
                {featured[index].desc}
              </p>

              <p className="text-teal-400 text-xs mt-3">
                {featured[index].tech}
              </p>

              <div className="flex gap-4 mt-4">
                {/* GitHub */}
                <a
                  href={featured[index].github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) =>
                    !featured[index].github && e.preventDefault()
                  }
                  className={`w-9 h-9 flex items-center justify-center border rounded-md transition
                    ${
                      featured[index].github
                        ? "border-gray-600 text-gray-300 hover:border-teal-400"
                        : "border-gray-700 text-gray-600 cursor-not-allowed"
                    }`}
                >
                  <FaGithub />
                </a>

                {/* Live */}
                <a
                  href={featured[index].live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) =>
                    !featured[index].live && e.preventDefault()
                  }
                  className={`w-9 h-9 flex items-center justify-center border rounded-md transition
                    ${
                      featured[index].live
                        ? "border-gray-600 text-gray-300 hover:border-teal-400"
                        : "border-gray-700 text-gray-600 cursor-not-allowed"
                    }`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-xl sm:text-2xl text-gray-300 hover:text-white"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-xl sm:text-2xl text-gray-300 hover:text-white"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* SMALL PROJECT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#0f1e3a] border border-gray-700 rounded-xl p-6 hover:border-teal-400 hover:-translate-y-1 transition duration-300"
          >
            <div className="flex justify-between mb-6">
              <FaFolderOpen className="text-teal-400 text-xl" />

              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href={p.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => !p.github && e.preventDefault()}
                  className={`w-8 h-8 flex items-center justify-center border rounded-md transition
                    ${
                      p.github
                        ? "border-gray-700 text-gray-400 hover:border-teal-400"
                        : "border-gray-800 text-gray-600 cursor-not-allowed"
                    }`}
                >
                  <FaGithub />
                </a>

                {/* Live */}
                <a
                  href={p.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => !p.live && e.preventDefault()}
                  className={`flex items-center gap-1 px-2 py-1 border rounded-md text-xs transition
                    ${
                      p.live
                        ? "border-gray-700 text-gray-400 hover:border-teal-400"
                        : "border-gray-800 text-gray-600 cursor-not-allowed"
                    }`}
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live
                </a>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-200">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
            <p className="text-gray-500 text-xs mt-4">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects