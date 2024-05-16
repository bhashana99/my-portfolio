import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";

export default function Experience() {
  const [showForm, setShowForm] = useState(false);
  const [isCurrentJob, setIsCurrentJob] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddButton = () => {
    setShowForm(!showForm);
  };

  const handleCurrentJob = (e) => {
    setIsCurrentJob(e.target.checked);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className="fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="p-5 flex-1 md:ml-52">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold ">
          Work Experience
        </h1>
        <div className="mt-5">
          {!showForm && (
            <div
              onClick={toggleForm}
              className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center mx-auto hover:border-green-600 cursor-pointer "
            >
              <FaPlus className="text-2xl text-blue-600 " />
              <h3>Add New Experience</h3>
            </div>
          )}
        </div>
        {showForm && (
          <div className="mt-5">
            <form className="mt-5">
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="jobTitle">
                  Title<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineer"
                  id="jobTitle"
                  className="p-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="employmentType">
                  Employment type
                  <span className="text-red-600 text-2xl">*</span>
                </label>
                <select className="p-1" id="employmentType">
                  <option value="">Please select</option>
                  <option value="fullTime">Full-time </option>
                  <option value="partTime">Part-time</option>
                  <option value="selfEmployed">Self-employed</option>
                  <option value="freelance">Freelance</option>
                  <option value="">Contract</option>
                  <option value="internship">Internship</option>
                  <option value="apprenticeship">Apprenticeship</option>
                  <option value="seasonal">Seasonal</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="companyName">
                  Company Name<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Google"
                  id="companyName"
                  className="p-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="companyLocation">
                  Company Location
                  <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Colombo, Sri Lanka"
                  id="companyLocation"
                  className="p-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="companyLocation">
                  Location Type<span className="text-red-600 text-2xl">*</span>
                </label>
                <select className="p-1" id="companyLocation">
                  <option value="">Please select</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">On-site</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <div className="flex flex-row gap-2 mt-5 items-center">
                  <input
                    type="checkbox"
                    name="currentJob"
                    id="currentJob"
                    className="h-4 w-4"
                    onChange={handleCurrentJob}
                  />
                  <label htmlFor="currentJob">
                    I am currently working in this role
                  </label>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-2 mt-5">
                  <label htmlFor="jobStartDate">
                    Start Date<span className="text-red-600 text-2xl">*</span>
                  </label>
                  <input
                    type="month"
                    id="jobStartDate"
                    className="p-1"
                    required
                  />
                </div>
                {!isCurrentJob && (
                  <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="jobEndDate">
                      End Date<span className="text-red-600 text-2xl">*</span>
                    </label>
                    <input
                      type="month"
                      id="jobEndDate"
                      className="p-1"
                      required
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="jobDescription">Description</label>
                <textarea
                  rows={4}
                  type="text"
                  id="jobDescription"
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
            <h2 className="font-semibold text-xl md:ml-10">
              Recent Add Experience
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
