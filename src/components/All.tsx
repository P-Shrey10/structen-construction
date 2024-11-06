import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Partner from "../pages/Partner/Partner";
import Project from "../pages/Project/Project";
import Service from "../pages/Service/Service";
import Team from "../pages/Team/Team";

const All = () => {
  return (
    <>
      <Home />
      <Service />
      <About />
      <Project />
      <Partner />
      <Team />
      <Contact/>
    </>
  );
};

export default All;
