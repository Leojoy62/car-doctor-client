import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-gilt-gamma.vercel.app/ourservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-4xl font-bold my-2">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
          <br />
          or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="bg-black w-full my-5 py-20 flex justify-items-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-white flex items-center">
          <div className="text-4xl mr-2">
            <FaCalendarAlt></FaCalendarAlt>
          </div>
          <div>
            <p>We are open Monday-Friday</p>
            <h4 className="text-xl font-bold">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="text-white flex items-center m-10">
          <div className="text-4xl mr-2">
            <FaPhoneAlt />
          </div>
          <div>
            <p>Have a question?</p>
            <h4 className="text-xl font-bold">+2546 251 2658</h4>
          </div>
        </div>
        <div className="text-white flex items-center">
          <div className="text-4xl mr-2">
            <FaLocationDot />
          </div>
          <div>
            <p>Need a repair? our address</p>
            <h4 className="text-xl font-bold">Liza Street, New York </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
