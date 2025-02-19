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
      <LazyLoadImage
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="w-20 h-[46px] cursor-pointer"
      />
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
        <img
          onClick={() => SetShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* Mobile menu */}
        <div
          className={`${
            ShowMenu ? "fixed w-full" : "h-0 w-0"
          } mobile-menu md:hidden right-0 bottom-0 top-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="menu-images flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => SetShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => SetShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => SetShowMenu(false)} to="/workers">
              <p className="px-4 py-2 rounded inline-block">ALL WORKERS</p>
            </NavLink>
            <NavLink onClick={() => SetShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => SetShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block"> CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
