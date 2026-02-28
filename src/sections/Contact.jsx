import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 px-6 sm:px-8 lg:px-16 text-center max-w-3xl mx-auto"
    >
      {/* TITLE */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">
          <span className="text-teal-400">/</span> contact
        </h2>
        <div className="h-[1px] flex-1 bg-gray-700"></div>
      </div>

      {/* TEXT */}
      <p className="text-gray-400 mb-10 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
        I'm open to opportunities, collaborations, or just a friendly chat.
        If you'd like to discuss a project or connect professionally,
        feel free to reach out — my inbox is always open.
      </p>

      {/* EMAIL BUTTON */}
      <a 
  href="mailto:yourmail@gmail.com?subject=Project Inquiry&body=Hello Jaydip,%0D%0A%0D%0AI have a query regarding your work.%0D%0A%0D%0AThank you." 
  className="inline-block"
>
  <button className="mt-8 border border-teal-400 px-6 py-3 rounded-lg hover:bg-teal-400/10 transition">
    Say hi!
  </button>
</a>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-8 mt-12 text-xl text-gray-400">
        <a
          href="https://github.com/jaydip2001"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition transform hover:-translate-y-1"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jaydipdarji2001"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition transform hover:-translate-y-1"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:jaydip2801@gmail.com"
          className="hover:text-white transition transform hover:-translate-y-1"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  )
}

export default Contact