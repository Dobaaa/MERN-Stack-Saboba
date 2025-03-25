import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const WorkerContext = createContext();

const WorkerContextProvider = (props) => {
  const BackEndUrl = import.meta.env.VITE_BACKEND_URL;
  const [dToken, SetDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
  );

  const [appointments, SetAppointments] = useState([]);

  const GetAppointments = async () => {
    try {
      const { data } = await axios.get(
        BackEndUrl + "/api/worker/appointments",
        {
          headers: { dToken },
        }
      );
      if (data.success) {
        SetAppointments(data.appointments.reverse());
        console.log(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    dToken,
    SetDToken,
    BackEndUrl,
    GetAppointments,
    appointments,
    SetAppointments,
  };
  return (
    <WorkerContext.Provider value={value}>
      {props.children}
    </WorkerContext.Provider>
  );
};

export default WorkerContextProvider;
