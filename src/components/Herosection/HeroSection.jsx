import React from "react";
import banner from "../../assets/banner.jpg";

function HeroSection() {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src={banner}
            alt=""
            className="w-full object-cover object-center"
          />
        </div>

        <div className="absolute top-[10%] left-[50%]">
          <h1 className="text-5xl font-bold text-red-500">
            Discover Your Next Adventure!
          </h1>
          <p className="text-center text-2xl mt-5 font-semibold">
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
