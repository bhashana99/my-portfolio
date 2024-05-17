import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import {
  changePasswordStart,
  changePasswordSuccess,
  changePasswordFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Setting() {
  const {currentUser,loading,error} = useSelector((state) => state.user);
  const [showForm, setShowForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddButton = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return dispatch(changePasswordFailure("Password does not match!"));
    }
    dispatch(changePasswordStart());
    try {
      const res = await fetch(`api/user/change-password/${currentUser.username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(changePasswordFailure(data.message));
        return;
      }
      dispatch(changePasswordSuccess());
      setShowForm(!showForm);
      Toast.fire({
        icon: "success",
        title: "Password Changed in successful"
      });
    } catch (error) {
      dispatch(changePasswordFailure(error.message));
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
          Account Setting
        </h1>
        {!showForm && (
          <div className="mt-5">
            <div className="flex justify-center mt-5">
              <div className="flex flex-row gap-2 mt-5">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value={currentUser.username}
                  id="username"
                  className="p-1 pl-4 mx-10 bg-slate-500"
                  disabled
                />
              </div>
            </div>
            <p
              className="text-center text-blue-600 mt-8 cursor-pointer"
              onClick={toggleForm}
            >
              Change Password
            </p>
          </div>
        )}
        {showForm && (
          <h1 className="text-start justify-center text-xl md:mx-10 mt-5  font-semibold ">
            Change Password
          </h1>
        )}

        {showForm && (
          <div className="mt-5 flex justify-center">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center  ">
                <div className="flex flex-row gap-2 mt-5 ">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="p-1 mx-10 "
                    required
                    onChange={(e) => {
                      setCurrentPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-row gap-2 mt-5 ">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    className="p-1 mx-10 "
                    minLength={5}
                    required
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-row gap-2 mt-5 ">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="p-1 mx-10 "
                    minLength={5}
                    required
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              {error && <p className="text-red-700 mt-5">{error}</p>}
              <div className="flex flex-row gap-2 justify-center">
                <div>
                  <button
                    onClick={toggleForm}
                    className="mt-5 p-3 px-10 bg-white border-black w-full text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                  >
                    Back
                  </button>
                </div>
                <div>
                  <button
                  disabled={loading}
                  type="submit"
                    className="mt-5 p-3 px-10 bg-green-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                  >
                    {loading ? "Loading.." : "Change Password"}
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
