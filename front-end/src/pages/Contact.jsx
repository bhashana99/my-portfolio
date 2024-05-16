import React from "react";
import Sidebar from "../components/Sidebar";
import { FaPhoneAlt,FaWhatsapp,FaEnvelope } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row gap-3 bg-gray-300 min-h-screen">
      {/* sidebar */}
      <div className="fixed top-0 left-0 h-full w-auto">
        <Sidebar />
      </div>
      <div className="p-5 flex-1 md:ml-52">
        <h1 className="text-center justify-center text-xl md:text-3xl font-bold ">
          Contact Information
        </h1>
        <div className="mt-5 ">
          <form className="mt-5 ">
            <div className="flex flex-row items-center gap-5 ">
              <FaPhoneAlt className="text-2xl " />
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="phone" className="font-semibold">
                  Phone
                </label>
                <input type="tel" id="phone" className="p-1" placeholder="e.g. +94769136107" />
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 mt-5">
              <FaEnvelope className="text-2xl " />
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="email" className="font-semibold">
                  E-Mail
                </label>
                <input type="email" id="email" className="p-1" placeholder="e.g. example@mail.com" />
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 mt-5">
              <FaWhatsapp className="text-2xl " />
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="whatsapp" className="font-semibold">
                  Whatsapp
                </label>
                <input type="tel" id="whatsapp" className="p-1" placeholder="e.g. +7611100025" />
              </div>
            </div>
            <button  className="mt-5 p-3 bg-blue-700 w-full text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update Contact Info
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
