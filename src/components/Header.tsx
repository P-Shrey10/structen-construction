import { useState } from "react";
import LOGO from "../assets/logo_transparent.png";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  BriefcaseIcon,
  InformationCircleIcon,
  CollectionIcon,
  UserGroupIcon,
  UsersIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 relative">
      <div className="flex items-center z-10">
        <a href="/">
          <img src={LOGO} alt="Logo" className="h-10 w-full" />
        </a>
      </div>

      {/* Toggle Button */}
      <button
        className="md:hidden block text-gray-700 focus:outline-none z-10" 
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <MenuIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {/* Desktop View */}
      <div className="hidden md:flex space-x-6 gap-2 pr-4 z-10">
        <a
          href="/home"
          className="text-gray-700 font-semibold hover:text-orange-500"
        >
          Home
        </a>
        <a
          href="/service"
          className="text-gray-700 font-semibold hover:text-orange-500"
        >
          Service
        </a>
        <a
          href="/about"
          className="text-gray-700 font-semibold hover:text-orange-500"
        >
          About
        </a>
        <a
          href="/project"
          className="text-gray-700 font-semibold hover:text-orange-500"
        >
          Project
        </a>
        <a
          href="/partner"
          className="text-gray-700 font-semibold hover:text-orange-500"
        >
          Partner
        </a>
        <a
          href="/team"
          className="text-gray-700 font-semibold hover:text-orange-500"
        >
          Team
        </a>
        <a
          href="/contact"
          className="text-gray-700 font-semibold hover:text-orange-500"
        >
          Contact
        </a>
      </div>

      {/* Mobile View */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-20`}
      >
        <button
          className="text-gray-700 absolute top-4 right-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          <XIcon className="h-6 w-6 text-red-500" />
        </button>
        <nav className="flex flex-col mt-8 p-4 space-y-6">
          <a
            href="/home"
            className="flex items-center text-gray-700 font-semibold hover:text-orange-500"
          >
            <HomeIcon className="h-5 w-5 mr-2 text-orange-500" />
            Home
          </a>
          <a
            href="/service"
            className="flex items-center text-gray-700 font-semibold hover:text-orange-500"
          >
            <BriefcaseIcon className="h-5 w-5 mr-2 text-orange-500" />
            Service
          </a>
          <a
            href="/about"
            className="flex items-center text-gray-700 font-semibold hover:text-orange-500"
          >
            <InformationCircleIcon className="h-5 w-5 mr-2 text-orange-500" />
            About
          </a>
          <a
            href="/project"
            className="flex items-center text-gray-700 font-semibold hover:text-orange-500"
          >
            <CollectionIcon className="h-5 w-5 mr-2 text-orange-500" />
            Project
          </a>
          <a
            href="/partner"
            className="flex items-center text-gray-700 font-semibold hover:text-orange-500"
          >
            <UserGroupIcon className="h-5 w-5 mr-2 text-orange-500" />
            Partner
          </a>
          <a
            href="/team"
            className="flex items-center text-gray-700 font-semibold hover:text-orange-500"
          >
            <UsersIcon className="h-5 w-5 mr-2 text-orange-500" />
            Team
          </a>
          <a
            href="/contact"
            className="flex items-center text-gray-700 font-semibold hover:text-orange-500"
          >
            <PhoneIcon className="h-5 w-5 mr-2 text-orange-500" />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
