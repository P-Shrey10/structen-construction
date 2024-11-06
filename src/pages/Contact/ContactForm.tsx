import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your EmailJS user ID and service ID
    emailjs.send('service_hmavyns', 'template_pd7s5vh', formData, 'dE5pbybsxUFDjVDHC')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Reset form after successful submission
        setFormData({ name: '', phone: '', subject: '', message: '' });
        setSubmitted(true); // Trigger airplane animation on success
        setTimeout(() => setSubmitted(false), 5000); // Reset airplane animation after 5 seconds
      }, (err) => {
        console.error('Failed to send email. Error: ', err);
      });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Inquiries</h1>
      <p className="text-center text-lg mb-6">
        For any inquiries, questions or commendations, please fill out the following form.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>

      {/* Airplane flying animation on successful submission */}
      {submitted && (
        <div className="relative mt-6">
          <div className="airplane">
            ✈️
          </div>
        </div>
      )}

      <style jsx>{`
        .airplane {
          font-size: 50px;
          animation: fly 5s linear infinite;
        }

        @keyframes fly {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(200px) translateY(-100px);
          }
          100% {
            transform: translateX(400px) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
