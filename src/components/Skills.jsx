import React from "react";
import { motion } from "framer-motion";

const cardItem = [
  {
    id: 1,
    logo: "https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-cezvpn3f.png",
    name: "MongoDB",
  },
  {
    id: 2,
    logo: "https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png",
    name: "C++",
  },
  {
    id: 3,
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp",
    name: "Node.js",
  },
  {
    id: 4,
    logo: "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
    name: "React",
  },
  {
    id: 5,
    logo: "https://static.vecteezy.com/system/resources/previews/009/356/335/original/html-js-css-icon-style-vector.jpg",
    name: "HTML, CSS, JS",
  },
  {
    id: 6,
    logo: "https://cdn.prod.website-files.com/609bc2fa29b6d5b7f44a2785/647743f51bc76753239a8bc6_expressjs-logo.webp",
    name: "Express.js",
  },
  {
    id: 7,
    logo: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    name: "Python",
  },
  {
    id: 8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    name: "TensorFlow",
  },
  {
    id: 9,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    name: "scikit-learn",
  },
  {
    id: 10,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png",
    name: "PyTorch",
  },
  {
    id: 11,
    logo: "https://cdn-icons-png.flaticon.com/512/3285/3285713.png",
    name: "NLP",
  },
  {
    id: 12,
    logo: "https://cdn-icons-png.flaticon.com/512/3096/3096673.png",
    name: "AI & ML",
  },
  {
    id: 13,
    logo: "https://cdn-icons-png.flaticon.com/512/2950/2950667.png",
    name: "LLMs",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-blue-600"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-12 text-lg text-center max-w-xl"
      >
        I've honed these skills below ~~
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl w-full">
        {cardItem.map(({ id, logo, name }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            className="flex flex-col items-center justify-center border-2 rounded-full p-6 shadow-lg cursor-pointer hover:scale-110 transform transition-transform duration-300 bg-white dark:bg-gray-800"
          >
            <img
              src={logo}
              alt={name}
              className="w-24 h-24 object-contain mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
