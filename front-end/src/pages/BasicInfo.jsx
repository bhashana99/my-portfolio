import React from "react";
import Sidebar from "../components/Sidebar";

export default function BasicInfo() {
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className="fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="p-5 flex-1 md:ml-52">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold ">
          Basic Info
        </h1>
        <form>
          <div className="flex flex-col md:flex-row md:gap-5 ">
            <div className="flex-1">
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="firstName">
                  First Name <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kasun "
                  className="p-1 w-full"
                  id="firstName"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="lastName">
                  Last Name <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kalhara"
                  className="p-1 w-full"
                  id="lastName"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="additionalName">Additional name</label>
                <input
                  type="text"
                  placeholder=""
                  className="p-1 w-full"
                  id="additionalName"
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="headline">
                  Headline <span className="text-red-600 text-2xl">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="e.g. Software Engineer | Web Developer | UI/UX Designer"
                  className="p-1 w-full"
                  id="headline"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="about">
                  About <span className="text-red-600 text-2xl">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="e.g. I am a software engineer who loves to code and learn new technologies."
                  className="p-3  w-full"
                  id="about"
                  rows={3}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="position">
                  Current Position{" "}
                  <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. undergraduate student Software Engineer "
                  className="p-1 w-full"
                  id="position"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  placeholder="e.g. Google Inc"
                  className="p-1 w-full"
                  id="company"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="uni">
                  University / College{" "}
                  <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. University of Kelaniya"
                  className="p-1 w-full"
                  id="uni"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="country">
                  Country/Region<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sri Lanka"
                  className="p-1 w-full"
                  id="country"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  placeholder="e.g. Colombo"
                  className="p-1 w-full mb-3"
                  id="city"
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="profileImage">
                  Profile Image<span className="text-red-600 text-2xl">*</span>
                </label>
                <div className="flex flex-row">
                  <input
                    type="file"
                    accept="image/*"
                    className="p-1 "
                    id="profileImage"
                    required
                  />
                  <button
                    type="button"
                    className="py-1 px-3  text-white border bg-green-700 rounded "
                  >
                    Upload
                  </button>
                </div>
                <button  className="mt-5 p-3 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update Basic Info
          </button>
              </div>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}
