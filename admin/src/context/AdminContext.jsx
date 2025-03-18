import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, SetAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const [workers, SetWorkers] = useState([]);
  const BackEndUrl = import.meta.env.VITE_BACKEND_URL;
  const GetAllWorkers = async () => {
    try {
      const { data } = await axios.post(
        BackEndUrl + "/api/admin/all-workers",
        {},
        { headers: { aToken } }
      );
      if (data.success) {
        SetWorkers(data.workers);
        console.log(data.workers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailability = async (workerId) => {
    try {
      const { data } = await axios.post(
        BackEndUrl + "/api/admin/change-availability",
        { workerId },
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        GetAllWorkers();
      } else {
        toast.error(data.message);
      }
    } catch (error) {}
  };

  const value = {
    aToken,
    SetAToken,
    BackEndUrl,
    workers,
    GetAllWorkers,
    changeAvailability,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
