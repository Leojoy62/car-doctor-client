import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-orange-600">
                Services
              </Link>
            </li>

            <li>
              {user?.uid && (
                <Link to="/orders" className="text-orange-600">
                  Orders
                </Link>
              )}
            </li>

            <li>
              {user?.uid ? (
                <Link to="/logout" className="text-orange-600">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="text-orange-600">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-orange-600">
              Services
            </Link>
          </li>
          <li>
            {user?.uid && (
              <Link to="/orders" className="text-orange-600">
                Orders
              </Link>
            )}
          </li>
          <li>
            {user?.uid ? (
              <Link to="/logout" className="text-orange-600">
                Logout
              </Link>
            ) : (
              <Link to="/login" className="text-orange-600">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/appoinment"
          className="btn btn-outline border-2 border-orange-600 text-orange-600"
        >
          Appoinment
        </Link>
      </div>
    </div>
  );
};

export default Header;
