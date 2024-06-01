import React, { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";

export default function Main() {
  const [basicInfo, setBasicInfo] = useState({});

  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const res = await fetch("/api/basicInfo/get-basicInfo");
        const data = await res.json();
        // console.log(data);
        setBasicInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBasicInfo();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 flex md:items-center justify-center ">
      {basicInfo && (
        <div className="flex flex-col md:grid md:grid-cols-3 text-center  gap-10">
          <div className="">
            <img
              src={basicInfo.profileImage}
              alt="profile image"
              className="rounded-full h-80 w-80  object-cover self-center border-double border-blue-400 border-8"
            />
          </div>
          <div className="col-span-2 text-start">
            
              <p className="text-3xl font-semibold font-mono">Hi There,</p>
              <h1 className="mt-5 text-4xl font-bold font-mono tracking-widest  ">
                {"I'm "}
                {basicInfo.firstName} {basicInfo.lastName}
                {basicInfo.additionalName && (
                    <span className="text-sm"> {" ( "} {basicInfo.additionalName} {" ) "}</span>
                )}
              </h1>
              <p>{basicInfo.headline}</p>
              <p className="">{basicInfo.about}</p>
              <div className="flex flex-row items-center">
              <CiHome />
              <p>{basicInfo.city}{","}{basicInfo.country}</p>
              </div>
           
          </div>
        </div>
      )}
    </div>
  );
}
