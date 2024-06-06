import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaMedium, FaStackOverflow } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Main() {
  const [basicInfo, setBasicInfo] = useState({});
  const [socialMedia, setSocialMedia] = useState({});
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const res = await fetch("/api/basicInfo/get-basicInfo");
        const data = await res.json();
        setBasicInfo(data);
        fetchSocialMedia();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSocialMedia = async () => {
      try {
        const res = await fetch("/api/socialMedia/get-socialMedia");
        const data = await res.json();

        setSocialMedia(data);
        // console.log(socialMedia.linkedin.link)
      } catch (error) {
        console.log(error);
      }
    };

    fetchBasicInfo();
  }, []);

  const skillsArray = basicInfo.skills ? basicInfo.skills.split(",") : [];

  return (
    <div className="min-h-screen  flex items-center justify-center ">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <div
            className={`flex flex-col md:grid md:grid-cols-3 text-center ${
              isExpanded ? "mt-20" : "mt-0"
            } md:mt-0 `}
          >
            <div className="flex justify-center">
              <img
                src={basicInfo.profileImage}
                alt="profile image"
                className="rounded-full h-52 w-52 md:h-80 md:w-80 object-cover self-center border-double border-blue-600 border-8"
              />
            </div>
            <div className="col-span-2 text-start md:mx-0 mx-5">
              <p className="text-xl md:text-3xl font-semibold font-mono mt-3 md:mt-0 text-center md:text-start ">
                Hi There,
              </p>
              <h1 className="mt-5 text-xl md:text-4xl font-bold font-mono tracking-widest">
                {"I'm "}{" "}
                <span className="text-red-700 text-xl md:text-5xl">
                  {basicInfo.firstName}
                </span>{" "}
                {basicInfo.lastName}
                {basicInfo.additionalName && (
                  <span className="text-xs">
                    {" ( "} {basicInfo.additionalName} {" ) "}
                  </span>
                )}
              </h1>
              <p className="mt-2 font-sans text-sm">{basicInfo.headline}</p>
              <p
                className={`mt-3 text-justify italic md:mr-20 max-w-3xl tracking-tight md:tracking-wide font-light ${
                  isExpanded ? "" : "line-clamp-4 md:line-clamp-none"
                }`}
              >
                {basicInfo.about}
              </p>
              <button
                className="mt-2 text-blue-500 underline md:hidden"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
              {/* <div className="flex flex-row items-end  mt-5">
                <IoLocationOutline className="text-2xl text-blue-800" />
                <p className="font-thin">
                  {basicInfo.city},{" "}
                  <span className="font-medium text-green-800">
                    {basicInfo.country}
                  </span>
                </p>
              </div> */}
              {basicInfo.skills && (
                <div className="flex flex-col items-start mt-5">
                  <p className="font-thin mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {skillsArray.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {basicInfo.cvUrl && (
                <div className="mt-10 text-center md:text-start">
                  <a
                    href={basicInfo.cvUrl}
                    download
                    target="_blank"
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Download My CV
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className=" flex flex-row  justify-center gap-2 md:absolute md:bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 mt-5 md:mt-0">
            {socialMedia.linkedin && socialMedia.linkedin.link && (
              <a href={socialMedia.linkedin.link}>
                <FaLinkedin className="text-blue-800 text-3xl" />
              </a>
            )}
            {socialMedia.github && socialMedia.github.link && (
              <a href={socialMedia.github.link} target="_blank">
                <FaGithubSquare className="text-3xl" />
              </a>
            )}
            {socialMedia.stackOverflow && socialMedia.stackOverflow.link && (
              <a href={socialMedia.stackOverflow.link} target="_blank">
                <FaStackOverflow className="text-3xl bg-orange-500 text-white" />
              </a>
            )}
            {socialMedia.x && socialMedia.x.link && (
              <a href={socialMedia.x.link} target="_blank">
                <FaSquareXTwitter className="text-3xl" />
              </a>
            )}
            {socialMedia.medium && socialMedia.medium.link && (
              <a href={socialMedia.medium.link} target="_blank">
                <FaMedium className="text-3xl" />
              </a>
            )}

            {socialMedia.instagram && socialMedia.instagram.link && (
              <a href={socialMedia.instagram.link} target="_blank">
                <FaInstagram className="text-orange-600 text-3xl" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
