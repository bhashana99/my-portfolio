import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Setting() {
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
          Account Setting
        </h1>
        {!showForm && (
          <div className="mt-5">
            <div className="flex justify-center mt-5">
              <div className="flex flex-row gap-2 mt-5">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value="bnn"
                  id="username"
                  className="p-1 pl-4 mx-10 bg-slate-500"
                  disabled
                />
              </div>
            </div>
            <p
              className="text-center text-blue-600 mt-8 cursor-pointer"
              onClick={toggleForm}
            >
              Change Password
            </p>
          </div>
        )}
{
  showForm && (
<h1 className="text-start justify-center text-xl md:mx-10 mt-5  font-semibold ">
          Change Password
        </h1>
  )
}

{showForm && (
  
        <div className="mt-5 flex justify-center">
          <form className="w-full max-w-md">
            <div className="flex flex-col justify-center  ">
              <div className="flex flex-row gap-2 mt-5 ">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="text"
                  id="currentPassword"
                  className="p-1 mx-10 "
                  required
                />
              </div>

              <div className="flex flex-row gap-2 mt-5 ">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="text"
                  id="newPassword"
                  className="p-1 mx-10 "
                  minLength={5}
                  required
                />
              </div>
              <div className="flex flex-row gap-2 mt-5 ">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  id="confirmPassword"
                  className="p-1 mx-10 "
                  minLength={5}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-center">
              <div>
                <button
                  onClick={toggleForm}
                  className="mt-5 p-3 px-10 bg-white border-black w-full text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                  Back
                </button>
              </div>
              <div>
                <button
                
                  onClick={handleAddButton}
                  className="mt-5 p-3 px-10 bg-green-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
)}
        
      </div>
    </div>
  );
}
