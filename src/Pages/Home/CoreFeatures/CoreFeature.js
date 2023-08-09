import React from "react";

import icon2 from "../../../assets/icons/Wrench.svg";
import icon3 from "../../../assets/icons/check.svg";
import icon4 from "../../../assets/icons/deliveryt.svg";
import icon5 from "../../../assets/icons/group.svg";
import icon6 from "../../../assets/icons/person.svg";
import CoreFeatureCard from "./CoreFeatureCard";

const CoreFeature = () => {
  const cardItems = [
    {
      id: 1,
      img: icon3,
      title: "100% Guranty",
    },
    {
      id: 2,
      img: icon2,
      title: "Best Equipment",
    },
    {
      id: 3,
      img: icon4,
      title: "Timely Delivery",
    },
    {
      id: 4,
      img: icon5,
      title: "Expert Team",
    },
    {
      id: 5,
      img: icon6,
      title: "24/7 Support",
    },
  ];
  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Core Features</p>
        <h2 className="text-4xl font-bold my-2">Why Choose Us</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
          <br />
          or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="justify-items-center flex gap-5 my-6 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {cardItems.map((icon) => (
          <CoreFeatureCard key={icon.id} icon={icon}></CoreFeatureCard>
        ))}
      </div>
    </div>
  );
};

export default CoreFeature;
