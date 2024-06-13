import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Edit from "./pages/Edit";
import BasicInfo from "./pages/BasicInfo";
import SocialMedia from "./pages/SocialMedia";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificate from "./pages/Certificate";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Setting from "./pages/Setting";
import PrivateRoute from "./components/PrivateRoute";
import EditProject from "./pages/EditProject";
import EditEducation from "./pages/EditEducation";
import EditCertificate from "./pages/EditCertificate";
import EditExperience from "./pages/EditExperience";
import CertificateComponent from "./components/CertificateComponent";


export default function App() {
  const [brandName, setBrandName] = useState('');
  const [profileImage, setProfileImage] = useState('');


  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const res = await fetch("/api/basicInfo/get-basicInfo");
        const data = await res.json();
        
        setBrandName(data.brandName);
        setProfileImage(data.profileImage);
      } catch (error) {
        console.log(error);
      }
    };

   

    fetchBasicInfo();
  }, []);

  useEffect(() => {
    // Set document title
    if (brandName) {
      document.title = brandName;
    }

    // Set favicon
    if (profileImage) {
      const favicon = document.getElementById('favicon');
      favicon.href = profileImage;
    }
  }, [brandName, profileImage]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/edit" element={<Edit />} />
          <Route path="/basic-info" element={<BasicInfo />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/edit-project/:projectId" element={<EditProject />} />
          <Route path="/edit-education/:educationId" element={<EditEducation />} />
          <Route path="/edit-certificate/:certificateId" element={<EditCertificate />} />
          <Route path="/edit-experience/:workId" element={<EditExperience />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}
