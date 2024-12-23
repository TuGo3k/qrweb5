import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaPen } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">GET IN TOUCH</h2>
      <form className="space-y-4">
        {/* Name Field */}
        

        <div className="bg-white flex items-center border border-gray-300 focus-within:border-pink-500">
          <div className='border-r-2  p-2'><FaUser className="text-gray-400 text-xl " /></div>
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2 px-1 bg-transparent focus:outline-none text-gray-700"
          />
        </div>
        {/* Email Field */}
        <div className="bg-white flex items-center border border-gray-300 focus-within:border-pink-500">
        <div className='border-r-2  p-2'><FaEnvelope className="text-gray-400 text-xl " /></div>
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 px-1 bg-transparent focus:outline-none text-gray-700"
          />
        </div>
        {/* Phone Field */}
        <div className="bg-white flex items-center border border-gray-300 focus-within:border-pink-500">
        <div className='border-r-2  p-2'><FaPhone className="text-gray-400 text-xl " /></div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full py-2 px-1 bg-transparent focus:outline-none text-gray-700"
          />
        </div>
        {/* Message Field */}
        <div className="bg-white flex items-start border border-gray-300 focus-within:border-pink-500">
        <div className='border-r-2  p-2'><FaPen className="text-gray-400 text-xl  mt-2" /></div>
          <textarea
            placeholder="Message"
            className="w-full py-2 px-1 bg-transparent focus:outline-none text-gray-700 resize-none"
            rows="1"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-pink-500 text-white font-bold py-2 px-8 rounded-sm hover:bg-pink-600 transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
