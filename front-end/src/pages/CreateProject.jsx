import React from "react";
import Sidebar from "../components/Sidebar";

export default function CreateProject() {
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className="fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="flex-1 p-5  md:ml-52 ">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold ">
          Add New Project
        </h1>
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
          <button  className="mt-5 p-3 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Add Project
          </button>
        </form>
      </div>
    </div>
  );
}
