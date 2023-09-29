import React from "react";
import heroImage from "../assests/hero.jpg";
const Hero = () => {
  return (
    <div className=" min-h-[60%] flex my-5 px-5 justify-center">
      <div className=" min-h-[100%] flex flex-col justify-center md:px-10 text-center md:text-left">
        <p className="font-bold text-sm">CAFE</p>
        <div className="md:max-w-[80%] ">
          <h1 className="text-5xl md:text-6xl font-bold mb-10 mt-6">Best Coffee Rosted By Barista</h1>
        </div>
        <button className="action-btn font-bold md:max-w-[30%]">APPOINTMENT</button>
      </div>

      <img src={heroImage} className="max-w-[35%] hidden md:block" alt="hero_img" />
    </div>
  );
};

export default Hero;
