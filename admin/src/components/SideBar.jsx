import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
  const { aToken } = useContext(AdminContext);
  return (
    <div className="min-h-screen bg-white shadow-[8px_0px_24px_rgba(149,157,165,0.2)]">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-[var(--main)]" : ""
              }`
            }
            to={"/admin-dashboard"}
          >
            <img src={assets.Dash_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-[var(--main)]" : ""
              }`
            }
            to={"/all-appointments"}
          >
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-[var(--main)]" : ""
              }`
            }
            to={"/add-worker"}
          >
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-[var(--main)]" : ""
              }`
            }
            to={"worker-list"}
          >
            <img src={assets.people_icon} alt="" />
            <p>Workers List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default SideBar;
