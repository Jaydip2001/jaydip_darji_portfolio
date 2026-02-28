import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "Tech Innovation IT Solution",
      role: "Python AI/ML Intern",
      duration: "Aug 2025 — Jan 2026",
      points: [
        "Worked on AI/ML projects involving data preprocessing and model development.",
        "Enhanced model performance by optimizing ML pipelines and debugging code.",
      ],
    },
    // { 
    // company: "Pinterest",
    //  role: "Freelance Developer",
    //  duration: "2024 — Present",
    //  points: [ // "Developed modern portfolio and web apps.",
    // "Experimented with AI features and cloud deployment.", 
    // ], 
    // }, 
    // { // company: "Amazon", // role: "Programming Tutor", 
    // duration: "2024",
     // points: [ // "Taught programming fundamentals.", 
    // "Improved students' problem-solving skills.", 
    // ],
     // },
  ];

  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 px-6 sm:px-8 lg:px-16 max-w-5xl mx-auto"
    >
      {/* TITLE */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">
          <span className="text-teal-400">/</span> experience
        </h2>
        <div className="h-[1px] flex-1 bg-gray-700"></div>
      </div>

      {/* LAYOUT */}
      <div className="flex flex-col md:grid md:grid-cols-[180px_1fr] gap-10">
        {/* LEFT TABS */}
        <div className="relative md:border-l md:border-gray-700 flex md:flex-col gap-4 md:gap-0 overflow-x-auto md:overflow-visible">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`whitespace-nowrap md:block text-left px-4 py-3 text-sm transition border-b md:border-b-0 md:border-l-2
                ${
                  active === i
                    ? "text-teal-400 border-teal-400"
                    : "text-gray-400 border-transparent hover:text-gray-200"
                }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-200">
                {experiences[active].role}{" "}
                <span className="text-teal-400">
                  @ {experiences[active].company}
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {experiences[active].duration}
              </p>

              <ul className="mt-5 space-y-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                {experiences[active].points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-teal-400">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Experience;
