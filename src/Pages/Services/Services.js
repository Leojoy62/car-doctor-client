import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "../Home/Service/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [acendingOrder, setAcendingOrder] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    fetch(
      `https://car-doctor-server-gilt-gamma.vercel.app/services?search=${search}&sort=${
        acendingOrder ? "acendingOrder" : "decendingOrder"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [acendingOrder, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
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
      <div className="flex justify-between">
        <button
          className="btn bg-orange-600"
          onClick={() => setAcendingOrder(!acendingOrder)}
        >
          {acendingOrder ? "Price: High to Low" : "Price: Low to High"}
        </button>
        <div className="join">
          <input
            ref={searchRef}
            className="input input-bordered join-item"
            placeholder="Search"
          />
          <button
            className="btn join-item rounded-r-full bg-orange-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
