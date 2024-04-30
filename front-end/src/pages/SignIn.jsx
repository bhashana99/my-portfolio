import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      navigate("/");

    } catch (error) {

      setLoading(false);
      setError(error.message);
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
