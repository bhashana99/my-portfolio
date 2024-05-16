import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";

export default function Projects() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddButton = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className="fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="p-5 flex-1 md:ml-52">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold ">
          Projects
        </h1>
        <div className="mt-5  ">
          {!showForm && (
            <div
              className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center mx-auto hover:border-green-600 "
              onClick={toggleForm}
            >
              <FaPlus className="text-2xl text-blue-600 " />
              <h3>Add New Project</h3>
            </div>
          )}
        </div>
        {showForm && (
        <div className="mt-5">
          <form className="mt-5">
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="projectName">
                Project Name<span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Portfolio"
                id="projectName"
                className="p-1"
                required
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="projectDescription">Description</label>
              <textarea
                rows={4}
                type="text"
                placeholder="e.g. Portfolio"
                id="projectDescription"
                className="p-1"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="projectDescription">
                Images:
                <span className="font-normal text-pink-600 ml-2">
                  The first image will be the cover (max 6)
                </span>
              </label>
              <div className="flex gap-4">
                <input
                  className="p-3 border border-gray-300 rounded w-full"
                  type="file"
                  id="images"
                  accept="image/*"
                  multiple
                />
                <button
                  type="button"
                  className=" px-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg "
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-end">
              <div>
                <button
                  onClick={toggleForm}
                  className="mt-5 p-3 bg-white border-black w-full text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  onClick={handleAddButton}
                  className="mt-5 p-3 bg-green-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
        )}
         {!showForm && (
        <div className="mt-5">
          <h2 className="font-semibold text-xl md:ml-10">Recent Projects</h2>
        </div>
         )}
      </div>
    </div>
  );
}
