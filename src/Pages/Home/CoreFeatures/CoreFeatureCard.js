import React from "react";

const CoreFeatureCard = ({ icon }) => {
  const { img, title } = icon;
  return (
    <div className="card card-compact w-40 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <p className="text-lg text-center font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default CoreFeatureCard;
