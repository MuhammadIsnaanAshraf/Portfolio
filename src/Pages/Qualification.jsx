// import React from 'react'
// import Title from '../Components/Title'

// function Qualification() {
//     return (
//         <div className='py-10 min-h-[95vh] '>
//             <Title text="Qualification" />
//             <div className='flex items-center justify-center md:gap-x-16 mt-10 w-[80%] mx-auto flex-wrap'>

//                 <div className="flex gap-x-10 my-4  relative pl-10 py-4 w-[45%]">

//                     <div className="flex flex-col items-center  box-border">
//                         <span className="w-4 h-4 border border-cyan-300 rounded-full z-10"></span>
//                         <span className="bg-cyan-300 w-0.5 flex-1 mt-0.5 "></span>
//                     </div>

//                     <div className="explain text-white">
//                         <h3 className="font-semibold text-lg mb-1">Govt. Post Graduate College Samanabad</h3>
//                         <p className='text-gray-400 mb-4'>Bachelor in Computer Science</p>
//                         <p className='text-cyan-300 '> CGPA : <span className='text-gray-400 ml-2'> (3.95 / 4.0) </span></p>

//                         <p className='text-cyan-300 '>2023–2027</p>
//                     </div>
//                 </div>
//                 <div className="flex relative gap-x-10 my-4 pl-10 w-[45%] ">

//                     <div className=" flex flex-col items-center">
//                         <span className="w-4 h-4 border border-cyan-300 rounded-full z-10"></span>
//                         <span className="bg-cyan-300 w-0.5 flex-1 mt-0.5 "></span>
//                     </div>

//                     <div className="explain text-white">
//                         <h3 className="font-semibold text-lg mb-1">KIPS College, Faisalabad</h3>
//                         <p className='text-gray-400 mb-4'>FSc Pre.Medical</p>
//                         <p className='text-cyan-300 '> Marks : <span className='text-gray-400 ml-2'> (1039 / 1100) </span></p>
//                         <p className='text-cyan-300 '>2020–2022</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-x-10 gap-y-4relative pl-10 w-[45%]">

//                     <div className="  flex flex-col items-center ">
//                         <span className="w-4 h-4 border border-cyan-300 rounded-full z-10"></span>
//                         <span className="bg-cyan-300 w-0.5 flex-1 mt-0.5 "></span>
//                     </div>

//                     <div className="explain text-white">
//                         <h3 className="font-semibold text-lg mb-1">Govt. Jouhar Public High School, Faisalabad </h3>
//                         <p className='text-gray-400 mb-4'>Science</p>
//                         <p className='text-cyan-300 '> Marks : <span className='text-gray-400 ml-2'> (1052 / 1100) </span></p>

//                         <p className='text-cyan-300 '>2018–2020</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Qualification






import React from 'react';
import Title from '../Components/Title';

const QualificationsExperience = () => {
  const qualifications = [
    {
      institution: "Govt. Post Graduate College Samanabad",
      degree: "Bachelor in Computer Science",
      grade: "CGPA: (3.95 / 4.0)",
      duration: "2023–2027"
    },
    {
      institution: "KIPS College, Faisalabad",
      degree: "FSc Pre.Medical",
      grade: "Marks: (1039 / 1100)",
      duration: "2020–2022"
    },
    {
      institution: "Govt. Jouhar Public High School, Faisalabad",
      degree: "Science",
      grade: "Marks: (1052 / 1100)",
      duration: "2018–2020"
    }
  ];

  const experiences = [
    {
      company: "Genius Mind zone",
      position: "MERN Stack Intern",
      duration: "November 2025 - January 2025",
      description: "Developed web applications using React.js Express.js, and MongoDB"
    },
    {
      company: "Genius Mind zone",
      position: "MERN Stack Developer",
      duration: "January 2025 - Present",
      description: "Worked on full-stack development projects, focusing on building scalable web applications in collaboration with cross-functional teams."
    },
    
  ];

  const TimelineItem = ({ item, type }) => (
    <div className="relative flex items-start mb-12">
      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-4 h-4  rounded-full border-2 border-cyan-400"></div>
        {/* Timeline line */}
     
         (
          <div className="absolute left-1/2 top-4 w-0.5 h-16 bg-cyan-400 transform -translate-x-1/2"></div>
        )
      </div>
      
      {/* Content */}
      <div className="ml-6 flex-1">
        <h3 className="text-white text-xl font-semibold mb-2">
          {type === 'qualification' ? item.institution : item.company}
        </h3>
        <p className="text-gray-300 mb-2">
          {type === 'qualification' ? item.degree : item.position}
        </p>
        {type === 'qualification' && item.grade && (
          <p className="text-cyan-300 mb-1 font-medium">{item.grade}</p>
        )}
        {type === 'experience' && item.description && (
          <p className="text-gray-400 text-sm mb-2">{item.description}</p>
        )}
        <p className="text-cyan-300 font-medium">{item.duration}</p>
      </div>
    </div>
  );

  return (
    <div id='experience' className=" min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Qualifications & Experience
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My educational background and professional journey
          </p>
        </div> */}
        <Title text="Qualifications & Experience" />

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 w-[80vw] mx-auto mt-20">
          {/* Qualifications - Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Qualifications</h2>
            
            <div className="space-y-0">
              {qualifications.map((qualification, index) => (
                <TimelineItem 
                  key={index}
                  item={qualification}
                  isLast={index === qualifications.length - 1}
                  type="qualification"
                />
              ))}
            </div>
          </div>

          {/* Experience - Right Side */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
            
            <div className="space-y-0">
              {experiences.map((experience, index) => (
                <TimelineItem 
                  key={index}
                  item={experience}
                  isLast={index === experiences.length - 1}
                  type="experience"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationsExperience;