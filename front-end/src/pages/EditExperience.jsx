import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { Link,useNavigate,useParams } from "react-router-dom"; 

export default function Experience() {
  const [showForm, setShowForm] = useState(false);
  const [isCurrentJob, setIsCurrentJob] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  

  const [initialFormData, setInitialFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  const params = useParams();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    title: "",
    employmentType: "",
    companyName: "",
    companyLocation: "",
    locationType: "",
    currentlyWorking: false,
    startDate: "",
    endDate: "",
    description: "",
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const fetchWork = async () => {
      const Id = params.workId;
      const res = await fetch(`/api/work/get-work/${Id}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      const formattedData = {
        ...data,
        startDate: new Date(data.startDate).toISOString().substring(0, 7),
        endDate: new Date(data.endDate).toISOString().substring(0, 7),
      };

      setFormData(formattedData);
      setInitialFormData(formattedData);
    };

    fetchWork();
  }, [params.workId]);

  const handleCurrentJob = (e) => {
    setIsCurrentJob(e.target.checked);
    const { checked } = e.target;
    setFormData({
      ...formData,
      currentlyWorking: checked,
      endDate: checked ? "" : formData.endDate,
    });
  };

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

  const handleValidation = () => {
    const today = new Date().toISOString().split("T")[0];
    if (formData.startDate > today) {
      return "Start date cannot be a future date.";
    }
    if (
      !formData.currentlyWorking &&
      (formData.endDate > today || formData.endDate < formData.startDate)
    ) {
      return "End date cannot be a future date or before the start date.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = handleValidation();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(false);
    try {
        const res = await fetch(`/api/work/update-work/${params.workId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        
          })
    
          const data = await res.json();
          setLoading(false);
          if (data.success === false) {
            setError(data.message);
          } else {
            navigate("/experience");
          }
    } catch (error) {
      setError(true);
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
          Edit Work Experience
        </h1>
        
    
          <div className="mt-5">
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="title">
                  Title<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineer"
                  id="title"
                  className="p-1"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="employmentType">
                  Employment type
                  <span className="text-red-600 text-2xl">*</span>
                </label>
                <select
                  className="p-1"
                  id="employmentType"
                  onChange={handleChange}
                  value={formData.employmentType}
                >
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
                  value={formData.companyName}
                  onChange={handleChange}
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
                  value={formData.companyLocation}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="locationType">
                  Location Type<span className="text-red-600 text-2xl">*</span>
                </label>
                <select
                  className="p-1"
                  id="locationType"
                  value={formData.locationType}
                  onChange={handleChange}
                >
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
                    checked={formData.currentlyWorking}
                  />
                  <label htmlFor="currentJob">
                    I am currently working in this role
                  </label>
                </div>
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
                {!isCurrentJob && (
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
                )}
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
              {error && <p className="text-red-700">{error}</p>}
              <div className="flex flex-row gap-2 justify-end">
                <div>
                    <Link to="/experience" >
                  <button
                    
                    className="mt-5 p-3 bg-white border-black w-full text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                  >
                    Back
                  </button>
                  </Link>
                </div>
                <div>
                  <button
                    disabled={loading || !isFormChanged}
                    className={`mt-5 p-3 px-16 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 ${
                        !isFormChanged ? "opacity-50 cursor-not-allowed" : ""
                      }`}   >
                    {loading ? "Updating..." : "Edit Experience"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        
        
      </div>
    </div>
  );
}
