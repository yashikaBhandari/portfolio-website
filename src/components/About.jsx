import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_dHW0FQwYXVkuLw5itxzGVAZV-eNKoyimw&usqp=CAU')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <h2 className="text-2xl font-semibold mb-5">~ Know me better ~</h2>
        <p>
          Hello, I'm Yashika, currently a B.tech student, passionate about programming with a keen eye in development. With a background in computer science, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>[B.TECH-CSE], [Lovely Professional University], [2026]-present</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in programming languages [Python, C/C++, JavaScript] and technologies [MERN stack]. Strong grasp of Design Principles and Concepts, Excellent problem-solving skills, Effective communicator and collaborator.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          Presently working as an intern, Sheshya (New Delhi), Full Stack Developer
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          Full Stack Development, LinkedIn Learning, 2023
          <br />
          Data Structures and Algorithms, Udemy, 2023
          <br />
          National Level Gold Medalist in Handwriting Competition, Mother Teresa Organisation, 2018
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver innovative technical solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </p>
        <br />
        {/* Resume Download Button */}
        <a
          href="/finalres.pdf"  // Update this path to your actual resume file
          download="yashika_bhandari_resume.pdf"  // This specifies the name of the file to be downloaded
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}

export default About;
