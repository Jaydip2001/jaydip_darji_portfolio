import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ]

  /* Shrink navbar on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* Close on ESC */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a1628]/80 backdrop-blur-xl py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">

          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Jaydip Darji
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-gray-300">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                smooth
                duration={500}
                spy={true}
                activeClass="text-white"
                className="cursor-pointer relative group transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden text-gray-300 text-xl cursor-pointer">
            {open ? (
              <FaTimes onClick={() => setOpen(false)} />
            ) : (
              <FaBars onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Background */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-[#0a1628] z-50 shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-8 gap-8 mt-20 text-gray-300 text-lg">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              smooth
              duration={500}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar