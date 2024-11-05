import { useParams } from "react-router-dom";
import projectsData from "./project.json"; // Import your project data

// Define the types for your project data
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

// Extract projects from the imported data
const projects: Project[] = projectsData.projects; // Accessing the correct structure

const ProjectDetail = () => {
  const { id } = useParams<{ id: string | undefined }>(); // Get the project ID from URL parameters

  // Check if id is defined
  const projectId = id ? id : null;

  // Find the project by ID
  const project =
    projectId !== null ? projects.find((p) => p.id === projectId) : undefined;

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {" "}
      {/* Center the container */}
      <div className="flex flex-col items-center max-w-4xl w-full mx-auto p-8">
        {" "}
        {/* Center content and set max width */}
        <h1 className="text-3xl font-bold mb-4">{project.label}</h1>
        <div className="grid grid-cols-1 gap-8">
          {project.project.map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
              {" "}
              {/* Add shadow for better visibility */}
              <h2 className="text-xl font-bold mb-2">{item.project_title}</h2>
              <p className="mb-2">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="mb-2">
                <strong>Duration:</strong> {item.project_duration}
              </p>
              <p className="mb-2">
                <strong>Start Date:</strong> {item.start_date}
              </p>
              <p className="mb-2">
                <strong>Cost:</strong> {item.project_cost}
              </p>
              <p className="mb-2">
                <strong>Contractor:</strong> {item.contractor}
              </p>
              {item.pictures.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {item.pictures.map((picture, picIndex) => (
                    <img
                      key={picIndex}
                      src={picture}
                      alt={`Project Image ${picIndex + 1}`}
                      className="rounded-lg shadow-md"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
