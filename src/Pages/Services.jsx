import React from 'react'
import Title from '../Components/Title'
import assets from '../assets/assets'

function Services() {
    return (
        <div className='min-h-[95vh] py-10'>
            <Title text="Services" />
            <div className='flex flex-row flex-wrap justify-center gap-8 gap-y-14 mt-16 px-4 w-full max-w-7xl mx-auto'>
                {/* Service Cards with consistent widths */}
                <div className="flex flex-col w-[94%] sm:w-[calc(40%-1rem)] lg:w-[calc(25%-1rem)] border shadow shadow-cyan-300 rounded-sm p-4 relative">
                    <div className="icon absolute top-[-25px] left-[calc(50%-1.75rem)] rounded-full w-14 h-14 border border-cyan-300">
                        <img src={assets.website} alt="Image" className='rounded-full p-1 bg-white' />
                    </div>
                    <div className="content mt-10 flex flex-col gap-y-2">
                        <h3 className="font-semibold text-lg mb-1 text-cyan-300 text-center">FRONTEND DEVELOPMENT</h3>
                        <p className="text-gray-400 text-center">Building sleek, responsive, and user-focused web interfaces with modern frontend technologies."
Let me know if you'd like a version focused on freelance work, agency collaboration, or corporate hiring</p>
                    </div>
                </div>

                {/* Copy the same structure for other cards with different titles */}
                <div className="flex flex-col w-[94%] sm:w-[calc(40%-1rem)] lg:w-[calc(25%-1rem)] border shadow shadow-cyan-300 rounded-sm p-4 relative">
                    {/* Same structure, different title */}
                    <div className="icon absolute top-[-25px] left-[calc(50%-1.75rem)] rounded-full w-14 h-14 border border-cyan-300">
                        <img src={assets.MERN} alt="Image" className='rounded-full p-1 bg-white' />
                    </div>
                    <div className="content mt-10 flex flex-col gap-y-2">
                        <h3 className="font-semibold text-lg mb-1 text-cyan-300 text-center">BACKEND DEVELOPMENT</h3>
                        <p className="text-gray-400 text-center">Developing robust, scalable, and secure server-side solutions to power seamless web experiences.
Let me know if you want a version tailored for API integration, database management, or full-stack projects.</p>
                    </div>
                </div>

                {/* Repeat for WEB CONSULTANT and MERN STACK DEVELOPMENT */}
                <div className="flex flex-col w-[94%] sm:w-[calc(40%-1rem)] lg:w-[calc(25%-1rem)] border shadow shadow-cyan-300 rounded-sm p-4 relative">
                    <div className="icon absolute top-[-25px] left-[calc(50%-1.75rem)] rounded-full w-14 h-14 border border-cyan-300">
                        <img src={assets.consultant} alt="Image" className='rounded-full p-1 bg-white' />
                    </div>
                    <div className="content mt-10 flex flex-col gap-y-2">
                        <h3 className="font-semibold text-lg mb-1 text-cyan-300 text-center">WEB CONSULTANT</h3>
                        <p className="text-gray-400 text-center">Providing strategic guidance to optimize web performance, UX, and technology choices for impactful digital solutions..</p>
                    </div>
                </div>
                <div className="flex flex-col w-[94%] sm:w-[calc(40%-1rem)] lg:w-[calc(25%-1rem)] border shadow shadow-cyan-300 rounded-sm p-4 relative">
                    <div className="icon absolute top-[-25px] left-[calc(50%-1.75rem)] rounded-full w-14 h-14 border border-cyan-300">
                        <img src={assets.website} alt="Image" className='rounded-full p-1 bg-white' />
                    </div>
                    <div className="content mt-10 flex flex-col gap-y-2">
                        <h3 className="font-semibold text-lg mb-1 text-cyan-300 text-center">MERN STACK DEVELOPMENT</h3>
                        <p className="text-gray-400 text-center">Delivering full-stack web solutions with MongoDB, Express, React, and Node.js—fast, scalable, and built end-to-end.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services