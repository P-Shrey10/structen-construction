import BackgroundImage from "../../assets/background_image.jpg";
import { CollectionIcon, PhoneIcon } from "@heroicons/react/outline";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat transform scale-105"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="mb-12 flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300">
            <i className="fas fa-hammer mr-2 h-18 w-18 text-3xl text-orange-500 animate-pulse"></i>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              STRUCTEN CONSTRUCTION
            </h2>
          </div>

          <div className="max-w-4xl text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Building Dreams,{" "}
              <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform duration-300">
                Creating Spaces
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
              Welcome to Structen Construction. We turn your ideas into reality
              with our dedication to quality and design. Whether you're looking
              for modern constructions or renovations that honor tradition, we
              tailor every project to fit your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <CollectionIcon className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-lg">View Our Projects</span>
              </button>
              <button className="group px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <PhoneIcon className=" text-orange-500 w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-lg text-orange-500">Contact Us</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
