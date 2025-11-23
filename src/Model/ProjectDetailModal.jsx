import React, { useState } from "react";
import { X } from 'lucide-react';
import assets from "../assets/assets";

export const ProjectDetailModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;
  console.log("project", project);
  const projectData = project;
  // || defaultProject;

  return (
    <div className="fixed inset-0 bg-black/50 flex sm:items-center items-start justify-center z-50 p-4">
      <div className="my-8 bg-gray-900 rounded-lg w-full max-w-6xl max-h-[90vh] relative border shadow-neutral-400 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 mr-4 text-white hover:text-cyan-300 transition-colors z-10"
        >
          <X />
        </button>

        <div className="h-full flex">
          <div className="flex flex-col md:flex-row h-full w-full">
            {/* Left Side - Images */}
            <div className="md:w-1/2 p-6 flex flex-col">
              <div
                className="flex-1 rounded-lg overflow-hidden bg-gray-800 bg-center bg-cover"
                style={{ backgroundImage: `url(${projectData.images})` }}
                role="img"
                aria-label={`Preview of ${projectData.title}`}
              />
            </div>

            {/* Right Side - Project Details */}
            <div className="md:w-1/2 p-6 text-white overflow-y-auto">
              <div className="space-y-4">
                {/* Category */}
                {/* <div className="text-cyan-300 text-sm font-medium">
                  {projectData.category}
                </div> */}

                {/* Title */}
                <h2 className="text-2xl font-bold text-white">
                  {projectData.title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {projectData.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3 pt-4">
                  {/* <div className="flex">
                    <span className="text-gray-400 w-24">Created</span>
                    <span className="text-white">- {projectData.created}</span>
                  </div> */}

                  <div className="flex">
                    <span className="text-gray-400 w-24">Technologies</span>
                    <span className="text-white">
                      - {projectData.technologies.join(", ")}
                    </span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-400 w-24">Role</span>
                    <span className="text-white">- {projectData.role}</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-400 w-24">View</span>
                    <a
                      href={`${projectData.viewUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:ransition-colors"
                    >
                      - {projectData.viewUrl}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// // Example usage component
