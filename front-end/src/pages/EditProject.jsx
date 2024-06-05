import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function Projects() {
  const [file, setFile] = useState([]);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    repoUrl: "",
    siteUrl: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [initialFormData, setInitialFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      const projectId = params.projectId;
      const res = await fetch(`/api/project/get-project/${projectId}`);
      const data = await res.json();

      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
      setInitialFormData(data);
    };

    fetchProject();
  }, [params.projectId]);

  useEffect(() => {
    const hasFormChanged =
      JSON.stringify(formData) !== JSON.stringify(initialFormData);
    setIsFormChanged(hasFormChanged);
  }, [formData, initialFormData]);

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
      const res = await fetch(
        `/api/project/update-project/${params.projectId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        navigate("/projects");
      }
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
          Edit Project
        </h1>

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
                value={formData.projectName}
                onChange={handleChange}
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
                value={formData.projectDescription}
                onChange={handleChange}
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
                <Link to="/projects">
                  <button className="mt-5 p-3 bg-white border-black w-full text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                    Back
                  </button>
                </Link>
              </div>

              <div>
                <button
                  disabled={loading || !isFormChanged}
                  className={`mt-5 p-3 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 ${
                    !isFormChanged ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Updating..." : "Update project"}
                </button>
              </div>
              {error && <p className="text-red-700">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
