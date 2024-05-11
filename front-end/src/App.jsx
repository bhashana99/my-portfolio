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
import CreateProject from "./pages/CreateProject";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route  element={<PrivateRoute />}>
          <Route path="/edit" element={<Edit />} />
          <Route path="/basic-info" element={<BasicInfo />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education/>} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/create-project" element={<CreateProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
