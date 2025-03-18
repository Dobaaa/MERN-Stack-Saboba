import express from "express";
import {
  addWorker,
  loginAdmin,
  allWorkers,
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { ChangeAvailabilty } from "../controllers/workerController.js";

const adminRouter = express.Router();

adminRouter.post("/add-worker", authAdmin, upload.single("image"), addWorker);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-workers", authAdmin, allWorkers);
adminRouter.post("/change-availability", authAdmin, ChangeAvailabilty);

export default adminRouter;
