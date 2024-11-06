import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import All from "../components/All";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import ServiceDetail from "../pages/Service/ServiceDetail";
import About from "../pages/About/About";
import Project from "../pages/Project/Project";
import ProjectDetail from "../pages/Project/ProjectDetail";
import Partner from "../pages/Partner/Partner";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <All />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetail />,
      },
      {
        path: "/partner",
        element: <Partner />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

export default router;
