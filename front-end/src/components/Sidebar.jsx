import React from "react";
import { VscSignOut } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  signOutStart,
  signOutFailure,
  signOutSuccess,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = async () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          dispatch(signOutStart());
          const res = await fetch("/api/user/sign-out");
          const data = await res.json();
          if (data.success === false) {
            dispatch(signOutFailure(data.message));
            Swal.fire({
              title: "Error",
              text: data.message,
              icon: "error",
            });
            return;
          }
          dispatch(signOutSuccess(data));
          Swal.fire({
            title: "Sign out!",
            text: "You have signed out successfully.",
            icon: "success",
          });
          navigate("/");
        } catch (error) {
          dispatch(signOutFailure(error.message));
          Swal.fire({
            title: "Error",
            text: error.message,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="flex flex-row ">
      <div
        className={
          !showMenu ? "bg-gray-800 text-white p-5 min-h-screen" : "hidden"
        }
      >
        <div className="flex flex-row gap-3 ">
          <MdOutlineDashboardCustomize className="text-2xl" />
          <h1>Customize Portfolio</h1>
        </div>
        <div>
          <ul className="mt-5 ">
            <Link to="/basic-info">
              <li className="py-2 border-b border-b-gray-600">Basic Info</li>
            </Link>
            <Link to="/social-media">
              <li className="py-2 border-b border-b-gray-600">Social Media</li>
            </Link>
            <Link to="/projects">
              <li className="py-2 border-b border-b-gray-600">Projects</li>
            </Link>
            <Link to="/education">
              <li className="py-2 border-b border-b-gray-600">Education</li>
            </Link>
            <Link to="/certificate">
              <li className="py-2 border-b border-b-gray-600">Certificate</li>
            </Link>
            <Link to="/experience">
              <li className="py-2 border-b border-b-gray-600">
                Work Experience
              </li>
            </Link>
            <Link to="/contact">
              <li className="py-2">Contact</li>
            </Link>
            <Link to="/">
              {" "}
              <li className="py-2 flex flex-row items-center gap-2 text-green-600">
                <VscSignOut /> Back to Portfolio
              </li>
            </Link>
            <Link to="/setting">
              {" "}
              <li className="py-2 flex flex-row items-center gap-2 text-green-600">
                <IoSettingsOutline /> Settings
              </li>
            </Link>

            <li
              className="py-2 flex flex-row items-center gap-2 text-red-600 cursor-pointer"
              onClick={handleSignOut}
            >
              <VscSignOut /> Sign Out
            </li>
          </ul>
        </div>
      </div>
      <div onClick={handleMenu} className="md:hidden sm:grid">
        {!showMenu ? (
          <FaArrowRightArrowLeft className="text-2xl text-gray-800 mt-2" />
        ) : (
          <FaArrowRightArrowLeft className="text-2xl text-gray-800 m-5" />
        )}
      </div>
    </div>
  );
}
