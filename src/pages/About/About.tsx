import AboutSVG from "./AboutSVG";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 bg-gray-50 p-4 sm:p-8 w-full">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-4 sm:mb-6">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full border-l-2 border-b-2 border-r-2  border-orange-500 rounded-2xl">
        <div className="flex flex-col w-full md:w-2/3 p-4 sm:p-8">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
            We offer ideas, construction deals, and house plans based on
            customer demands. Our team advises on construction matters and
            provides noble ideas about construction. Whether you are looking to
            build your dream home, renovate your existing space, or require
            expert guidance on construction regulations, we are here to assist
            you every step of the way. With a commitment to quality
            craftsmanship and attention to detail, we ensure that every project
            reflects our clients’ unique styles and preferences. Our
            collaborative approach allows us to work closely with our clients to
            understand their vision, ensuring that we deliver results that
            exceed expectations. We pride ourselves on using sustainable
            building practices that minimize environmental impact while
            maximizing durability and functionality. From conceptual design to
            final construction, we strive to provide a seamless experience that
            keeps your goals at the forefront of every decision. Our experienced
            team stays updated on the latest industry trends and technologies to
            provide innovative solutions tailored to meet your specific needs.
            Let us help you turn your construction vision into reality with
            integrity, expertise, and a dedication to excellence!
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center">
          <AboutSVG className="w-full max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default About;
