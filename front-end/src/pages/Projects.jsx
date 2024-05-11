import React from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
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
          <Link to="/create-project">
            <div className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center mx-auto hover:border-green-600 ">
              <FaPlus className="text-2xl text-blue-600 " />
              <h3>Add New Project</h3>
            </div>
          </Link>

          <div className="mt-5">
            <h2 className="font-semibold text-xl md:ml-10">Recent Projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
