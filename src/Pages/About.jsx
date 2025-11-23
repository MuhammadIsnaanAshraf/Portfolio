import React from 'react'
import Lottie from 'react-lottie'
import animationData from "../Components/Animation - 1743609170361.json"
import Stack_icons from '../Components/Stack_icons'
import Title from '../Components/Title'
function About() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div id='about' className=' page-content min-h-[95vh] mt-14 sm:mt-6 md:mt-18 lg:mt-24'>
            {/* <h2 className='text-cyan-300 text-2xl text-center'>Know More About Me</h2>
            <div className="flex gap-x-2 justify-center items-center mt-6">
                <span className="left bg-cyan-300 w-2 h-2 transform rotate-45"></span>
                <div className="w-1/3 h-2 bg-cyan-300 rounded-md relative px-2">
                    <span className="absolute border border-fuchsia-300 p-1 bg-[#050c2b] shadow-fuchsia-300 w-3 h-3 transform rotate-45 top-[-2px] left-1 animate-move"></span>
                </div>
                <span className="right bg-cyan-300 w-2 h-2 transform rotate-45"></span>
            </div> */}
            <Title text="Know More About Me" className="mx-4" />
            <div className='flex md:flex-row flex-col md:gap-y-0 gap-y-8 gap-x-10 md:px-10 mt-10 items-center'>

                {/* <div className="left ">
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div> */}
                <div className="left w-full md:w-1/2 md:px-0">
                    <Lottie
                        options={defaultOptions}
                        isClickToPauseDisabled={true}
                        style={{
                            minWidth: '300px',
                            minHeight: '320px',
                            width: '100%',
                            maxWidth: '400px',
                            maxHeight: '500px',
                            margin: '0 auto'
                        }}
                    />
                </div>

                <div className="right pt-8 px-4">
                    <p className='text-gray-500 '>I am Muhammad Isnaan Ashraf, a Full Stack Developer specializing in the <span className='text-cyan-300 text-xl'>MERN Stack</span> . I build scalable, user-friendly web applications with <span className='text-cyan-300 text-xl'>TypeScript, React.js, Next.js, Node.js, Express.js, and MongoDB</span>, ensuring seamless performance and responsiveness.
                        With expertise in <span className='text-cyan-300 text-xl'>REST APIs, authentication, database management, and UI design</span>, I create efficient and maintainable solutions. Passionate about learning and problem-solving, I thrive in dynamic environments and enjoy collaborating on innovative projects.</p>
                    <Stack_icons />
                </div>
            </div>
        </div>
    )
}

export default About