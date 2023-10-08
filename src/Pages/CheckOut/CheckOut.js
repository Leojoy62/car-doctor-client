import React, { useContext } from "react";
import banner from "../../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const CheckOut = () => {
  const service = useLoaderData();
  const { img, title, price } = service;
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const address = form.address.value;
    const message = form.message.value;

    const order = {
      img,
      title,
      price,
      displayName: name,
      date,
      email,
      address,
      message,
    };

    fetch("https://car-doctor-server-gilt-gamma.vercel.app/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => {
        toast.success("Order placed successfully");
        form.reset();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="carousel w-full mb-8">
        <div id="slide1" className="carousel-item relative w-full img-gradient">
          <img src={banner} alt="" className="w-full" />
        </div>

        <div className="absolute transform -translate-y-1/4 ml-5 top-1/4">
          <div className="flex justify-center">
            <h3 className="text-white text-3xl font-bold">Check Out</h3>
          </div>
        </div>
      </div>
      {/* form */}
      <form onSubmit={handleOrder}>
        <div className="hero">
          <div className="hero-content ">
            <div className="card  w-full shadow-xl ">
              <div className="card-body">
                <p className="self-center text-xl font-bold text-orange-600">
                  Service: {service.title}
                </p>
                <p className="self-center mb-3 text-md font-bold ">
                  Price: ${service.price}
                </p>
                <div className="md:flex lg:flex gap-2">
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered w-80"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <input
                      type="text"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="input input-bordered w-80"
                      readOnly
                    />
                  </div>
                </div>
                <div className="md:flex lg:flex gap-2">
                  <div className="form-control">
                    <input
                      type="date"
                      name="date"
                      placeholder="date"
                      className="input input-bordered w-80"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="address"
                      placeholder="address"
                      className="input input-bordered w-80"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Your message"
                    className="input input-bordered h-40"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-orange-600 text-white w-full"
                  >
                    Order Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default CheckOut;
