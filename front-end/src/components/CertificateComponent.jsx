import React, { useEffect, useState } from "react";
import cImg from "../assets/certificateImg.png";
import DotLoader from "react-spinners/DotLoader";

export default function EduComponent() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch("/api/certificate/get-certificates");
        const data = await res.json();
        setCertificates(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <>
      {certificates.length > 0 && (
        <div
          className="flex justify-center items-center min-h-screen"
          id="certificateCom"
        >
          <div className="w-full max-w-5xl mt-5 mx-5">
            <h1 className="text-2xl md:text-5xl font-bold font-mono text-center underline">
              Certificate
            </h1>
            <div className="grid md:grid-cols-2 items-center mt-5 gap-8">
              <div className="flex justify-center">
                <img src={cImg} alt="certificate" className="w-full max-w-sm" />
              </div>
              <div className="flex flex-col items-center">
                {loading ? (
                  <DotLoader color="#000000" />
                ) : (
                  <ul className="w-full">
                    {certificates.map((certificate) => (
                      <li
                        key={certificate._id}
                        className="bg-blue-100  mt-5 p-3 items-center gap-4 rounded-lg"
                      >
                        <div className="font-sans">
                          {certificate.credentialUrl &&
                          certificates.length < 4 ? (
                            <p className="text-lg md:text-xl font-bold ">
                              {certificate.name}
                            </p>
                          ) : (
                            <a
                              href={certificate.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <p className="text-lg  hover:text-blue-600 hover:cursor-pointer ">
                                {certificate.name}
                              </p>
                            </a>
                          )}

                          {certificates.length < 4 && (
                            <>
                              <p className="font-medium">
                                {certificate.issuingOrganization}
                              </p>
                              <p>
                                {"Issued"}{" "}
                                {new Date(
                                  certificate.issueDate
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}{" "}
                              </p>
                              {certificate.credentialId && (
                                <p>Credential ID: {certificate.credentialId}</p>
                              )}
                              {certificate.credentialUrl && (
                                <a
                                  href={certificate.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <p className="text-blue-400 underline">
                                    View Certificate
                                  </p>
                                </a>
                              )}
                            </>
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
      )}
    </>
  );
}
