import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div className="bg-zinc-600 min-h-screen flex justify-center items-center ">
      <div className="max-w-4xl mx-auto w-full px-5">
        <div>
          <Link to="/" className="flex flex-row  items-center ">
            <IoIosArrowBack className="text-black text-xl" />
            <h2 className="font-bold ">Back to Home Page</h2>
          </Link>
        </div>
        <div>
          <h1 className="text-center text-2xl md:text-4xl mt-6">Sign In </h1>
        </div>
        <div className="max-w-md mx-auto mt-5">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="username"
              className="border p-3 rounded-lg bg-transparent"
              id="username"
              onChange={handleChange}
            />
            <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg bg-transparent"
            id="password"
            onChange={handleChange}
           
          />
          <button
            type="submit"
            className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            Sign In
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
