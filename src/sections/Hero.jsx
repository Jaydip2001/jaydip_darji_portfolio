import { TypeAnimation } from "react-type-animation"
import InteractiveAvatar from "../components/InteractiveAvatar"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function Hero() {
  return (
   <section
  id="hero"
  className="min-h-screen flex items-center pt-28 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto"
>
      <div className="grid md:grid-cols-2 gap-14 items-center w-full">

        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-1 md:order-none"
        >
          <div className="w-[240px] sm:w-[280px] md:w-[340px] lg:w-[420px]">
            <InteractiveAvatar />
          </div>
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi,{" "}
            <span className="text-teal-400">
              <TypeAnimation
                sequence={[
                  "Jaydip here.",
                  2000,
                  "Software Developer.",
                  2000,
                  "AI/ML Engineer.",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            I build modern web and AI-powered applications using React,
            Machine Learning, and cloud technologies — focused on creating
            scalable and impactful digital experiences.
          </p>

          <div className="mt-8">
           <a 
  href="mailto:yourmail@gmail.com?subject=Project Inquiry&body=Hello Jaydip,%0D%0A%0D%0AI have a query regarding your work.%0D%0A%0D%0AThank you." 
  className="inline-block"
>
  <button className="mt-8 border border-teal-400 px-6 py-3 rounded-lg hover:bg-teal-400/10 transition">
    Say hi!
  </button>
</a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero