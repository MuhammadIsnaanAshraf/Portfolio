import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./App.css";
import Qualification from "./Pages/Qualification";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProjects from "./Pages/AllProjects";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseNavbar = () => setIsOpen(false);

  return (
    <div>
      <div className="relative h-full w-full bg-slate-950">
        <div className=" absolute bottom-0 left-0 right-0 top-0 max-h-[300vh] pointer-events-none  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleCloseNavbar={handleCloseNavbar}
        />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{
            background: '#020618',
            color: '#e6ffff',
            border: '1px solid rgba(56,189,248,0.12)',
            boxShadow: '0 6px 18px rgba(2,6,24,0.6)'
          }}
          progressStyle={{ background: '#06b6d4' }}
        />

        <Routes>
          <Route path="/" element={<Home isOpen={isOpen} />} />
          <Route path="/projects" element={<AllProjects />} />
          {/* <Route path="/all-projects" element={< />} /> */}
        </Routes>
        {/* <About />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Qualification />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Services />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Projects />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Contact />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Footer /> */}
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Footer />

      </div>
    </div>
  );
}

export default App;
