const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row justify-between bg-gray-100 px-4 py-6 border-t border-gray-300">
      <div className="flex flex-col text-center text-gray-600 text-sm mb-4 md:mb-0">
        <span className="text-gray-700 font-semibold">
          Build Faster with Structen Construction.
        </span>
        <span>Building a better future together with new idea!</span>
      </div>
      <div className="text-center text-gray-500 text-sm">
        &copy; {currentYear} Structen Construction. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
