import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Certificate() {
  const [showForm, setShowForm] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [initialFormData, setInitialFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    issuingOrganization: "",
    issueDate: "",
    credentialId: "",
    credentialUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchCertificate = async () => {
      const certificateId = params.certificateId;
      const res = await fetch(`/api/certificate/get-certificate/${certificateId}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      const formattedData = {
        ...data,
        issueDate: new Date(data.issueDate).toISOString().substring(0, 7),
        
      };

      setFormData(formattedData);
      setInitialFormData(formattedData);
    };

    fetchCertificate();
  }, [params.certificateId]);

  useEffect(() => {
    const hasFormChanged =
      JSON.stringify(formData) !== JSON.stringify(initialFormData);
    setIsFormChanged(hasFormChanged);
  }, [formData, initialFormData]);


  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className="fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="p-5 flex-1 md:ml-52">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold ">
          Edit Certificate
        </h1>

        <div className="mt-5">
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="name">
                Name<span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. AWS Cloud Practitioner Essentials"
                id="name"
                className="p-1"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="issuingOrganization">
                Issuing organization{" "}
                <span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Amazon Web Services (AWS)"
                id="issuingOrganization"
                className="p-1"
                required
                value={formData.issuingOrganization}
                onChange={handleChange}
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
                  onChange={handleChange}
                  value={formData.issueDate}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="credentialId">Credential ID</label>
              <input
                type="text"
                id="credentialId"
                className="p-1"
                onChange={handleChange}
                value={formData.credentialId}
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="credentialUrl">Credential URL</label>
              <textarea
                rows={2}
                type="text"
                id="credentialUrl"
                className="p-1"
                onChange={handleChange}
                value={formData.credentialUrl}
              />
            </div>
            <div className="flex flex-row gap-2 justify-end">
              <div>
                <Link to="/certificate">
                  <button className="mt-5 p-3 bg-white border-black w-full text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                    Back
                  </button>
                </Link>
              </div>
              <div>
                <button
                  disabled={loading || !isFormChanged}
                  className="mt-5 p-3 px-16 bg-green-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                  {loading ? "Adding..." : "Add"}
                </button>
              </div>
            </div>
            {error && <p className="text-red-700">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
