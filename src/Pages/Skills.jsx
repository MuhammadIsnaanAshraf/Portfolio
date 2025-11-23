import React from "react";
import Title from "../Components/Title";
import assets from "../assets/assets";

const Skills = () => {
  console.log("assets", assets);
  const skills = [
    {
      name: "JavaScript",
      icon: assets.JS,
      bgColor: "bg-yellow-500",
      textColor: "text-black",
    },
    {
      name: "HTML & CSS",
      icon: assets.HTML,
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "React",
      icon: assets.React_logo,
      bgColor: "bg-cyan-500",
      textColor: "text-white",
    },
    {
      name: "Next JS",
      icon: assets.Next,
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      name: "Typescript",
      icon: assets.Typescript,
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      name: "Express JS",
      icon: assets.Express,
      bgColor: "bg-gray-700",
      textColor: "text-white",
    },
    {
      name: "Node JS",
      icon: assets.Node_logo,
      bgColor: "bg-green-600",
      textColor: "text-white",
    },
    {
      name: "jQuery",
      icon: assets.jQuery,
      bgColor: "bg-purple-600",
      textColor: "text-white",
    },
    {
      name: "MongoDB",
      icon: assets.MongoDB,
      bgColor: "bg-green-700",
      textColor: "text-white",
    },
    {
      name: "SQL",
      icon: assets.SQL,
      bgColor: "bg-green-700",
      textColor: "text-white",
    },
    {
      name: "Python",
      icon: assets.python,
      bgColor: "bg-green-700",
      textColor: "text-white",
    },
    {
      name: "Tailwind CSS",
      icon: assets.Tailwind,
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "Redux Toolkit",
      icon: assets.redux,
      bgColor: "bg-blue-400",
      textColor: "text-white",
    },
  ];

  // Duplicate the skills array to create seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    // <div className="w-full  pb-16 pt-2 overflow-hidden">
    //   <Title text="My Skills" />
    //   <div className="container mx-auto px-4">
    //     {/* <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
    //       Technical Skills
    //     </h2> */}

    //     {/* Skills Container */}
    //     <div className="relative mt-18">
    //       <div className="flex animate-scroll-left">
    //         {duplicatedSkills.map((skill, index) => (
    //           <div
    //             key={`${skill.name}-${index}`}
    //             className="flex-shrink-0 mx-2 sm:mx-4 group cursor-pointer"
    //           >
    //             <div className=" border border-cyan-300 rounded-xl p-3 sm:p-6 w-[120px] sm:w-[160px] lg:w-[180px] h-[120px] sm:h-[140px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 gap-y-4 ">
    //               {/* Icon */}
    //               <div className=" transition-transform duration-300 group-hover:scale-110">
    //                 {/* {skill.icon} */}
    //                 <img src={skill.icon} alt="" className="w-10 h-10" />
    //               </div>

    //               {/* Skill Name */}
    //               <h3 className="text-white font-semibold text-center text-xs sm:text-sm leading-tight">
    //                 {skill.name}
    //               </h3>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   <style jsx>{`
    //     @keyframes scroll-left {
    //       0% {
    //         transform: translateX(0);
    //       }
    //       100% {
    //         transform: translateX(-100%);
    //       }
    //     }

    //     .animate-scroll-left {
    //       animation: scroll-left 15s linear infinite;
    //     }

    //     .animate-scroll-left:hover {
    //       animation-play-state: paused;
    //     }

    //     @keyframes scroll-seamless {
    //       0% {
    //         transform: translateX(0);
    //       }
    //       100% {
    //         transform: translateX(-50%);
    //       }
    //     }

    //      .animate-scroll-seamless {
    //       animation: scroll-seamless 20s linear infinite;
    //     }
    //   `}</style>
    // </div>

    <div className="w-full pb-16 pt-2 overflow-hidden">
      <Title text="My Skills" />
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden mt-18">
          <div className="flex w-max animate-scroll-seamless">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-4 group cursor-pointer"
              >
                <div className="border border-cyan-300 rounded-xl p-3 sm:p-6 w-[120px] sm:w-[160px] lg:w-[180px] h-[120px] sm:h-[140px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 gap-y-4">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-center text-xs sm:text-sm leading-tight">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-seamless {
          animation: scroll-seamless 20s linear infinite;
        }

        .animate-scroll-seamless:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Skills;
