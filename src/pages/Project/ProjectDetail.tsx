import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import projectsData from "./project.json";

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

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-96">
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Project Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const projects: Project[] = projectsData.projects;
  const { id } = useParams<{ id: string | undefined }>();
  const projectId = id ? id : null;
  const project = projectId !== null ? projects.find((p) => p.id === projectId) : undefined;

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center max-w-4xl w-full mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{project.label}</h1>
        <div className="grid grid-cols-1 gap-8 w-full">
          {project.project.map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
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
              <p className="mb-4">
                <strong>Contractor:</strong> {item.contractor}
              </p>
              {item.pictures.length > 0 && (
                <ImageCarousel images={item.pictures} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
