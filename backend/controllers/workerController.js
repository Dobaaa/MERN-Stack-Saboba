import workerModel from "../models/workerModel.js";

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

export { ChangeAvailabilty, WorkerList };
