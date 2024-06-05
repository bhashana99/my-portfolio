import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaMedium, FaStackOverflow } from "react-icons/fa6";

export default function ContactComponent() {
  const [contact, setContact] = useState({});
  const [socialMedia, setSocialMedia] = useState({});

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch("/api/contactInfo/get-contactInfo");
        const data = await res.json();
        setContact(data);
        fetchSocialMedia();
        // console.log(data);
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

    fetchContact();
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-5xl mt-5 mx-5">
        <h1 className="text-2xl md:text-5xl font-bold font-mono text-center ">
          Contact Me...
        </h1>
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5 ">
              <FaEnvelope className="text-2xl" />
              <p>{contact.email}</p>
            </div>
            {contact.phone && (
              <div className="flex flex-row gap-5">
                <FaPhoneAlt className="text-2xl" />
                <p>{contact.phone}</p>
              </div>
            )}

            {contact.whatsapp && (
              <div className="flex flex-row gap-5">
                <FaWhatsapp className="text-2xl" />
                {contact.whatsapp}
              </div>
            )}
          </div>
          
         
        </div>
        <div className=" flex flex-row  justify-center gap-2 mt-5">
            {socialMedia.linkedin && socialMedia.linkedin.link && (
              <a href={socialMedia.linkedin.link}>
                <FaLinkedin className="text-blue-800 text-2xl md:text-3xl " />
              </a>
            )}
            {socialMedia.github && socialMedia.github.link && (
              <a href={socialMedia.github.link} target="_blank">
                <FaGithubSquare className="text-2xl md:text-3xl" />
              </a>
            )}
            {socialMedia.stackOverflow && socialMedia.stackOverflow.link && (
              <a href={socialMedia.stackOverflow.link} target="_blank">
                <FaStackOverflow className="text-2xl md:text-3xl bg-orange-500 text-white" />
              </a>
            )}
            {socialMedia.x && socialMedia.x.link && (
              <a href={socialMedia.x.link} target="_blank">
                <FaSquareXTwitter className="text-2xl md:text-3xl" />
              </a>
            )}
            {socialMedia.medium && socialMedia.medium.link && (
              <a href={socialMedia.medium.link} target="_blank">
                <FaMedium className="text-2xl md:text-3xl" />
              </a>
            )}

            {socialMedia.instagram && socialMedia.instagram.link && (
              <a href={socialMedia.instagram.link} target="_blank">
                <FaInstagram className="text-orange-600 text-2xl md:text-3xl" />
              </a>
            )}
          </div>
      </div>
    </div>
  );
}
