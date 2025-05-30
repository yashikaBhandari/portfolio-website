// Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Sheshya, New Delhi",
      duration: "2024 - Present",
      details: [
        "Worked with MERN stack to develop and maintain school app",
        "Handled backend development including multiple daily API endpoints",
        "Collaborated with frontend developer in daily sync-ups to ensure smooth UI-UX integration",
        "Independently managed all backend tasks during critical development phase"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Code Soft",
      duration: "2023 - 2024",
      details: [
        "Built responsive portfolio website using React and deployed on Vercel",
        "Developed a JavaScript calculator and real estate landing page"
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Ladybird Web Solution Pvt Ltd",
      duration: "2024 (Planned)",
      details: [
        "Expected to contribute to enterprise applications using latest web technologies"
      ]
    }
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20" name="Experience">
      <motion.h1
        className="text-3xl font-bold mb-5 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h1>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg border border-gray-300 shadow-md hover:shadow-xl duration-300 bg-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-blue-600">{exp.role}</h2>
            <p className="text-lg text-gray-700">{exp.company} | {exp.duration}</p>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-sm text-gray-800">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;