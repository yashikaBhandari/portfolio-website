// src/components/Certifications.jsx

import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Data Structures and Algorithms - Coursera",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/DSA-CERT-ID"
  },
  {
    title: "Full Stack Development with AI Integration - W3Elites",
    date: "2024",
    link: "https://example.com/w3elites-cert"
  },
  {
    title: "Machine Learning Foundations - Kaggle",
    date: "2024",
    link: "https://example.com/kaggle-ml-cert"
  },
  {
    title: "Kotlin for Android Development",
    date: "2024",
    link: "https://example.com/kotlin-cert"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-blue-200 dark:border-blue-700 rounded-xl p-4 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-500">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {cert.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
