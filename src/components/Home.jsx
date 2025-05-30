// src/components/Home.jsx

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* Left side content */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Hi, I'm Yashika 👋
        </h2>

        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            1500,
            'ML Enthusiast',
            1500,
            'Open Source Contributor',
            1500,
            'Always Curious to Learn!',
            1500,
          ]}
          speed={50}
          wrapper="h3"
          repeat={Infinity}
          className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6"
        />

        <p className="text-lg mb-6 max-w-md leading-relaxed">
          I specialize in crafting scalable web applications with intuitive UI/UX.
          With a passion for Machine Learning and Open Source, I continuously explore emerging technologies to solve complex problems and build innovative solutions.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {['React', 'Node.js', 'Python', 'TensorFlow', 'NLP', 'MongoDB', 'Express.js'].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium text-sm shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-6 text-2xl mb-6">
          <a
            href="https://www.linkedin.com/in/yashika34/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yashikaBhandari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 dark:hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:yashikabhandari01@gmail.com"
            aria-label="Email"
            className="hover:text-red-600 dark:hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="/finalres.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            View Resume
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-5 py-2 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

        <blockquote className="mt-8 italic text-gray-600 dark:text-gray-400 max-w-md">
          "Code is like humor. When you have to explain it, it’s bad." – Cory House
        </blockquote>
      </div>

      {/* Right side profile image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/my.jpeg"
          alt="Yashika Bhandari"
          className="w-60 h-60 object-cover rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
