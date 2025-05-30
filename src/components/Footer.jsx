import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-gray-300 dark:border-gray-700" />
      <footer className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons with hover effect */}
            <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400 dark:hover:text-blue-500 transition"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 dark:hover:text-pink-500 transition"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com/in/yashika34"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700 dark:hover:text-blue-400 transition"
              >
                <FaLinkedinIn size={28} />
              </a>
            </div>

            {/* Footer text */}
            <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col items-center space-y-2">
              <p className="text-sm select-none">&copy; 2023 . All rights reserved.</p>
              <p className="text-sm select-none">CREATED BY ❤️ YASHIKA</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
