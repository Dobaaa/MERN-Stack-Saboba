import React, { useContext, useEffect } from "react";
import { WorkerContext } from "../../context/WorkerContext";
import { AppContext } from "../../context/AppContext";

const WorkerAppointments = () => {
  const { dToken, appointments, GetAppointments } = useContext(WorkerContext);
  const { calculateAge, slotDateFormat } = useContext(AppContext);
  useEffect(() => {
    if (dToken) {
      GetAppointments();
    }
  }, [dToken]);
  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll ">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b ">
          <p>#</p>
          <p>client</p>
          <p>payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointments.map((item, index) => (
          <div key={index}>
            <p>{index + 1}</p>
            <div>
              <img src={item.userData.image} alt="" />
              <p>{item.userData.name}</p>
            </div>
            <div>
              <p>{item.payment ? "online" : "cash"}</p>
            </div>
            <p>{calculateAge(item.userData.dob)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkerAppointments;
