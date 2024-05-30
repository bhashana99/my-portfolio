import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EditEducation() {
    const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [educations, setEducations] = useState([]);
  const [showEducationsError, setShowEducationsError] = useState(false);

  const [formData, setFormData] = useState({
    school: "",
    degreeName: "",
    startDate: "",
    endDate: "",
    gpa: "",
    description: "",
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {}

  const handleSubmit = async (e) => {};


  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
    {/* sidebar */}
    <div className="fixed top-0 left-0 h-full w-auto">
      <Sidebar />
    </div>
    <div className="p-5 flex-1 md:ml-52">
      <h1 className="text-center justify-center text-xl md:text-3xl font-bold ">
        Edit Education
      </h1>
        <div className="mt-5">
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="school">
                School<span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. University of Colombo"
                id="school"
                className="p-1"
                required
                
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="degreeName">
                Degree Name<span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Software Engineering BSc (Hons) "
                id="degreeName"
                className="p-1"
                required
                
              />
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="startDate">
                  Start Date<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="month"
                  id="startDate"
                  className="p-1"
                  required
                  
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="endDate">
                  End Date<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="month"
                  id="endDate"
                  className="p-1"
                  required
                  
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="gpa">GPA</label>
              <input
                type="number"
                id="gpa"
                className="p-1"
                min="1.00"
                max="4.00"
              
                step="0.01"
                
              
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="description">Description</label>
              <textarea
                rows={4}
                type="text"
                id="description"
                className="p-1"
                
              />
            </div>
            <div className="flex flex-row gap-2 justify-end">
              <div>
                <Link to="/education">
                <button
                
                  className="mt-5 p-3 bg-white border-black w-full text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                  Back
                </button>
                </Link>
              </div>
              <div>
                <button
                disabled={loading}
                className="mt-5 p-3 px-16 bg-green-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                  {loading ? "Editing..." : "Edit"}
                </button>
              </div>
            </div>
            {error && <p className="text-red-700">{error}</p>}
          </form>
        </div>
      
      
    </div>
  </div>
  )
}
