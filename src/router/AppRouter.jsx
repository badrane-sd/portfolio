import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Projects from "../pages/projects/Projects.jsx";
import About from "../pages/about/About.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Template from "../components/layout/template/Template.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
