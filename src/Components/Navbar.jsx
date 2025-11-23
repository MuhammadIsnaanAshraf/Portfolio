// import React from "react";
// import assests from "../assets/assests";
// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <div className="flex justify-between py-3 px-20 bg-gray-950">
//       <div className="left flex gap-x-1 items-center">
//         <div className="logo">
//           <img src={assests.logo} alt="Name Logo" className="w-8 h-8" />
//         </div>
//         <div className="name text-xl font-bold text-cyan-300">
//           <i>Isnaan Ashraf</i>
//         </div>
//       </div>
//       <div className="right">
//         <ul className="flex flex-col md:flex-row gap-x-8 py-2 items-center text-cyan-300">
//           <div className="relative flex flex-col  items-center group box-border cursor-pointer">
//             <Link to="/" className="text-lg">
//               Home
//             </Link>
//             <span className=" absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5 "></span>
//           </div>

//           <div className=" relative flex flex-col justify-center items-center group box-border cursor-pointer">
//             <Link to="/about" className="text-lg">
//               About
//             </Link>
//             <span className=" absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5 "></span>
//           </div>
//           <div className="relative flex flex-col justify-center items-center group box-border cursor-pointer">
//             <Link to="/experience" className="text-lg">
//               Experience
//             </Link>
//             <span className=" absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5 "></span>
//           </div>
//           <div className="relative flex flex-col justify-center items-center group box-border cursor-pointer">
//             <Link to="/projects" className="text-lg">
//               Projects
//             </Link>
//             <span className=" absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5 "></span>
//           </div>
//           <div className="relative flex flex-col justify-center items-center group box-border cursor-pointer">
//             <Link to="/contact" className="text-lg">
//               Contact US
//             </Link>
//             <span className=" absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5 "></span>
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

import { useNavigate, useLocation } from "react-router-dom";
function Navbar({ isOpen, setIsOpen, handleCloseNavbar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    // handleCloseNavbar();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleSectionClick = (hash) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      window.location.hash = hash;
    }
  };
  return (
    <div className="relative  flex justify-between py-3 px-4 md:px-10 lg:px-20 bg-gray-950 z-50 sticky top-0">
      <div className="left flex gap-x-1 items-center">
        <div className="logo">
          <img src={assets.logo} alt="Name Logo" className="w-8 h-8" />
        </div>
        <div className="name text-xl font-bold text-cyan-300">
          <i>Isnaan Ashraf</i>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-cyan-300 focus:outline-none cursor-pointer"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`right ${
          isOpen ? "block" : "hidden"
        } md:block absolute md:relative top-10  left-0 w-full md:w-auto bg-gray-950 md:top-0`}
      >
        <ul className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-8 py-4 md:py-2 items-center text-cyan-300">
          {/* Home */}
          <div className="relative flex flex-col items-center group box-border cursor-pointer">
            <button
              className="text-lg bg-transparent border-none outline-none cursor-pointer"
              onClick={() => window.location.href = "/"}
            >
              Home
            </button>
            <span className="absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5"></span>
          </div>

          {/* About */}
          <div className="relative flex flex-col items-center group box-border cursor-pointer">
            <button
              className="text-lg bg-transparent border-none outline-none cursor-pointer"
              onClick={() => handleSectionClick("#about")}
            >
              About
            </button>
            <span className="absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5"></span>
          </div>

          {/* Experience */}
          <div className="relative flex flex-col items-center group box-border cursor-pointer">
            <button
              className="text-lg bg-transparent border-none outline-none cursor-pointer"
              onClick={() => handleSectionClick("#experience")}
            >
              Experience
            </button>
            <span className="absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5"></span>
          </div>

          {/* Projects (leave as Link) */}
          <div className="relative flex flex-col items-center group box-border cursor-pointer">
            <Link
              to="/projects"
              className="text-lg"
              onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Projects
            </Link>
            <span className="absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5"></span>
          </div>

          {/* Contact */}
          <div className="relative flex flex-col items-center group box-border cursor-pointer">
            <button
              className="text-lg bg-transparent border-none outline-none cursor-pointer"
              onClick={() => handleSectionClick("#contact")}
            >
              Contact US
            </button>
            <span className="absolute bottom-[-3px] w-1 h-1 rounded-full bg-cyan-300 group-hover:w-full transition-all duration-300 group-hover:rounded-none group-hover:h-0.5"></span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
