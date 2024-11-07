import {
  MapIcon,
  MailIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const ContactDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to check if the office is open
  const checkOpenStatus = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 = Sunday, 6 = Saturday
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    // Define opening hours (9:30 AM to 5:30 PM)
    const openingHour = 9;
    const openingMinute = 30;
    const closingHour = 17;
    const closingMinute = 30;

    // Define working days (Sunday to Friday)
    const isWorkingDay = currentDay >= 0 && currentDay <= 5;

    // Check if the current time is within working hours
    const isOpenNow =
      isWorkingDay &&
      (currentHour > openingHour ||
        (currentHour === openingHour && currentMinute >= openingMinute)) &&
      (currentHour < closingHour ||
        (currentHour === closingHour && currentMinute < closingMinute));

    setIsOpen(isOpenNow);
  };

  useEffect(() => {
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 text-gray-800">
      {/* Office Section */}
      <h2 className="border-b-2 border-orange-500 flex justify-center pb-1 text-2xl font-bold mb-4">Planning Room</h2>
      <div className="flex items-center mb-2">
        <MapIcon className="h-5 w-5 text-orange-500 mr-2" />
        <p>Bhaisepati, Lalitpur, Nepal</p>
      </div>
      <div className="flex items-center mb-2">
        <MailIcon className="h-5 w-5 text-orange-500 mr-2" />
        <p>construction.structen@gmail.com</p>
      </div>
      <div className="flex items-center mb-2">
        <PhoneIcon className="h-5 w-5 text-orange-500 mr-2" />
        <p>Mob: +977 9841470208</p>
      </div>

      {/* Opening Hours Section */}
      <div className="flex items-center mb-8">
        <ClockIcon className="h-5 w-5 text-orange-500 mr-2" />
        <p>
          Sunday to Friday: 9:30 AM - 5:30 PM
          <span
            className={`ml-2 font-bold border  p-1 rounded-lg ${
              isOpen
                ? "text-green-600 border-green-600"
                : "text-red-600 border-red-600"
            }`}
          >
            {isOpen ? "Open" : "Closed"}
          </span>
        </p>
      </div>

      {/* Employment Section */}
      <h2 className="border-b-2 border-orange-500 flex justify-center pb-1 text-2xl font-bold mb-4">Employment</h2>
      <p>
        To apply for a job with Structen Construction, please send a Cover
        Letter along with your Resume to:
        <a
          href="mailto:construction.structen@gmail.com"
          className="text-orange-500 no-underline ml-1"
        >
          construction.structen@gmail.com
        </a>
      </p>

      {/* Social Media Section */}
      <h2 className="border-b-2 border-orange-500 flex justify-center pb-1 text-2xl font-bold mb-4 mt-8">Follow Us</h2>
      <div className="flex gap-6">
        <a
          href="https://www.facebook.com/Construction.Structen/"
          target="_blank"
          className="text-orange-500 hover:text-orange-600"
        >
          <i className="fab fa-facebook-square text-3xl"></i>
        </a>
        <a
          href="https://np.linkedin.com/company/construction-structen"
          target="_blank"
          className="text-orange-500 hover:text-orange-600"
        >
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
        <a
          href="https://www.google.com/maps/@27.6510056,85.3053667,18.41z?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="text-orange-500 hover:text-orange-600"
        >
          <i className="fas fa-map-marker-alt text-3xl"></i>
        </a>
        <a
          href="/viber"
          target="_blank"
          className="text-orange-500 hover:text-orange-600"
        >
          <i className="fab fa-viber text-3xl"></i>
        </a>
        <a
          href="/whatsapp"
          target="_blank"
          className="text-orange-500 hover:text-orange-600"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactDetail;
