import express from "express";
import { WorkerList } from "../controllers/workerController.js";
const workerRouter = express.Router();

workerRouter.get("/list", WorkerList);

export default workerRouter;
