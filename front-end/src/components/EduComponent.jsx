import React, { useEffect, useState } from "react";
import eduImg from "../assets/eduImg1.png";
import DotLoader from "react-spinners/DotLoader";

export default function EduComponent() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await fetch("/api/education/get-educations");
        const data = await res.json();
        setEducations(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEducations();
  }, []);

  return (
    <>
    {educations.length > 0 && (
    <div className="flex justify-center items-center min-h-screen"  id="eduCom" >
      <div className="w-full max-w-5xl mt-5 mx-5">
        <h1 className="text-2xl md:text-5xl font-bold font-mono text-center underline">
          Education
        </h1>
        <div className="grid md:grid-cols-2 items-center mt-5 gap-8">
          <div className="flex justify-center">
            <img src={eduImg} alt="Education" className="w-full max-w-sm" />
          </div>
          <div className="flex flex-col items-center">
            {loading ? (
              <DotLoader color="#000000" />
            ) : (
              <ul className="w-full">
                {educations.map((education) => (
                  <li
                    key={education._id}
                    className="border-2 border-blue-200 bg-blue-50 mt-5 p-3 items-center gap-4 rounded-xl text-left"
                  >
                    <div className="font-sans">
                      <p className="text-lg md:text-xl font-bold">{education.school}</p>
                      <p className="font-medium">{education.degreeName}</p>
                      {education.gpa && (
                        <p>
                          GPA: <span className="text-red-400">{education.gpa}</span>
                        </p>
                      )}
                      <p>
                        {new Date(education.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}{" "}
                        -{" "}
                        {new Date(education.endDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </p>
                      <p className="my-3 text-justify">{education.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}
