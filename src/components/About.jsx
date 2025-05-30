import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaEnvelope, FaStar, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">About Me</h2>
        <p className="text-lg leading-relaxed">
          An innovative, visionary, and workaholic individual determined to simplify complex processes at the budding stage. Always curious to learn endlessly. Data Science & ML enthusiast with good command of Python and C++, with a deep understanding of Big Data and Machine Learning and their application through practical data analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl">
        <div className="flex items-center gap-4">
          <FaGraduationCap className="text-blue-600 text-xl" />
          <p><strong>Graduation:</strong> B.Tech (CSE)</p>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-blue-600 text-xl" />
          <p><strong>Location:</strong> Kurali, Punjab</p>
        </div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-600 text-xl" />
          <p><strong>Email:</strong> yashikabhandari01@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <FaStar className="text-blue-600 text-xl" />
          <p><strong>Interests:</strong> Full Stack Dev, ML, Open Source, AI</p>
        </div>
      </div>

      {/* Add Social Links here */}
      <div className="flex justify-center space-x-8 mt-12 text-4xl text-gray-700 dark:text-gray-300">
        <a
          href="https://www.linkedin.com/in/yashika34/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/yashikaBhandari"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>

      <div className="mt-10">
        <a
          href="/finalres.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
