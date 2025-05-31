// src/components/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [

  {
    title: "React Notes App",
    image: "/note.png",
    description: "Beautiful, animated notes app built using React, Tailwind, and Framer Motion with editable, downloadable, and responsive notes.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/yashikaBhandari/Noteapp",
    live: "https://noteapp-peach.vercel.app",
  },
  {
    title: "Edge Detection Viewer",
    image: "/edge.jpg",
    description: "Web-based real-time edge detection using OpenCV.js, WebRTC, and WebGL. Built as a workaround to Android NDK limitations during FLAM's R&D internship assignment.",
    tech: ["JavaScript", "OpenCV.js", "WebRTC", "WebGL"],
    github: "https://github.com/yashikaBhandari/edgeviewerdetector",
    live: "https://edgeviewerdetector.vercel.app",
  },
  {
    title: "AI Trip Planner",
    image: "/trip.png",
    description: "Suggests travel plans based on user inputs like location, budget, and interests.",
    tech: ["MERN", "OpenAI API", "Tailwind"],

    live: "https://ai-trip-planner.vercel.app",
  },

  {
    title: "Virtual Herbal Garden",
    image: "/gar.webp",
    description: "Interactive, educational platform showcasing medicinal plants used in AYUSH.",
    tech: ["React", "Firebase", "ML"],

    live: "https://herbal-garden.vercel.app",
  },
  {
    title: "Sentiment Classifier",
    image: "/sent.png",
    description: "Trained ML model on 1.5M Kaggle tweets with 79% accuracy using NLTK & scikit-learn.",
    tech: ["Python", "NLP", "scikit-learn"],
    github: "https://github.com/yashikaBhandari/Sentiment-_Analysis",
    live: "",
  },
  {
    title: "Book Finder",
    image: "/book.png",
    description: "Search engine for LeetCode problems with user-submitted solutions.",
    tech: ["React", "MongoDB", "Express"],
    github: "https://github.com/yashikaBhandari/leetcode-solutions",
    live: "https://book-store-app-gold.vercel.app/",
  },


];


export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-blue-500 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-white rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-white"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-white"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}