import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const NavBar = () => {
  //button navigate
  const navigate = useNavigate();
  //responsive navbar
  const [ShowMenu, SetShowMenu] = useState(false);

  const [Token, SetToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm  py-4 mb-5 border-b border-b-gray-400">
      <LazyLoadImage src={assets.logo} alt="" className="w-44 cursor-pointer" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li>HOME</li>
          <hr className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/workers">
          <li>ALL WORKERS</li>
          <hr className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/about">
          <li>ABOUT</li>
          <hr className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li>CONTACT</li>
          <hr className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {Token ? (
          <div className="flex items-center gap-2 cursor-pointer  group relative">
            <LazyLoadImage
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt=""
            />
            <LazyLoadImage
              className="w-2.5 "
              src={assets.dropdown_icon}
              alt=""
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => SetToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
