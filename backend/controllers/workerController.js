import workerModel from "../models/workerModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
const ChangeAvailabilty = async (req, res) => {
  try {
    const { workerId } = req.body;
    const WorkerData = await workerModel.findById(workerId);
    await workerModel.findByIdAndUpdate(workerId, {
      available: !WorkerData.available,
    });
    res.json({ success: true, message: "Availabilty Changed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const WorkerList = async (req, res) => {
  try {
    const workers = await workerModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, workers });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//api for worker login
const loginWorker = async (req, res) => {
  try {
    const { email, password } = req.body;
    const worker = await workerModel.findOne({ email });
    if (!worker) {
      return res.json({ success: false, message: "invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, worker.password);
    if (isMatch) {
      const token = jwt.sign({ id: worker._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get all appointments worker pane

const appointmentsWorker = async (req, res) => {
  try {
    const { workerId } = req.body;
    const appointments = await appointmentModel.find({ workerId });
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { ChangeAvailabilty, WorkerList, loginWorker, appointmentsWorker };
