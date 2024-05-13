import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";

export default function Education() {
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
          Education
        </h1>
        <div className="mt-5">
          {!showForm && (
            <div
              onClick={toggleForm}
              className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center mx-auto hover:border-green-600 cursor-pointer "
            >
              <FaPlus className="text-2xl text-blue-600 " />
              <h3>Add New Education</h3>
            </div>
          )}
        </div>
        {showForm && (
          <div className="mt-5">
            <form className="mt-5">
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="schoolName">
                  School<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. University of Colombo"
                  id="schoolName"
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
                  <label htmlFor="degreeStartDate">
                    Start Date<span className="text-red-600 text-2xl">*</span>
                  </label>
                  <input
                    type="month"
                    id="degreeStartDate"
                    className="p-1"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label htmlFor="degreeEndDate">
                    End Date<span className="text-red-600 text-2xl">*</span>
                  </label>
                  <input
                    type="month"
                    id="degreeEndDate"
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
                  defaultValue={3.54}
                  step="0.01"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="educationDescription">Description</label>
                <textarea
                  rows={4}
                  type="text"
                  id="educationDescription"
                  className="p-1"
                />
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
            <h2 className="font-semibold text-xl md:ml-10">Education History</h2>
          </div>
        )}
      </div>
    </div>
  );
}
