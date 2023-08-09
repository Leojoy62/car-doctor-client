import React from "react";
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const TeamCard = ({ expert }) => {
  const { img, description, title } = expert;
  return (
    <div className="card card-compact w-92 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title self-center">{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <p className="flex justify-center pb-2 text-2xl text-orange-600">
          <FaFacebook className="mr-2"></FaFacebook>
          <FaSquareTwitter className="mr-2"></FaSquareTwitter>
          <FaLinkedin className="mr-2"></FaLinkedin>
          <FaSquareInstagram className="mr-2"></FaSquareInstagram>
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
