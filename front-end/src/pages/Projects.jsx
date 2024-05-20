import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";

export default function Projects() {
  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState([]);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [showProjectError, setShowProjectError] = useState(false);

  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    imageUrls: [],
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    if (file.length > 0 && file.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < file.length; i++) {
        promises.push(storeImage(file[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((error) => {
          setImageUploadError("Image upload failed (20 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per project");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
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
      if (formData.imageUrls.length < 1) {
        return setError("You need to upload at least one image");
      }

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
      if(data.success === false){
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
                <label htmlFor="images">
                  Images:
                  <span className="font-normal text-pink-600 ml-2">
                    The first image will be the cover (max 6)
                  </span>
                </label>
                <div className="flex gap-4">
                  <input
                    onChange={(e) => setFile(e.target.files)}
                    className="p-3 border border-gray-300 rounded w-full"
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                  />
                  <button
                    disabled={uploading}
                    type="button"
                    onClick={handleImageSubmit}
                    className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
                  >
                    {uploading ? "Uploading..." : "Upload"}
                  </button>
                </div>
                <p className="text-red-700">
                  {imageUploadError && imageUploadError}
                </p>
                {formData.imageUrls.length > 0 &&
                  formData.imageUrls.map((url, index) => (
                    <div
                      key={url}
                      className="flex justify-between p-3 border items-center"
                    >
                      <img
                        src={url}
                        alt="project image"
                        className="w-20 h-20 object-contain rounded-lg"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        type="button"
                        className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
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
                    disabled={loading || uploading}
                    className="mt-5 p-3 bg-green-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                  >
                    {loading ? "Creating..." : "Add Project"}
                  </button>
                </div>
              </div>
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
                <img
                  src={project.imageUrls[0]}
                  alt="project cover"
                  className="h-16 w-16 object-contain "
                />
                <p>{project.projectName}</p>

                <div className="flex flex-col items-center">
                  <button onClick={()=>{handleDeleteProject(project._id)}} className="text-red-700 uppercase">delete</button>

                  <button className="text-green-700 uppercase">edit</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
