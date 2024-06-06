import React from "react";
import Sidebar from "../components/Sidebar";
import { CiSettings } from "react-icons/ci";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Edit() {
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* side bar */}
      <div className="fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      {/* welcome */}
      <div className="flex-1 flex items-center justify-center h-screen md:left-[-30%]">
        <div className="flex flex-col items-center">
          <CiSettings className="text-5xl mb-5 " />
          <h1 className="font-bold font-serif">Hey..Welcome..!</h1>
          <h1 className="mb-5">Let's Customize portfolio</h1>
          <ul className="md:hidden sm:grid">
            <Link to="/basic-info">
              <li className="mt-5 flex flex-row gap-4 font-semibold items-center">
                <FaHandPointRight className="text-xl" />
                Basic Info
              </li>
            </Link>
            <Link to="/social-media">
              <li className="mt-5 flex flex-row gap-4 font-semibold items-center">
                <FaHandPointRight className="text-xl" />
                Social Media
              </li>
            </Link>
            <Link to="/projects">
              <li className="mt-5 flex flex-row gap-4 font-semibold items-center">
                <FaHandPointRight className="text-xl" />
                Projects
              </li>
            </Link>
            <Link to="/education">
              <li className="mt-5 flex flex-row gap-4 font-semibold items-center">
                <FaHandPointRight className="text-xl" />
                Education
              </li>
            </Link>
            <Link to="/certificate">
              <li className="mt-5 flex flex-row gap-4 font-semibold items-center">
                <FaHandPointRight className="text-xl" />
                Certificate
              </li>
            </Link>
            <Link to="/experience">
              <li className="mt-5 flex flex-row gap-4 font-semibold items-center">
                <FaHandPointRight className="text-xl" />
                Work Experience
              </li>
            </Link>
            <Link to="/contact">
              <li className="mt-5 flex flex-row gap-4 font-semibold items-center">
                <FaHandPointRight className="text-xl" />
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
