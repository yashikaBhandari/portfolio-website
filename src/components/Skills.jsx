import React from "react";

function Skills() {
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
      name: "node js",
    },
    {
      id: 4,
      logo: "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
      name: "React",
    },
    {
      id: 5,
      logo: "https://static.vecteezy.com/system/resources/previews/009/356/335/original/html-js-css-icon-style-vector.jpg",
      name: "HTML , CSS , JS",
    },
    {
      id: 6,
      logo: "https://cdn.prod.website-files.com/609bc2fa29b6d5b7f44a2785/647743f51bc76753239a8bc6_expressjs-logo.webp",
      name: "Express js",
    },
    {
      id: 7,
      logo: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
      name: "Python",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        
        <p className="  ">
          I've honed these skills below ~~
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;