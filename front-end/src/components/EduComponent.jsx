import React, { useEffect, useState } from "react";
import eduImg from "../assets/eduImg1.png";
import { Link } from "react-router-dom";
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
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEducations();
  }, []);

  return (
    <div className=" justify-center mx-5">
      <h1 className="text-5xl font-bold font-mono text-center underline">
        Education
      </h1>
      <div className="grid md:grid-cols-2 items-center">
        <div className="">
          <img src={eduImg} alt="" className="" />
        </div>
        <div>
          {loading ?(
            <DotLoader
            className="text-black"/> 
          ):(
          
            <ul>
            {educations.map((education) => (
              <li
                key={education._id}
                className="border-dashed border-2 border-black bg-slate-200 mt-5 p-3 items-center gap-4 rounded-lg"
              >
                <div className="font-serif">
                  <p className="text-xl font-bold">{education.school}</p>
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
                  <p className="my-3 text-justify ">{education.description}</p>
                </div>
              </li>
            ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
