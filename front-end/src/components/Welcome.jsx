import React, { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";

export default function Main() {
  const [basicInfo, setBasicInfo] = useState({});
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-col md:grid md:grid-cols-3 text-center gap-10">
          <div>
            <img
              src={basicInfo.profileImage}
              alt="profile image"
              className="rounded-full h-80 w-80 object-cover self-center border-double border-blue-400 border-8"
            />
          </div>
          <div className="col-span-2 text-start">
            <p className="text-3xl font-semibold font-mono">Hi There,</p>
            <h1 className="mt-5 text-4xl font-bold font-mono tracking-widest">
              {"I'm "} {basicInfo.firstName} {basicInfo.lastName}
              {basicInfo.additionalName && (
                <span className="text-sm">
                  {" ( "} {basicInfo.additionalName} {" ) "}
                </span>
              )}
            </h1>
            <p>{basicInfo.headline}</p>
            <p>{basicInfo.about}</p>
            <div className="flex flex-row items-center">
              <CiHome />
              <p>
                {basicInfo.city}, {basicInfo.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
