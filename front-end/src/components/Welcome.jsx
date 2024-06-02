import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaMedium, FaStackOverflow } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

export default function Main() {
  const [basicInfo, setBasicInfo] = useState({});
  const [socialMedia, setSocialMedia] = useState({});
  const [loading, setLoading] = useState(true);

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

  
  return (
    <div className="h-screen  flex items-center justify-center">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col md:grid md:grid-cols-3 text-center  ">
            <div className="flex justify-center">
              <img
                src={basicInfo.profileImage}
                alt="profile image"
                className="rounded-full h-80 w-80 object-cover self-center border-double border-blue-600 border-8"
              />
            </div>
            <div className="col-span-2 text-start">
              <p className="text-3xl font-semibold font-mono">Hi There,</p>
              <h1 className="mt-5 text-4xl font-bold font-mono tracking-widest">
                {"I'm "}{" "}
                <span className="text-red-700 text-5xl">
                  {basicInfo.firstName}
                </span>{" "}
                {basicInfo.lastName}
                {basicInfo.additionalName && (
                  <span className="text-sm">
                    {" ( "} {basicInfo.additionalName} {" ) "}
                  </span>
                )}
              </h1>
              <p className="mt-2 font-sans">{basicInfo.headline}</p>
              <p className="mt-3 text-justify italic md:mr-20  max-w-3xl tracking-wide font-light">
                {basicInfo.about}
              </p>
              {/* <div className="flex flex-row items-end  mt-5">
                <IoLocationOutline className="text-2xl text-blue-800" />
                <p className="font-thin">
                  {basicInfo.city},{" "}
                  <span className="font-medium text-green-800">
                    {basicInfo.country}
                  </span>
                </p>
              </div> */}
              {basicInfo.cvUrl && (
                <div className="mt-10">
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
          <div className=" flex flex-row  justify-center gap-2 md:absolute md:bottom-10 left-1/2 transform -translate-x-1/2">
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
