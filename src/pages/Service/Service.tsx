import { useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../Service/service.json";

interface Service {
  id: number;
  label: string;
  image: string;
  describe: string;
  detail: string;
  service: { title: string; description: string }[];
}

const Service = () => {
  const services: Service[] = servicesData.services;
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleDetailClick = (id: number) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-orange-500 text-center text-3xl font-bold mb-6">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col"
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={service.image}
              alt={service.label}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-orange-500 text-lg font-semibold mt-2">
              {service.label}
            </h2>
            <p className="text-gray-700 mt-1 flex-grow">{service.describe}</p>
            {hoveredId === service.id && (
              <button
                className="mt-4 bg-orange-500 text-white rounded px-4 py-2 self-end"
                onClick={() => handleDetailClick(service.id)}
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
