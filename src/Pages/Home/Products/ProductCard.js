import React from "react";

const ProductCard = ({ product }) => {
  const { img, title, price } = product;
  return (
    <div className="card card-compact h-96 w-92 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title self-center">{title}</h2>
        <p className="text-orange-600 text-md font-semibold">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
