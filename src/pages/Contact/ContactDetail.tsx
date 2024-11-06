import { MapIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";

const ContactDetail = () => {
  return (
    <div className="p-4 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Office</h2>
      <div className="flex items-center mb-2">
        <MapIcon className="h-5 w-5 text-orange-500 mr-2" />
        <p>Bhaisepati, Lalitpur, Nepal</p>
      </div>
      <div className="flex items-center mb-2">
        <MailIcon className="h-5 w-5 text-orange-500 mr-2" />
        <p>construction.structen@gmail.com</p>
      </div>
      <div className="flex items-center mb-6">
        <PhoneIcon className="h-5 w-5 text-orange-500 mr-2" />
        <p>Mob: +977 9841470208</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Employment</h2>
      <p>
        To apply for a job with Structen Construction, please send a Cover
        Letter along with your Resume to:
        <a
          href="mailto:construction.structen@gmail.com"
          className="text-blue-500 no-underline ml-1"
        >
          construction.structen@gmail.com
        </a>
      </p>

      {/* Social Media Section */}
      <h2 className="text-2xl font-bold mb-4 mt-8">Follow Us</h2>
      <div className="flex gap-6">
        <a
          href="https://www.facebook.com/Construction.Structen/"
          target="_blank"
          className="text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-facebook-square text-3xl"></i>
        </a>
        <a
          href="https://np.linkedin.com/company/construction-structen"
          target="_blank"
          className="text-blue-700 hover:text-blue-900"
        >
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
        <a
          href="https://www.google.com/maps/@27.6510056,85.3053667,18.41z?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="text-blue-600 hover:text-blue-800"
        >
          <i className="fas fa-map-marker-alt text-3xl"></i>
        </a>
        <a
          href="/viber"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="fab fa-viber text-3xl"></i>
        </a>
        <a
          href="/whatsapp"
          target="_blank"
          className="text-green-500 hover:text-green-700"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactDetail;
