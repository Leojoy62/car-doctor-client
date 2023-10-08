import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-4">Contact Us</h1>
      <div className="w-full flex justify-items-center gap-4 grid my-5 grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col justify-center">
          <p className="ml-10 text-5xl text-orange-600 mb-5">
            <FaLocationDot></FaLocationDot>
          </p>
          <div className="text-center">
            <p>H-303,Banani</p>
            <p>Dhaka,Bangladesh</p>
          </div>
        </div>
        <div>
          <p className="ml-10 text-5xl text-orange-600 mb-5">
            <FaPhone></FaPhone>
          </p>
          <div className="text-center">
            <p>+88012345678912</p>
            <p>+88012345678912</p>
          </div>
        </div>
        <div>
          <p className="ml-10 text-5xl text-orange-600 mb-5">
            <AiOutlineMail></AiOutlineMail>
          </p>
          <div className="text-center">
            <p>carfixer@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
