import ErrorImage from "../assets/error.jpg";

const ErrorPage = () => {
  return (
    <div
      className="relative w-full h-screen flex justify-center"
      style={{ backgroundColor: "#191919" }}
    >
      <img src={ErrorImage} alt="Error" className="h-screen object-cover" />

      {/* Button overlay */}
      <a
        href="/"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg shadow-lg border-4 border-black
                   hover:bg-yellow-600 hover:border-black transition duration-300"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <span className="flex items-center">
          <i className="fas fa-hammer mr-2"></i>
          Return to Safe Site
        </span>
      </a>
    </div>
  );
};

export default ErrorPage;
