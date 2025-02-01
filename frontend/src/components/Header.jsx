import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/*  left side  */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight lg: ">
          Book Appoiotments <br /> With Trusted Workers
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted workers,
            schedule your appointment hassle-free.
          </p>
        </div>
        <Link>
          Book appoiotment <img src={assets.arrow_icon} alt="" />
        </Link>
      </div>

      {/*  right side  */}
      <div className="md:w-1/2 relative ">
        <img
          src={assets.header_img}
          alt=""
          className="w-full md:absolute bottom-0 h-auto rounded-lg  "
        />
      </div>
    </div>
  );
};

export default Header;
