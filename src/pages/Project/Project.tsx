import { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../Project/project.json";

// Define the type for the project data
interface Project {
  id: string;
  label: string;
  image: string;
  describe: string;
  detail: string;
  project: {
    title: string;
    project_title: string;
    location: string;
    project_duration: string;
    start_date: string;
    project_cost: string;
    contractor: string;
    pictures: string[];
  }[];
}

const Projects = () => {
  const projects: Project[] = projectsData.projects; // Use the defined type for projects
  const [hoveredId, setHoveredId] = useState<string | null>(null); // State to track hovered card
  const navigate = useNavigate(); // Hook to navigate between routes

  // Specify the type for label parameter
  const handleDetailClick = (id: string) => {
    navigate(`/project/${id}`); // Navigate to the detail page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => setHoveredId(project.id)} // Set hovered card ID
            onMouseLeave={() => setHoveredId(null)} // Reset hovered card ID
          >
            <img
              src={project.image} // Placeholder image if none provided
              alt={project.label}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{project.label}</h2>

            {hoveredId === project.id && (
              <button
                className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
                onClick={() => handleDetailClick(project.id)} // Navigate on click
              >
                Detail
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
