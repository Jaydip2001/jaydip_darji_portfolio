import { FaGithub, FaArrowUp } from "react-icons/fa"

function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-8 lg:px-16 text-center border-t border-gray-800">

      {/* TOP SCROLL BUTTON */}
      <div className="flex justify-center mb-6">
        <a
          href="/"
          className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full text-gray-400 hover:text-teal-400 hover:border-teal-400 transition transform hover:-translate-y-1"
        >
          <FaArrowUp />
        </a>
      </div>

      {/* NAME */}
      <p className="text-sm sm:text-base text-gray-400">
        Designed & Built by{" "}
        <span className="text-teal-400 font-medium">
          Jaydip Darji
        </span>
      </p>

      {/* GITHUB */}
      <div className="flex justify-center mt-5">
        <a
          href="https://github.com/jaydip2001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-400 hover:text-white transition transform hover:-translate-y-1"
        >
          <FaGithub />
        </a>
      </div>

      {/* COPYRIGHT */}
      <p className="mt-6 text-xs text-gray-600">
        © {new Date().getFullYear()} Jaydip Darji. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer