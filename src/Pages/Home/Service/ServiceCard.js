import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="ml-7">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 text-md font-semibold">
            Price: ${price}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/servicedetails/${_id}`}>
            <button className="btn btn-sm bg-orange-600 text-white">
              BOOK
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
