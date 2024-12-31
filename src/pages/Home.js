import React from "react";
import Img from "../assets/bball.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen">
      <img
        src={Img}
        alt="Basketball"
        className="w-full h-full object-cover lg:w-screen object-cover"
      />
      <Link
        to="/purchases"
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold hover:bg-opacity-70 transition"
        role="button"
        aria-label="Go to Purchases"
      >
        SHOP
      </Link>
    </div>
  );
};

export default Home;
