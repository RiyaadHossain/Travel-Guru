import React from "react";
import { BsArrowRight } from "react-icons/bs";
import CoxsBazar from '../../Assets/Images/Rectangle 1.png'
import SecondOne from '../../Assets/Images/Sreemongol.png'
import ThirdOne from '../../Assets/Images/Sajek.png'
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="flex container mx-auto items-center gap-5 mt-16">
      <Helmet>
        <title>Home - Travel Guru</title>
      </Helmet>
      <div className="w-1/3 text-white ">
        <h1 className="text-5xl font-semibold mb-8 uppercase">Cox's Bazar</h1>
        <p className="text-lg text-slate-300">
          Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known
          for its very long, sandy beachfront, stretching from Sea Beach in the
          north to Kolatoli Beach in the south.
        </p>
        <button className="flex items-center mt-7 bg-yellow-600 text-black py-2 px-5 rounded text-lg font-bold">
          <span>Booking</span>{" "}
          <BsArrowRight className="ml-2 mt-1 text-2xl font-extrabold" />
        </button>
      </div>
          <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="card relative mx-auto">
                  <img className="card-img" src={CoxsBazar} alt="" />
                  <h3 className="text-white text-3xl uppercase absolute bottom-5 font-semibold pl-3">Cox's Bazar</h3>
              </div>
              <div className="card relative mx-auto">
                  <img className="card-img" src={SecondOne} alt="" />
                  <h3 className="text-white text-3xl uppercase absolute bottom-5 font-semibold pl-3">Sreemonghol</h3>
              </div>
              <div className="card relative mx-auto">
                  <img className="card-img" src={ThirdOne} alt="" />
                  <h3 className="text-white text-3xl uppercase absolute bottom-5 font-semibold pl-3">Sajek</h3>
              </div>
      </div>
    </div>
  );
};

export default Home;
