import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative  w-full">
          <div>
            <img className="w-4/5 rounded-lg" src={person} alt="" />
            <img
              className="absolute w-3/5 right-5 rounded-lg top-1/2 border-8 border-white"
              src={parts}
              alt=""
            />
          </div>
        </div>
        <div className="text-center sm:mt-20 lg:text-left">
          <h6 className="text-2xl text-orange-600 font-bold">About Us</h6>
          <h6 className="text-4xl font-bold">
            We are qualified <br />
            & of experience <br />
            in this field
          </h6>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="mb-4">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="contact">
            <button className="btn bg-orange-600">Get more info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
