import React, { useContext } from "react";
import registerImg from "../../assets/images/login/login.svg";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, googleSignUp, gitSignUp } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;

    if (password !== confirmpassword) {
      toast.error("Password did not match");
      return;
    } else {
      register(email, password)
        .then((res) => {
          toast.success("Successfully Registered");
          form.reset();
          navigate(from, { replace: true });
        })
        .then((error) => {
          console.error(error);
        });
    }
  };

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((res) => {
        toast.success("Successfully Registered");
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
    <form onSubmit={handleRegister}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-full">
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body border-2 border-orange-600 rounded-xl">
              <h1 className="self-center text-2xl font-bold">Sign Up</h1>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
              </div>
              <Toaster position="top-center" />
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="bg-orange-600 p-2 rounded-lg text-white "
                >
                  Sign Up
                </button>
                <p className="self-center mt-2">Or Sign Up with</p>
                <div className="flex justify-center mt-2 text-3xl">
                  <button
                    onClick={handleGoogleSignUp}
                    className="btn btn-circle mr-3"
                  >
                    <FaGoogle></FaGoogle>
                  </button>
                  <button onClick={handleGitLogIn} className="btn btn-circle">
                    <FaGithub></FaGithub>
                  </button>
                </div>
                <p className="self-center mt-2">
                  Already Have An Account?{" "}
                  <span className="text-orange-600 font-bold">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
