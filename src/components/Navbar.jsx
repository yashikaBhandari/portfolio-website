// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white cursor-pointer">
          Yashika Bhandari
        </h1>
        <ul className="hidden md:flex space-x-6 text-sm font-semibold text-gray-800 dark:text-gray-200">
          {['home', 'about', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
            <li key={section} className="hover:text-blue-600 cursor-pointer transition duration-200">
              <Link to={section} smooth={true} duration={500} offset={-70}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-xl text-gray-700 dark:text-gray-300">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
