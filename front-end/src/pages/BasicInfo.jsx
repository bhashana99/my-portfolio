import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";

import { set } from "mongoose";
import Swal from "sweetalert2";

export default function BasicInfo() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
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
    firstName: "",
    lastName: "",
    additionalName: "",
    headline: "",
    about: "",
    country: "",
    profileImage:
      "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
    city: "",
  });

  const [initialFormData, setInitialFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  // console.log(formData);
  useEffect(() => {
    const fetchBasicInfo = async () => {
      const res = await fetch("/api/basicInfo/get-basicInfo");
      const data = await res.json();

      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
      setInitialFormData(data);
    };
    fetchBasicInfo();

    if (file) {
      handleImageUpload(file);
    }
  }, [file]);

  useEffect(() => {
    const hasFormChanged =
      JSON.stringify(formData) !== JSON.stringify(initialFormData);
    setIsFormChanged(hasFormChanged);
  }, [formData, initialFormData]);

  const handleImageUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.error("Upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setFormData({ ...formData, profileImage: downloadURL });
            setFilePerc(0);
          })
          .catch((error) => {
            setFileUploadError(true);
            console.error("Download URL error:", error);
          });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const id = formData._id;
    try {
      const res = await fetch(`/api/basicInfo/update-basicInfo/${id}`, {
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
          Basic Info
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:gap-5 ">
            <div className="flex-1">
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="firstName">
                  First Name <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kasun "
                  className="p-1 w-full"
                  id="firstName"
                  required
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="lastName">
                  Last Name <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kalhara"
                  className="p-1 w-full"
                  id="lastName"
                  required
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="additionalName">Additional name</label>
                <input
                  type="text"
                  placeholder=""
                  className="p-1 w-full"
                  id="additionalName"
                  onChange={handleChange}
                  value={formData.additionalName}
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="brandName">
                  Brand Name <span className="text-red-600 text-2xl">*</span> (This will show top of Header)
                </label>
                <input
                  type="text"
                  
                  className="p-1 w-full"
                  id="brandName"
                  required
                  onChange={handleChange}
                  value={formData.brandName}
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="headline">
                  Headline <span className="text-red-600 text-2xl">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="e.g. Software Engineer | Web Developer | UI/UX Designer"
                  className="p-1 w-full"
                  id="headline"
                  required
                  onChange={handleChange}
                  value={formData.headline}
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="about">
                  About <span className="text-red-600 text-2xl">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="e.g. I am a software engineer who loves to code and learn new technologies."
                  className="p-3  w-full"
                  id="about"
                  rows={3}
                  required
                  onChange={handleChange}
                  value={formData.about}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="country">
                  Country/Region<span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sri Lanka"
                  className="p-1 w-full"
                  id="country"
                  required
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  placeholder="e.g. Colombo"
                  className="p-1 w-full mb-3"
                  id="city"
                  onChange={handleChange}
                  value={formData.city}
                />
              </div>
              <div className="flex flex-col gap-2 items-start my-2">
                <label htmlFor="profileImage">
                  Profile Image<span className="text-red-600 text-2xl">*</span>
                </label>

                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  accept="image/.*"
                  className="p-1 "
                  id="profileImage"
                  ref={fileRef}
                  hidden
                />
                <img
                  onClick={() => fileRef.current.click()}
                  src={formData.profileImage}
                  alt="profile-Image"
                  className="rounded-full w-32 h-32 object-cover cursor-pointer self-center"
                />
                <p className="text-sm self-center">
                  {fileUploadError ? (
                    <span className="text-red-700">
                      Error Image Upload (image must be less than 20 MB)
                    </span>
                  ) : filePerc > 0 && filePerc < 100 ? (
                    <span className="text-black">Uploading {filePerc}%</span>
                  ) : filePerc === 100 ? (
                    <span className="text-green-700">
                      Image successfully uploaded!
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                <button
                  disabled={!isFormChanged}
                  className={`mt-5 p-3 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 ${
                    !isFormChanged ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Updating..." : "Update Basic Info"}
                  
                </button>
              </div>
              {error && <p className="text-red-700">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
