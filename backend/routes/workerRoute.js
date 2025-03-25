import express from "express";
import {
  WorkerList,
  loginWorker,
  appointmentsWorker,
} from "../controllers/workerController.js";
import authWorker from "../middlewares/authWorker.js";
const workerRouter = express.Router();

workerRouter.get("/list", WorkerList);
workerRouter.post("/login", loginWorker);
workerRouter.get("/appointments", authWorker, appointmentsWorker);

export default workerRouter;
