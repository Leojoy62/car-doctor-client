import React from "react";
import banner from "../../assets/images/checkout/checkout.png";
// import img1 from "../../assets/images/services/4.jpg";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import "./ServiceDetails.css";
import logo from "../../assets/logo.svg";
import img2 from "../../assets/images/banner/1.jpg";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="carousel w-full mb-8">
        <div id="slide1" className="carousel-item relative w-full img-gradient">
          <img src={banner} alt="" className="w-full" />
        </div>

        <div className="absolute transform -translate-y-1/4 ml-5 top-1/4">
          <div className="flex justify-center">
            <h3 className="text-white text-3xl font-bold">Service Details</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-6">
        <div className="col-span-2  mx-5">
          <div className="mr-6 mb-5">
            <img src={img} alt="" className=" rounded h-auto" />
          </div>
          <div className="mb-5 ">
            <p className="text-3xl font-bold mb-2">{title}</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              provident ex voluptates alias rerum dolor corrupti temporibus
              numquam aliquid accusamus exercitationem mollitia est beatae
              dolores nihil reprehenderit, dicta animi itaque!
            </p>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2">
            <div className="card w-80 bg-color sm:mb-5 md:mb-5 lg:mb-0 mr-5">
              <div className="card-body rounded-xl border-2 border-radius-5 border-t-orange-600 rounded">
                <h2 className="card-title">Instant Car Services</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro provident ex voluptates
                </p>
              </div>
            </div>
            <div className="card w-80 bg-color">
              <div className="card-body rounded-xl border-2 border-radius-5 border-t-orange-600 rounded">
                <h2 className="card-title">Instant Car Services</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro provident ex voluptates
                </p>
              </div>
            </div>
            <div className="card w-80 bg-color mr-5 mt-5">
              <div className="card-body rounded-xl border-2 border-radius-5 border-t-orange-600 rounded">
                <h2 className="card-title">Instant Car Services</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro provident ex voluptates
                </p>
              </div>
            </div>
            <div className="card w-80 bg-color mt-5">
              <div className="card-body rounded-xl border-2 border-radius-5 border-t-orange-600 rounded">
                <h2 className="card-title">Instant Car Services</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro provident ex voluptates
                </p>
              </div>
            </div>
          </div>
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            provident ex voluptates alias rerum dolor corrupti temporibus
            numquam aliquid accusamus exercitationem mollitia est beatae dolores
            nihil reprehenderit, dicta animi itaque! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div>
            <p className="text-3xl font-bold mt-5">3 Simple Steps to Process</p>
            <p className="my-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              provident ex voluptates alias rerum dolor corrupti temporibus
              numquam aliquid accusamus exercitationem mollitia est beatae
              dolores nihil reprehenderit, dicta animi itaque! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="gap-2 grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3">
            <div className="card w-66 bg-base-100 border-2 border-orange-500 mr-2">
              <div className="card-body flex-justify-center">
                <div className="flex justify-center">
                  <div className="flex justify-center w-10">
                    <p className="text-center text-xl font-bold text-white p-2 rounded-full bg-orange-600 border-8 border-orange-500">
                      01
                    </p>
                  </div>
                </div>
                <h2 className="card-title font-bold self-center">STEP ONE</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card w-66 bg-base-100 border-2 border-orange-500 mr-2">
              <div className="card-body flex-justify-center">
                <div className="flex justify-center">
                  <div className="flex justify-center w-10">
                    <p className="text-center text-xl font-bold text-white p-2 rounded-full bg-orange-600 border-8 border-orange-500">
                      02
                    </p>
                  </div>
                </div>
                <h2 className="card-title font-bold self-center">STEP TWO</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="card w-66 bg-base-100 border-2 border-orange-500 mr-2">
              <div className="card-body flex-justify-center">
                <div className="flex justify-center">
                  <div className="flex justify-center w-10">
                    <p className="text-center text-xl font-bold text-white p-2 rounded-full bg-orange-600 border-8 border-orange-500">
                      03
                    </p>
                  </div>
                </div>
                <h2 className="card-title font-bold self-center">STEP THREE</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <img className="rounded-xl" src={img2} alt="" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-color rounded">
            <div className="p-8">
              <h3 className="text-xl text-center font-bold text-orange-600">
                Services
              </h3>
              <ul className="w-96">
                <li className="w-32 md:w-58 lg:w-72 rounded bg-white border-opacity-100 py-4 mt-2">
                  <p className="ml-5 flex justify-between mr-2">
                    Full Car Repair{" "}
                    <FaArrowRight className="self-center"></FaArrowRight>
                  </p>
                </li>
                <li className="w-32 md:w-58 lg:w-72 rounded bg-white border-opacity-100 py-4 mt-2">
                  <p className="ml-5 flex justify-between mr-2">
                    Battery Charge
                    <FaArrowRight className="self-center"></FaArrowRight>
                  </p>
                </li>
                <li className="w-32 md:w-58 lg:w-72 rounded bg-white border-opacity-100 py-4 mt-2">
                  <p className="ml-5 flex justify-between mr-2">
                    Engine Repair
                    <FaArrowRight className="self-center"></FaArrowRight>
                  </p>
                </li>
                <li className="w-32 md:w-58 lg:w-72 rounded bg-white border-opacity-100 py-4 mt-2">
                  <p className="ml-5 flex justify-between mr-2">
                    Automatic Services
                    <FaArrowRight className="self-center"></FaArrowRight>
                  </p>
                </li>
                <li className="w-32 md:w-58 lg:w-72 rounded bg-white border-opacity-100 py-4 mt-2">
                  <p className="ml-5 flex justify-between mr-2">
                    Engine Oil Change
                    <FaArrowRight className="self-center"></FaArrowRight>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-black py-2 rounded mt-5">
              <h1 className="text-white ml-5 font-bold text-xl py-5">
                Download
              </h1>
              <div className="flex ml-5">
                <p className="text-white text-3xl self-center mr-2">
                  <FaDownload></FaDownload>
                </p>
                <div className="md:flex lg:flex w-full justify-between">
                  <div className="text-white">
                    <p className="text-xl font-bold">Company Details</p>
                    <p>Download</p>
                  </div>
                  <div className="sm:w-10 text-white self-center mr-2 bg-orange-600 p-3">
                    <FaArrowRight></FaArrowRight>
                  </div>
                </div>
              </div>
              <div className="flex ml-5 mt-3">
                <p className="text-white text-3xl self-center mr-2">
                  <FaDownload></FaDownload>
                </p>
                <div className="md:flex lg:flex w-full justify-between">
                  <div className="text-white">
                    <p className="text-xl font-bold">Our Brochure</p>
                    <p>Download</p>
                  </div>
                  <div className="sm:w-10 text-white self-center mr-2 bg-orange-600 p-3">
                    <FaArrowRight></FaArrowRight>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="bg-black rounded py-10 ">
              <div className="flex justify-center py-5">
                <img src={logo} alt="" />
              </div>
              <div>
                <p className="text-white flex justify-center">
                  Need Help? We are here <br />
                </p>
                <p className="flex justify-center text-white">To help you</p>
              </div>
              <div className="bg-white mx-8 rounded mt-3 p-5 relative ">
                <p className="text-xl font-bold text-center">
                  <span className="text-orange-600">Car Doctor</span> Special
                </p>
                <p className="text-center mt-1 mb-3">
                  Save up to <span className="text-orange-600">50% off</span>{" "}
                </p>
                <div className="sm:hidden lg:block flex justify-center md:left-24 lg:left-24   absolute top-1/5  ">
                  <div className="bg-orange-600  w-32 text-center  rounded p-3">
                    <p className="text-white">Get A Quote</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl font-bold mt-5">Price: ${price}</p>

            <Link to={`/checkout/${_id}`}>
              <button className="bg-orange-600 p-3 rounded text-lg font-bold text-white mt-5">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
