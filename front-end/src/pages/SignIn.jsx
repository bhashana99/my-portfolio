import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { signInStart,signInFailure,signInSuccess } from "../redux/user/userSlice";
import { useSelector } from "react-redux";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading,error} = useSelector(state=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   dispatch(signInStart());
    try {
      const res = await fetch("/api/user/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
     dispatch(signInSuccess(data));
    navigate("/edit");

    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

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
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
              disabled={loading}
              className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          {error && <p className="text-red-700 mt-5">{error}</p>}
        </div>
      </div>
    </div>
  );
}
