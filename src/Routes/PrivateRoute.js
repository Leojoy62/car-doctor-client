import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { Loading } = useContext(AuthContext);
  const location = useLocation();

  const { user } = useContext(AuthContext);

  if (Loading) {
    return (
      <progress
        className="progress progress-success w-56"
        value="70"
        max="100"
      ></progress>
    );
  }

  if (!user) {
    <div className="toast toast-center">
      <div className="alert alert-success">
        <span>Login First Please</span>
      </div>
    </div>;
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
