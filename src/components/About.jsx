import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_dHW0FQwYXVkuLw5itxzGVAZV-eNKoyimw&usqp=CAU')`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        
        <h2 className="text-2xl font-semibold mb-5">~ Know me better ~</h2>
        
        <p>
          Hello, I'm yashika , currently a B.tech student , passionate for programming with a keen eye in development . With a background in computer science, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          [B.TECH-CSE], [Lovely Professional university], [2026]-present
         
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in programming languages[Python , c/c++, javascript ] and technologies[mern stack] Strong grasp of Design Principles and Concepts,
          Excellent problem-solving skills , Effective communicator and
          collaborator
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
         presently  working as a intern , sheshya (new delhi), full stack developer 

        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          Full stack development , Linkedin Learning, 2023 
          <br></br>
          Data structures and algorithms , udemy, 2023
          <br></br>
         National Level Gold medalist in handwriting competition , mother teresa organisation , 2018
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative technical solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;