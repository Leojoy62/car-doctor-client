import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const { Logout } = useContext(AuthContext);

  Logout()
    .then(() => {
      navigate("/login");
    })
    .catch((error) => {
      console.error(error);
    });
  return <div></div>;
};

export default LogOut;
