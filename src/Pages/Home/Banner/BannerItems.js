import React from "react";
import "./BannerItem.css";
const BannerItems = ({ slide }) => {
  const { image, id, next, prev } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="img-gradient">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/5 left-10 top-1/4 ">
        <h2 className="text-5xl font-bold text-white">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h2>
      </div>
      <div className="absolute flex justify-end w-1/2 transform -translate-y-1/4 left-10 top-1/2 ">
        <p className=" hidden md:block text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          consectetur rem. Veritatis optio dolore
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-2/3 ">
        <button className="hidden md:block btn btn-warning mr-5">
          Discover More
        </button>
        <button className="hidden md:block btn btn-outline btn-warning">
          Last Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle ml-5">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
