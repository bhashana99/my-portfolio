import React, { useEffect, useState } from "react";
import exImg from "../assets/experienceImg.png";
import DotLoader from "react-spinners/DotLoader";

export default function EduComponent() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch("/api/work/get-works");
        const data = await res.json();
        setWorks(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-5xl mt-5 mx-5">
        <h1 className="text-2xl md:text-5xl font-bold font-mono text-center underline">
          Experience
        </h1>
        <div className="grid md:grid-cols-2 items-center mt-5 gap-8">
          <div className="flex justify-center">
            <img src={exImg} alt="Experience" className="w-full max-w-sm" />
          </div>
          <div className="flex flex-col items-center">
            {loading ? (
              <DotLoader color="#000000" />
            ) : (
              <ul className="w-full">
                {works.map((work) => (
                  <li
                    key={work._id}
                    className="bg-slate-200 mt-5 p-3 items-center gap-4 rounded-lg"
                  >
                    <div className="font-serif">
                      <p className="text-lg md:text-xl font-bold">{work.title}</p>
                      <p className="font-medium">
                        {work.companyName} {" - "} {work.employmentType} {" ("}
                        {work.locationType}
                        {")"}
                      </p>
                      <p>
                        {new Date(work.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}{" "}
                        -{" "}
                        {work.currentlyWorking
                          ? "Present"
                          : new Date(work.endDate).toLocaleDateString(
                              "en-US",
                              { year: "numeric", month: "long" }
                            )}
                      </p>
                      <p>{work.companyLocation}</p>
                      {work.description && (
                        <p className="my-3 text-justify">{work.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
