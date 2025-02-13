import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [User, Setuser] = useState({
    name: "Ahmed Jamal",
    image: assets.profile_pic,
    email: "doba@saboba.com",
    phone: "01211998934",
    address: {
      line1: "3th Cross, Smoha ",
      line2: "Alexandria, gesh road, Egypt",
    },
    gender: "male",
    dob: "2000-14-3",
  });

  const [isEdit, SetIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={User.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          value={User.name}
          onChange={(e) =>
            Setuser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {User.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{User.email}</p>
          <p className="font-medium">Phone:</p>{" "}
          {isEdit ? (
            <input
              type="phone"
              className="bg-gray-100 max-w-52"
              value={User.phone}
              onChange={(e) =>
                Setuser((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{User.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div>
              <input
                type="text"
                value={User.address.line1}
                className="bg-gray-50"
                onChange={(e) =>
                  Setuser((prev) => ({
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input
                type="text"
                value={User.address.line2}
                className="bg-gray-50"
                onChange={(e) =>
                  Setuser((prev) => ({
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {User.address.line1}
              <br />
              {User.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              value={User.gender}
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                Setuser((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{User.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              value={User.dob}
              className="max-w-28 bg-gray-100"
              onChange={(e) =>
                Setuser((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{User.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className=" border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
            onClick={() => SetIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className=" border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all duration-200"
            onClick={() => SetIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
