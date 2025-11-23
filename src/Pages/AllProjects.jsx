import React from "react";
import { useState, useEffect } from "react";
import Title from "../Components/Title";
import assets from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { ProjectDetailModal } from "../Model/ProjectDetailModal";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
function AllProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState(null);
  const projects = [
    {
      title: "Brands Meet Creators",
      category: "Web Development",
      description: "A comprehensive TikTok marketing platform featuring dedicated portals for Content Creators, Brand Partners, Marketing Agencies, and Administrative Management. The platform streamlines collaboration and campaign management in the digital marketing ecosystem",
      // created: "5 Dec 2020",
      technologies: [ 
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "BootStrap",
      ],
      role: "Full Stack",
      viewUrl: "https://brandsmeetcreators.com/",
      images: assets.bmc,
    },
    {
      title: "E-Commerce Website",
      category: "Web Development",
      description: "A fully functional, responsive MERN stack application featuring the MVC architecture and REST APIs, with secure login, signup, and logout features using JWT STRIPE integration for payment.",
      // created: "5 Dec 2020",
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind",
      ],
      role: "Full Stack",
      viewUrl: "https://mern-e-commerce-website-1k23.vercel.app",
      images: assets.Mern_Ecommerce,
    },
    {
      title: "Daily Logs Website",
      category: "Web Development",
      description: "A productivity website for recording and reviewing daily activities of employees and progress with user authentication, persistent storage, and search/filter capabilities.",
      // created: "4 Dec 2020",
      technologies: ["React", "Express", "MongoDB", "Tailwind", "JavaScript"],
      role: "Full Stack",
      viewUrl: "https://password-manager-ruddy.vercel.app/",
      images: assets.dailyLogs,
    },
    {
      title: "Password Manager",
      category: "Web Development",
      description: "A credential manager that stores and retrieves user passwords, CRUD operations, and a responsive interface for managing accounts.",
      // created: "4 Dec 2020",
      technologies: ["React", "Express", "MongoDB", "Tailwind", "JavaScript"],
      role: "Full Stack",
      viewUrl: "https://password-manager-ruddy.vercel.app/",
      images: assets.Password_Manager,
    },
    {
      title: "Admin dashboard", 
      category: "Web Development",
      description: "An administrative interface providing user management, Blogs and FAQs, and CRUD controls for application data, with role-based access and responsive layout.",
      // created: "4 Dec 2020",
      technologies: ["React", "Express", "MongoDB", "Tailwind", "JavaScript"],
      role: "Full Stack",
      viewUrl: "https://password-manager-ruddy.vercel.app/",
      images: assets.Dashbone,
    },
    // removed placeholder sample project
    {
      title: "Wanderlust APP",
      category: "Web Development",
      description: "A travel discovery application showcasing destinations, search and filter features, and detailed destination pages to help users explore and plan trips.",
      // created: "5 Dec 2020",
      technologies: [ "Express", "MongoDB", "Bootstrap", "JavaScript"],
      role: "Full Stack",
      viewUrl: "www.domain.com",
      images: assets.Wanderlust,
    },
    {
      title: "Weather App",
      category: "Web Development",
      description: "A responsive weather application that consumes a public API to display current conditions  with intuitive visual indicators.",
      // created: "5 Dec 2020",
      technologies: ["React", "Tailwind", "JavaScript"],
      role: "Full Stack",
      viewUrl: "www.domain.com",
      images: assets.Weather_app,
    },
    {
      title: "Simmon Game",
      category: "Web Development",
      description: "A browser-based memory game inspired by Simon, featuring progressive levels, responsive controls, and score tracking to challenge users' recall skills.",
      // created: "5 Dec 2020",
      technologies: ["JavaScript", "HTML", "CSS"],
      role: "Full Stack",
      viewUrl: "https://simmon-says-game.netlify.app/",
      images: assets.simmon,
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      description: "A responsive restaurant landing site showcasing menu items, reservation CTAs, contact details, and visual highlights to attract customers.",
      // created: "5 Dec 2020",
      technologies: ["JavaScript", "HTML", "CSS"],
      role: "Full Stack",
      viewUrl: "https://hotelandrestuarent.netlify.app/",
      images: assets.Restraunt_Site,
    },
    {
      title: "Education Website",
      category: "Web Development",
      description: "A front-end for an educational platform featuring course listings, and contact interfaces for students.",
      // created: "5 Dec 2020",
      technologies: ["JavaScript", "HTML", "CSS"],
      role: "Full Stack",
      viewUrl: "https://soft-cendol-869b5e.netlify.app/",
      images: assets.Education_Site,
    },
    {
      title: "E-Commerce Frontend",
      category: "Web Development",
      description: "A responsive e-commerce frontend demo with product listings, product detail views, and a cart UI demonstrating responsive layout and interaction patterns.",
      // created: "5 Dec 2020",
      technologies: ["JavaScript", "HTML", "CSS"],
      role: "Full Stack",
      viewUrl: "https://muhammadisnaanashraf.github.io/Ecommerce-website/",
      images: assets.ECommerce_Frontend,
    },
  ];

  return (
    <>
      <div className={`min-h-[100vh] py-10  ${isOpen && " overflow-y-hidden"}`}>
        {/* <div> */}
        <Title text="My Projects" />
        {/* <div> */}
        <div className="flex sm:flex-row flex-col items-stretch justify-center gap-y-8 md:gap-x-16 sm:gap-x-8 gap-x-4 mt-22 w-full mx-auto flex-wrap">
          {projects.map((project, index) => (
            <>
              <div
                key={index}
                className="box-border flex flex-col gap-y-1 border shadow shadow-cyan-300 sm:w-1/3 sm:mx-0 mx-6 bg-gray-900 p-4 rounded-sm h-full"
              >
                <div className="image w-full h-48 sm:h-56 md:h-64 rounded-sm overflow-hidden">
                  <img
                    src={project.images}
                    alt={project.title}
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <h3 className="text-cyan-300 text-lg font-medium mt-2 mb-2">
                  {/* Project Name */}
                  {project.title}
                </h3>
                <div
                  onClick={() => setIsOpen(true)}
                  className="flex items-center justify-center gap-x-2 text-cyan-300 cursor-pointer hover:gap-x-2  hover:transition-all  hover:duration-300"
                >
                  <p
                    onClick={() => {
                      setIsOpen(true), setProject(project);
                    }}
                    className="cursor-pointer mb-2"
                  >
                    Demo
                  </p>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </div>
              </div>
            </>
          ))}
        </div>
        {/* {projects.length > 4 && (
          <div className="text-center mt-10">
            <Link to="/projects">
            <Button text="See More" />
            </Link>
          </div>
        )} */}
      </div>

      {isOpen && (
        <ProjectDetailModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          project={project}
        />
      )}
    </>
  );
}

export default AllProjects;
