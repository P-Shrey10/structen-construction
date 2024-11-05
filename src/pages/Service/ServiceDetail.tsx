import { useParams } from "react-router-dom";
import servicesData from "./service.json"; // assuming you have the services data imported

// Define the types for your service data
interface Service {
  id: number;
  label: string;
  image: string;
  describe: string;
  detail: string;
  service: { title: string; description: string }[];
}

// Extract services from the imported data
const services: Service[] = servicesData.services; // Accessing the correct structure

const ServiceDetail = () => {
  const { id } = useParams<{ id: string | undefined }>(); // Specify the type for useParams

  // Check if id is defined and convert to number
  const serviceId = id ? parseInt(id) : null;

  const service =
    serviceId !== null ? services.find((s) => s.id === serviceId) : undefined; // Find the service by ID

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {" "}
      {/* Center the container */}
      <div className="flex flex-col items-center max-w-4xl w-full mx-auto p-8">
        {" "}
        {/* Center content and set max width */}
        <h1 className="text-3xl font-bold mb-4">{service.label}</h1>
        <div className="grid grid-cols-1  gap-8">
          <div className="flex justify-center items-center flex-col">
            <p className="mb-4">{service.detail}</p>
            <div className="bg-white shadow-lg p-4 rounded-lg">
              {" "}
              {/* Add shadow for better visibility */}
              <h2 className="text-xl font-bold mb-2">What We Provide</h2>
              <ul className="space-y-2">
                {service.service.map(
                  (
                    item: { title: string; description: string },
                    index: number
                  ) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-green-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h3 className="text-lg font-medium mb-1">
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
