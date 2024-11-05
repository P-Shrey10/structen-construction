import { useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../Service/service.json";

// Define the type for the service data
interface Service {
  id: number;
  label: string;
  image: string;
  describe: string;
  detail: string;
  service: { title: string; description: string }[];
}

const Service = () => {
  const services: Service[] = servicesData.services; // Use the defined type for services
  const [hoveredId, setHoveredId] = useState<number | null>(null); // State to track hovered card
  const navigate = useNavigate(); // Hook to navigate between routes

  // Specify the type for label parameter
  const handleDetailClick = (id: number) => {
    navigate(`/service/${id}`); // Navigate to the detail page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => setHoveredId(service.id)} // Set hovered card ID
            onMouseLeave={() => setHoveredId(null)} // Reset hovered card ID
          >
            <img
              src={service.image}
              alt={service.label}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{service.label}</h2>
            <p className="text-gray-700 mt-1">{service.describe}</p>
            {hoveredId === service.id && (
              <button
                className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
                onClick={() => handleDetailClick(service.id)} // Navigate on click
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

export default Service;
