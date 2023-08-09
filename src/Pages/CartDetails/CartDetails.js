import React, { useContext, useEffect, useState } from "react";
import banner from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../Provider/AuthProvider";
import CartCard from "./CartCard";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://car-doctor-server-gilt-gamma.vercel.app/orders?email=${user.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-car-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setOrders(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`https://car-doctor-server-gilt-gamma.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleOrderConfirm = (id) => {
    fetch(`https://car-doctor-server-gilt-gamma.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          const updated = orders.find((order) => order._id === id);
          updated.status = "confirm";
          const newOrders = [updated, ...remaining];
          setOrders(newOrders);
        }
      });
  };
  return (
    <div>
      <div className="carousel w-full mb-8">
        <div id="slide1" className="carousel-item relative w-full img-gradient">
          <img src={banner} alt="" className="w-full" />
        </div>

        <div className="absolute transform -translate-y-1/4 ml-5 top-1/4">
          <div className="flex justify-center">
            <h3 className="text-white text-3xl font-bold">Orders Details</h3>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Service</th>
              <th>Price</th>
              <th></th>
              <th>Status</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <CartCard
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleOrderConfirm={handleOrderConfirm}
            ></CartCard>
          ))}
          {/* foot */}
          <Toaster />
        </table>
      </div>
    </div>
  );
};

export default CartDetails;
