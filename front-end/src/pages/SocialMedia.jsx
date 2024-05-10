import React from "react";
import Sidebar from "../components/Sidebar";
import { FaLinkedin,FaStackOverflow ,FaInstagram} from "react-icons/fa";
import { FaSquareGithub,FaSquareXTwitter,FaMedium } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className=" fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="p-5 flex-1 md:ml-52">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold mb-5  ">
          Social Media
        </h1>
        <form>
          <div className=" flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <div className="  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">Linkedin</h2>
                  <FaLinkedin className="text-2xl text-blue-600" />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="linkedinUsername" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="linkedinUsername"
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="linkedinLink" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      type="text"
                      className="p-1 w-full"
                      placeholder="e.g. www.linkedin.com"
                      id="linkedinLink"
                      cols={2}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">X</h2>
                  <FaSquareXTwitter className="text-2xl" />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="xUsername" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="xUsername"
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="xLink" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      type="text"
                      className="p-1 w-full"
                      placeholder="e.g. www.x.com"
                      id="xLink"
                      cols={2}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">Medium</h2>
                  <FaMedium className="text-2xl" />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="mediumUsername" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="mediumUsername"
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="mediumLink" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      type="text"
                      className="p-1 w-full"
                      placeholder="e.g. www.medium.com"
                      id="mediumLink"
                      cols={2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-1  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">GitHub</h2>
                  <FaSquareGithub className="text-2xl text-black" />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="gitHubUsername" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="gitHubUsername"
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="gitHubLink" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      type="text"
                      className="p-1 w-full"
                      placeholder="e.g. www.github.com"
                      id="gitHubLink"
                      cols={2}
                    />
                  </div>
                </div>
              </div>{" "}
              <div className="flex-1  border-solid border-2 p-5 mb-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">Stack Overflow</h2>
                  <FaStackOverflow className="text-2xl " />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="soUsername" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="soUsername"
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="soLink" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      type="text"
                      className="p-1 w-full"
                      placeholder="e.g. www.stackoverflow.com"
                      id="soLink"
                      cols={2}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1  border-solid border-2 p-5">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="font-semibold text-xl my-5">Instagram</h2>
                  <FaInstagram className="text-2xl text-orange-600 " />
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-row items-center">
                    <label htmlFor="soUsername" className="basis-1/3">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. kasunkalhara "
                      className="p-1 w-full"
                      id="soUsername"
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <label htmlFor="soLink" className="basis-1/3">
                      Profile Url
                    </label>
                    <textarea
                      type="text"
                      className="p-1 w-full"
                      placeholder="e.g. www.instagram.com"
                      id="soLink"
                      cols={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button  className="mt-5 p-3 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update Social Media Info
          </button>
        </form>
      </div>
    </div>
  );
}
