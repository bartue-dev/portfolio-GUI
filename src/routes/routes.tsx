import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../page/about/About";
import Contact from "../page/contact/Contact";
import Home from "../page/homepage/Home";
import Projects from "../page/projects/Projects";
import ProjectDetails from "../components/projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: "home", element: <Home/>},
      {path: "projects", element: <Projects/>},
      {path: "projects/:projectId", element: <ProjectDetails/>},
      {path: "about", element: <About/>},
      {path: "contact", element: <Contact/>}
    ]
  }
])