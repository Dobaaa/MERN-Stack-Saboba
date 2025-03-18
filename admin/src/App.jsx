import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { AdminContext } from "./context/AdminContext";
import Nav from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Admin/Dashboard";
import AllApointments from "./pages/Admin/AllApointments";
import AddWorker from "./pages/Admin/AddWorker";
import WorkersList from "./pages/Admin/WorkersList";

const App = () => {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Nav />
      <div className="flex items-start">
        <SideBar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllApointments />} />
          <Route path="/add-worker" element={<AddWorker />} />
          <Route path="/worker-list" element={<WorkersList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
