import React from 'react'

function Title({text}) {
    return (
        // <div>
        <>
        
            <h2 className='text-cyan-300 text-3xl text-center font-semibold mx-2'>{text}</h2>
            <div className="flex gap-x-2 justify-center items-center mt-6">
                <span className="left bg-cyan-300 w-2 h-2 transform rotate-45"></span>
                <div className="sm:w-1/3 w-[80vw] sm:h-2 h-1.5 bg-cyan-300 rounded-md relative px-2">
                    <span className="absolute border border-fuchsia-300 p-1 bg-[#050c2b] shadow-fuchsia-300 w-3 h-3 transform rotate-45 top-[-2px] left-1 animate-move"></span>
                </div>
                <span className="right bg-cyan-300 w-2 h-2 transform rotate-45"></span>
            </div>
            </>
        // </div>
    )
}

export default Title