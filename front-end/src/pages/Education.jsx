import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Education() {
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



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/education/create-education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        window.location.reload();
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await fetch("/api/education/get-educations");
        const data = await res.json();
        if (data.success === false) {
          setShowEducationsError(data.message);
        } else {
          setEducations(data);
        }
      } catch (error) {
        setShowEducationsError(true);
        console.log(showEducationsError);
      }
    };
    fetchEducations();
}, []);

const handleDeleteEducation = async (id) => {
    try {
      const res = await fetch(`/api/education/delete-education/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        
      } else {
        setLoading(false)
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
     
    }
}

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
                  onChange={handleChange}
                  value={formData.school}
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
                  value={formData.degreeName}
                  onChange={handleChange}
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
                    value={formData.startDate}
                    onChange={handleChange}
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
                    value={formData.endDate}
                    onChange={handleChange}
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
                  value={formData.gpa}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="description">Description</label>
                <textarea
                  rows={4}
                  type="text"
                  id="description"
                  className="p-1"
                  value={formData.description}
                  onChange={handleChange}
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
                  disabled={loading}
                  className="mt-5 p-3 bg-green-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                  >
                    {loading ? "Creating..." : "Add Education"}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-700">{error}</p>}
            </form>
          </div>
        )}
        {!showForm && educations && educations.length > 0 && (
          <div className="mt-5">
            <h2 className="font-semibold text-xl md:ml-10">
              Education History
            </h2>
            {educations.map((education) => (
              <div
              key={education._id}
              className="mt-5 border rounded-lg p-3 flex justify-between items-center gap-4"
            >
              <div>
              <p className="text-2xl font-bold">{education.school}</p>
              <p className="font-semibold">{education.degreeName}</p>
              {education.gpa && <p>GPA: <span className="text-red-400">{education.gpa}</span></p>}
              
              
              <p>{new Date(education.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} - {new Date(education.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
              <p className="my-3">{education.description}</p>
   </div>
              
              <div className="flex flex-col items-center">
                <button onClick={()=>{handleDeleteEducation(education._id)}}  className="text-red-700 uppercase">delete</button>

              <Link  >
                <button className="text-green-700 uppercase">edit</button>
                </Link>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
