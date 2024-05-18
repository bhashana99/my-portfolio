import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    whatsapp: "",
  });

  const [initialFormData, setInitialFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const response = await fetch("/api/contactInfo/get-contactInfo");
      const data = await response.json();

      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
      setInitialFormData(data);
    };
    fetchContactInfo();
  }, []);

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

    const id = formData._id;

    try {
      const res = await fetch(`/api/contactInfo/update-contactInfo/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    
      });
      const data = await res.json();
      setLoading(false);

      if(data.success === false){
        setError(data.message);
      }
      await Toast.fire({
        icon: "success",
        title: "Updated Successfully!",
      });
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
          Contact Information
        </h1>
        <div className="mt-5 ">
          <form className="mt-5 " onSubmit={handleSubmit}>
            <div className="flex flex-row items-center gap-5 ">
              <FaPhoneAlt className="text-2xl " />
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="phone" className="font-semibold">
                  Phone
                </label>
                <input
                  onChange={handleChange}
                  type="tel"
                  id="phone"
                  className="p-1"
                  placeholder="e.g. +94769136107"
                  value={formData.phone}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 mt-5">
              <FaEnvelope className="text-2xl " />
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="email" className="font-semibold">
                  E-Mail
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  className="p-1"
                  placeholder="e.g. example@mail.com"
                  value={formData.email}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 mt-5">
              <FaWhatsapp className="text-2xl " />
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="whatsapp" className="font-semibold">
                  Whatsapp
                </label>
                <input
                  onChange={handleChange}
                  type="tel"
                  id="whatsapp"
                  className="p-1"
                  placeholder="e.g. +7611100025"
                  value={formData.whatsapp}
                />
              </div>
            </div>
            <button
              disabled={!isFormChanged}
              className={`mt-5 p-3 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 ${
                !isFormChanged ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Updating..." : "Update Contact Info"}
            </button>
            {error && <p className="text-red-700">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
