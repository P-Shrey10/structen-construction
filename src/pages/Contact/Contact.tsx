import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Contact</h1>
      <div className="flex flex-row space-x-8 w-full max-w-6xl">
        {/* Contact Form */}
        <div className="w-1/2">
          <ContactForm />
        </div>
        {/* Contact Detail */}
        <div className="w-1/2">
          <ContactDetail />
        </div>
      </div>
    </div>
  );
};

export default Contact;
