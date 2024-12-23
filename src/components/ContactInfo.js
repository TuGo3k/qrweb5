import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaLeaf } from "react-icons/fa";
import ContactForm from './ContactForm';
const ContactInfo = () => {
  return (
    <div>
    <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%] bg-white">
        <h1 className="z-10 text-[23px]">
          <span className="text-pink-500">Contact </span>Us
        </h1>
        <div className="flex items-center gap-4">
          <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
          <div>
            <FaLeaf />
          </div>
          <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
        </div>
        <p className="text-[16px] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          hendrerit elit turpis, a porttitor tellus sollicitudin at.Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
    </div>
    <div className="w-full mx-auto bg-pink-500 text-white p-7 shadow-lg">
      <div className="mb-6 text-start">
        <div className="flex items-start mb-4 w-auto">
          <FaMapMarkerAlt className="size-[60px] w-auto mr-4" />
          <div>
            <h4 className="font-bold">Address</h4>
            <p>295 Madison Ave, 12th Floor</p>
            <p>New York, NY 10017</p>
          </div>
        </div>
        <div className="flex items-start mb-4 w-full">
          <FaEnvelope className="size-[60px] mr-4" />
          <div>
            <h4 className="font-bold">Email</h4>
            <p>info@example.com</p>
            <p>info2@example.com</p>
          </div>
        </div>
        <div className="flex items-start mb-4 w-full">
          <FaPhoneAlt className="size-[60px] mr-4" />
          <div>
            <h4 className="font-bold">Phone</h4>
            <p>+77 634 545 144</p>
            <p>+77 634 255 147</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-4 text-start text-[26px]">OPENING HOURS</h4>
        <div className="flex justify-between">
          <p>Monday - Friday</p>
          <p>9.00 - 5.00 PM</p>
        </div>
        <div className="flex justify-between">
          <p>Saturday</p>
          <p>9.00 - 2.00 PM</p>
        </div>
        <div className="flex justify-between">
          <p>Sunday</p>
          <p>Closed</p>
        </div>
      </div>
    </div>
    <ContactForm />
    </div>
  );
};

export default ContactInfo;
