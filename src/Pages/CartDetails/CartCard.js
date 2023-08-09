import React from "react";
import "./CartCard.css";

const CartCard = ({ order, handleDelete, handleOrderConfirm }) => {
  const { img, title, price, date, _id, status } = order;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-color p-2 rounded-lg"
            >
              X
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>${price}</td>
        <td>{date}</td>
        <th>
          {status === "confirm" ? (
            <span className="text-bold text-green-600"> Confirmed</span>
          ) : (
            <button
              onClick={() => handleOrderConfirm(_id)}
              className="btn btn-ghost btn-xs text-orange-600"
            >
              Please Confirm
            </button>
          )}
        </th>
      </tr>
    </tbody>
  );
};

export default CartCard;
