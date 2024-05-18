import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaLinkedin, FaStackOverflow, FaInstagram } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter, FaMedium } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function SocialMedia() {
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
    linkedin: {
      username: "",
      link: "",
    },
    x: {
      username: "",
      link: "",
    },
    medium: {
      username: "",
      link: "",
    },
    github: {
      username: "",
      link: "",
    },
    stackOverflow: {
      username: "",
      link: "",
    },
    instagram: {
      username: "",
      link: "",
    },
  });

  const [initialFormData, setInitialFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      const res = await fetch("/api/socialMedia/get-socialMedia");
      const data = await res.json();

      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
      setInitialFormData(data);
    };

    fetchSocialMedia();
  }, []);

  useEffect(() => {
    const hasFormChanged =
      JSON.stringify(formData) !== JSON.stringify(initialFormData);
    setIsFormChanged(hasFormChanged);
  }, [formData, initialFormData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const [key, field] = id.split("-");
    setFormData({
      ...formData,
      [key]: {
        ...formData[key],
        [field]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const id = formData._id;

    try {
      const res = await fetch(`api/socialMedia/update-socialMedia/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data);
      if (data.success === false) {
        setError(data.message);
      }
      setLoading(false);
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
      <div className=" fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="p-5 flex-1 md:ml-52">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold mb-5  ">
          Social Media
        </h1>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <div className="  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">Linkedin</h2>
                  <FaLinkedin className="text-2xl text-blue-600" />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="linkedin-username" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="linkedin-username"
                      value={formData.linkedin.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="linkedin-link" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      className="p-1 w-full"
                      placeholder="e.g. www.linkedin.com"
                      id="linkedin-link"
                      cols={2}
                      value={formData.linkedin.link}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">X</h2>
                  <FaSquareXTwitter className="text-2xl" />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="x-username" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="x-username"
                      value={formData.x.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="xLink" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      className="p-1 w-full"
                      placeholder="e.g. www.x.com"
                      id="x-link"
                      cols={2}
                      value={formData.x.link}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">Medium</h2>
                  <FaMedium className="text-2xl" />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="medium-username" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="medium-username"
                      value={formData.medium.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="medium-link" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      className="p-1 w-full"
                      placeholder="e.g. www.medium.com"
                      id="medium-link"
                      cols={2}
                      value={formData.medium.link}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-1  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">GitHub</h2>
                  <FaSquareGithub className="text-2xl text-black" />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="github-username" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="github-username"
                      value={formData.github.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="github-link" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      className="p-1 w-full"
                      placeholder="e.g. www.github.com"
                      id="github-link"
                      cols={2}
                      value={formData.github.link}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="flex-1  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">Stack Overflow</h2>
                  <FaStackOverflow className="text-2xl " />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="stackOverflow-username" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="stackOverflow-username"
                      value={formData.stackOverflow.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="stackOverflow-link" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      className="p-1 w-full"
                      placeholder="e.g. www.stackoverflow.com"
                      id="stackOverflow-link"
                      cols={2}
                      value={formData.stackOverflow.link}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1  border-solid border-2 p-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">Instagram</h2>
                  <FaInstagram className="text-2xl text-orange-600 " />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="instagram-username" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="instagram-username"
                      value={formData.instagram.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="instagram-link" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      className="p-1 w-full"
                      placeholder="e.g. www.instagram.com"
                      id="instagram-link"
                      cols={2}
                      value={formData.instagram.link}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            disabled={!isFormChanged}
            className={`mt-5 p-3 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 ${
              !isFormChanged ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
           {loading ? "Updating..." : "Update Social Media Info"}
           
          </button>
          {error && <p className="text-red-700">{error}</p>}
        </form>
      </div>
    </div>
  );
}
