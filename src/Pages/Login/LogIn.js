import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import loginImg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { Login, googleSignUp, gitSignUp } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    Login(email, password)
      .then((res) => {
        // const user = res.user;

        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignUp()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGitLogIn = () => {
    gitSignUp()
      .then((res) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body border-2 border-orange-600 rounded-xl">
            <h1 className="self-center text-2xl font-bold">Log In</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="bg-orange-600 p-2 rounded-lg text-white "
                >
                  Login
                </button>
              </div>
            </form>

            <div className="form-control mt-6">
              <p className="self-center mt-2">Or Login with</p>
              <div className="flex justify-center mt-2 text-3xl">
                <button
                  onClick={handleGoogleLogIn}
                  className="btn btn-circle mr-3"
                >
                  <FaGoogle></FaGoogle>
                </button>
                <button onClick={handleGitLogIn} className="btn btn-circle">
                  <FaGithub></FaGithub>
                </button>
              </div>
              <p className="self-center mt-2">
                Don't Have An Account?{" "}
                <span className="text-orange-600 font-bold">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
