import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Certificate() {
  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [showCertificatesError, setShowCertificatesError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    issuingOrganization: "",
    issueDate: "",
    credentialId: "",
    credentialUrl: "",
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
      const res = await fetch("/api/certificate/create-certificate", {
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
    const fetchCertificates = async () => {
      try {
        const res = await fetch("/api/certificate/get-certificates");
        const data = await res.json();
        if (data.success === false) {
          setShowCertificatesError(data.message);
        } else {
          setCertificates(data);
        }
      } catch (error) {
        setShowCertificatesError(true);
        console.log(showEducationsError);
      }
    };
    fetchCertificates();
  }, []);

  const handleDeleteCertificate = async (id) => {
    try {
      const res = await fetch(`/api/certificate/delete-certificate/${id}`, {
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
          Certificate
        </h1>
        <div className="mt-5">
          {!showForm && (
            <div
              onClick={toggleForm}
              className="max-w-72 flex flex-row gap-5 border-dashed border-2 border-indigo-600 p-2  justify-center mx-auto hover:border-green-600 cursor-pointer "
            >
              <FaPlus className="text-2xl text-blue-600 " />
              <h3>Add New Certificate</h3>
            </div>
          )}
        </div>
        {showForm && (
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
                    type="date"
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
                    className="mt-5 p-3 px-16 bg-green-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                  >
                    {loading ? "Adding..." : "Add"}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-700">{error}</p>}
            </form>
          </div>
        )}
        {!showForm && certificates && certificates.length > 0 && (
          <div className="mt-5">
            <h2 className="font-semibold text-xl md:ml-10">
              Recent Add Certificates
            </h2>
            {certificates.map((certificate) => (
              <div
                key={certificate._id}
                className="mt-5 border rounded-lg p-3 flex justify-between items-center gap-4"
              >
                <div>
                  <p className="text-2xl font-bold">{certificate.name}</p>
                  <p className="font-semibold">
                    {certificate.issuingOrganization}
                  </p>
                  {certificate.credentialId && (
                    <p>Credential ID {" "}
                       <span className="text-red-400">{certificate.credentialId}</span>
                    </p>
                  )}

                  <p>
                    {new Date(certificate.issueDate).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long" }
                    )}{" "}
                  </p>
                  {certificate.credentialUrl && (
                    <Link to={certificate.credentialUrl} >
                      <p className="text-blue-400 underline">View Certificate</p>
                      </Link>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  <button 
                  onClick={() => handleDeleteCertificate(certificate._id)}
                  className="text-red-700 uppercase">delete</button>

                  <Link to={`/edit-certificate/${certificate._id}`}>
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
