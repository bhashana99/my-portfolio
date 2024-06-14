import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { IoIosSettings } from "react-icons/io";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [basicInfo, setBasicInfo] = useState({});
  const [showMenu, setShowMenu] = useState(true);

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const res = await fetch("/api/basicInfo/get-basicInfo");
        const data = await res.json();
        setBasicInfo(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBasicInfo();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <header className="bg-blue-800 shadow-md w-full fixed md:py-2 py-1">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-yellow-300" id="brandName-show">
              {basicInfo.brandName}
            </span>
          </h1>
        </Link>

        <ul className="flex gap-4 font-mono  text-blue-200 ">
          <Link to="#welcomeCom">
            <li
              className={`hidden sm:inline hover:text-blue-400 ${
                location.hash === "#welcomeCom" ? "underline" : ""
              }`}
            >
              Home
            </li>
          </Link>

          <Link to="#eduCom">
            <li
              className={`hidden sm:inline  hover:text-blue-400 ${
                location.hash === "#eduCom" ? "underline" : ""
              } `}
            >
              Education
            </li>
          </Link>
          <Link to="#exeCom">
            <li
              className={`hidden sm:inline hover:text-blue-400 ${
                location.hash === "#exeCom" ? "underline" : ""
              } `}
            >
              Experience
            </li>
          </Link>
          <Link to="#projectCom">
            <li
              className={`hidden sm:inline hover:text-blue-400 ${
                location.hash === "#projectCom" ? "underline" : ""
              }`}
            >
              projects
            </li>
          </Link>
          <Link to="#certificateCom">
            <li
              className={`hidden sm:inline hover:text-blue-400 ${
                location.hash === "#certificateCom" ? "underline" : ""
              }`}
            >
              Certificate
            </li>
          </Link>
          <Link to="#contactCom">
            <li
              className={`hidden sm:inline  hover:text-blue-400 ${
                location.hash === "#contactCom" ? "underline" : ""
              } `}
            >
              Contact
            </li>
          </Link>
          {currentUser ? (
            <Link to="/edit">
              <IoIosSettings className="text-2xl hidden sm:inline" />
            </Link>
          ) : (
            ""
          )}
        </ul>
        <div onClick={handleMenu} className="block md:hidden">
          {!showMenu ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>

        <div
          className={
            !showMenu
              ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-blue-900  bg-blue-800 ease-in-out duration-500 "
              : "fixed left-[-100%] "
          }
        >
          <Link to="/">
            <h1 className="font-bold py-4 ml-5 ">
              <span className="text-yellow-300" id="brandName-show">
                {basicInfo.brandName}
              </span>
            </h1>
          </Link>
          <ul className=" text-blue-200 pt-10 font-bold ">
            <Link to="#welcomeCom" onClick={handleClick}>
              <li className="p-3 border-b border-blue-600">Home</li>
            </Link>

            <Link to="#eduCom" onClick={handleClick}>
              <li className="p-3 border-b border-blue-600">Education</li>
            </Link>
            <Link to="#exeCom" onClick={handleClick}>
              <li className="p-3 border-b border-blue-600">Experience</li>
            </Link>
            <Link to="#projectCom" onClick={handleClick}>
              <li className="p-3 border-b border-blue-600">projects</li>
            </Link>
            <Link to="#certificateCom" onClick={handleClick}>
              <li className="p-3 border-b border-blue-600">Certificate</li>
            </Link>
            <Link to="#contactCom" onClick={handleClick}>
              <li className="p-3 border-b border-blue-600">Contact</li>
            </Link>
            {currentUser ? (
              <Link to="/edit">
                <li className="p-3 border-b border-blue-600 text-red-500">
                  Edit Page
                </li>
              </Link>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
