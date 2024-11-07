import { useParams } from "react-router-dom";
import servicesData from "./service.json"; 
import { ExclamationCircleIcon } from "@heroicons/react/outline";

interface Service {
  id: number;
  label: string;
  image: string;
  describe: string;
  detail: string;
  service: { title: string; description: string }[];
}


const ServiceDetail = () => {
  const services: Service[] = servicesData.services;

  const { id } = useParams<{ id: string | undefined }>();

  const serviceId = id ? parseInt(id) : null;

  const service =
    serviceId !== null ? services.find((s) => s.id === serviceId) : undefined;

    if (!service) {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <ExclamationCircleIcon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Service Not Found!
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but the service you're looking for doesn't exist.
              Please check the service ID or try again later.
            </p>
            <a
              href="/service"
              className="px-6 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Exit from Wrong Service
            </a>
          </div>
        </div>
      );
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">

      <div className="flex flex-col items-center max-w-4xl w-full mx-auto p-8">

        <h1 className="text-orange-500 text-3xl font-bold mb-4">{service.label}</h1>
        <div className="grid grid-cols-1  gap-8">
          <div className="flex justify-center items-center flex-col">
            <p className="mb-4">{service.detail}</p>
            <div className="bg-white shadow-lg p-4 rounded-lg">

              <h2 className="flex justify-center text-xl font-bold mb-2">What We Provide</h2>
              <ul className="space-y-2">
                {service.service.map(
                  (
                    item: { title: string; description: string },
                    index: number
                  ) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-orange-500 mr-2"
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
