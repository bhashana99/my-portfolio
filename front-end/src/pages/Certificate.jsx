import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";

export default function Certificate() {
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
          Certificate
        </h1>
        <div className="mt-5">
          {!showForm && (
            <div
              onClick={toggleForm}
              className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center mx-auto hover:border-green-600 cursor-pointer "
            >
              <FaPlus className="text-2xl text-blue-600 " />
              <h3>Add New Certificate</h3>
            </div>
          )}
        </div>
        {showForm && (
          <div className="mt-5">
            <form className="mt-5">
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="certificateName">
                  Name<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. AWS Cloud Practitioner Essentials"
                  id="certificateName"
                  className="p-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="issueOrganization">
                Issuing organization <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Amazon Web Services (AWS)"
                  id="issueOrganization"
                  className="p-1"
                  required
                />
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-2 mt-5">
                  <label htmlFor="issueDate">
                    Issue Date<span className="text-red-600 text-2xl">*</span>
                  </label>
                  <input
                    type="month"
                    id="issueDate"
                    className="p-1"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label htmlFor="expirationDate">
                  Expiration date<span className="text-gray-300 text-2xl ">*</span>
                  </label>
                  <input
                    type="month"
                    id="expirationDate"
                    className="p-1"
                    
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="credentialId">Credential ID</label>
                <input
                  type="text"
                  id="credentialId"
                  className="p-1"
                 
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="credentialUrl">Credential URL</label>
                <textarea
                  rows={2}
                  type="text"
                  id="credentialUrl"
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
              Recent Add Certificates
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
