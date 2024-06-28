import React from "react";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: "https://icons.veryicon.com/png/128/education-technology/artificial-intelligence-2/lvwang-content-security.png",
      name: "Sentiment analysis",
      description:"Twitter us inline sentiment analysis : analyzes the sentiment or emotion of tweets. By using natural language processing and machine learning algorithms"
    },
    {
      id: 2,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgfcikbiD1L_5vGdi0dlUl_LLe0HFp-FHyw&usqp=CAU",
      name: "Ai trip planner",
      description:"An AI Trip Planner app is a cutting-edge travel assistant designed to simplify the process of planning and organizing trips. Leveraging artificial intelligence,used mern stack with integration of AI"
    },
    {
      id: 3,
      logo: "https://www.tridentspark.com/wp-content/uploads/2023/07/mern-stack-icon-1.png",
      name: "voting app ",
      description:"full-fledged application using mern stack! implemented web socket for instant updates and authentication features to ensure secur participation .used react for dynamic user interface ."
    },
   
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className=" text-2xl underline font-semibold">my Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name ,description}) => (
            <div
              className="md:w-[300px] md:h-[320px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 text-sm">{description}
             
                </p>
              </div>
              <div className=" px-3 py-2 space-x-3 flex  mt-auto">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;