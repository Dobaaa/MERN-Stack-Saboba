import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import workerModel from "../models/workerModel.js";

// Api for Adding worker
const addWorker = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the request body
    console.log("Request File:", req.file); // Log the uploaded file
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;
    // Check if image file is provided
    if (!imageFile) {
      return res.json({ success: false, message: "Image file is required" });
    }
    //cheking all data to add workers
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing  Details" });
    }

    // validating email format

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }

    //vaild password
    if (password < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    //hashing worker password
    const salt = await bcrypt.genSalt(10);
    const hashedPasword = await bcrypt.hash(password, salt);

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const imageUrl = imageUpload.secure_url;

    const workerData = {
      name,
      email,
      image: imageUrl,
      password: hashedPasword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newWorker = new workerModel(workerData);
    await newWorker.save();

    res.json({ success: true, message: "worker added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addWorker };
