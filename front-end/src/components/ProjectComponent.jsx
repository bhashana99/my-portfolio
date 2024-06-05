import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";

export default function ProjectComponent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/project/get-projects");
        const data = await res.json();
        setProjects(data);

        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-5xl mt-5 mx-5">
        <h1 className="text-2xl md:text-5xl font-bold font-mono text-center underline">
          Projects
        </h1>
        <div className=" items-center mt-5 md:mt-16 ">
          <div className="flex flex-row items-center h-full w-full">
            <div className="grid md:grid-cols-3  gap-2 ">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="max-w-sm rounded overflow-hidden shadow-lg hover:border-2 hover:border-black hover:border-dashed"
                >
                  <div class="px-6 py-4">
                    <div className="font-bold text-xl mb-2 ">
                      {project.projectName}
                    </div>
                    <p className="text-gray-700 text-base italic">
                      {project.projectDescription}{" "}
                    </p>
                  </div>
                  <div className="flex justify-center gap-3 mb-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Github Repo
                      </a>
                    )}
                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                      >
                        Site
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
