import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Projects() {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [showProjectError, setShowProjectError] = useState(false);

  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    repoUrl: "",
    siteUrl: "",
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
      const res = await fetch("/api/project/create-project", {
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
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/project/get-projects");
        const data = await res.json();
        if (data.success === false) {
          setShowProjectError(data.message);
        } else {
          setProjects(data);
        }
      } catch (error) {
        setShowProjectError(true);
        console.log(showProjectError);
      }
    };

    fetchProjects();
  }, []);

  const handleDeleteProject = async (projectId) => {
    try {
      const res = await fetch(`/api/project/delete-project/${projectId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className="fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="p-5 flex-1 md:ml-52">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold ">
          Projects
        </h1>
        <div className="mt-5  ">
          {!showForm && (
            <div
              className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center mx-auto hover:border-green-600 "
              onClick={toggleForm}
            >
              <FaPlus className="text-2xl text-blue-600 " />
              <h3>Add New Project</h3>
            </div>
          )}
        </div>
        {showForm && (
          <div className="mt-5">
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="projectName">
                  Project Name<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Portfolio"
                  id="projectName"
                  className="p-1"
                  required
                  onChange={handleChange}
                  value={formData.projectName}
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="projectDescription">Description</label>
                <textarea
                  rows={4}
                  type="text"
                  placeholder="e.g. Portfolio"
                  id="projectDescription"
                  className="p-1"
                  onChange={handleChange}
                  value={formData.projectDescription}
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="repoUrl">GitHub repo link</label>
                <textarea
                  rows={2}
                  type="text"
                  id="repoUrl"
                  className="p-1"
                  value={formData.repoUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="siteUrl">App / Site Link</label>
                <textarea
                  rows={2}
                  type="text"
                  id="siteUrl"
                  className="p-1"
                  value={formData.siteUrl}
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
                    {loading ? "Creating..." : "Add Project"}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-700">{error}</p>}
            </form>
          </div>
        )}
        {!showForm && projects && projects.length > 0 && (
          <div className="mt-5">
            <h2 className="font-semibold text-xl md:ml-10">Recent Projects</h2>
            {projects.map((project) => (
              <div
                key={project._id}
                className="mt-5 border rounded-lg p-3 flex justify-between items-center gap-4"
              >
             
                <p>{project.projectName}</p>

                <div className="flex flex-col items-center">
                  <button
                    onClick={() => {
                      handleDeleteProject(project._id);
                    }}
                    className="text-red-700 uppercase"
                  >
                    delete
                  </button>

                  <Link to={`/edit-project/${project._id}`}>
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
