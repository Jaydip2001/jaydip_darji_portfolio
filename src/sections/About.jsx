function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto"
    >
      {/* TITLE */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">
          <span className="text-teal-400">/</span> about me
        </h2>
        <div className="h-[1px] flex-1 bg-gray-700"></div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div className="text-gray-400 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            I am a Software Developer focused on AI, Machine Learning, and
            modern web applications. I previously worked as a Python AI/ML
            Intern at Tech Innovation IT Solutions and hold a Master's degree
            in Computer Applications & IT.
          </p>

          <p>
            I continue exploring cloud and DevOps technologies to build
            scalable digital solutions.
          </p>

          <p className="text-gray-300 font-medium">
            Here are some technologies I have been working with:
          </p>

          {/* TECH LIST */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 text-sm">
            {[
              "Python",
              "React.js",
              "JavaScript",
              "C/C++",
              "Java",
              "MySQL",
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-teal-400">▹</span>
                {tech}
              </div>
            ))}
          </div>

          <p>
            Outside of coding, I enjoy exploring tech gadgets, learning about
            AI, and staying updated with emerging technologies.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group w-[220px] sm:w-[260px] md:w-[300px]">

            {/* IMAGE WRAPPER (IMPORTANT) */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}your-photo.png`}
                alt="profile"
                className="w-full h-full object-cover object-[60%_center] grayscale group-hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* BORDER EFFECT */}
            <div className="absolute inset-0 rounded-xl border border-teal-400/40 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-300"></div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About