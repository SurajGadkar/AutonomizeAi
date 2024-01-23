import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";
import axios from "axios";

export const getDataByUsername = async (req, res, next) => {
  try {
    const login = req.params.username;
    const userExists = await User.findOne({ login });

    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists in the database!" });
    } else {
      const response = await axios.get(`https://api.github.com/users/${login}`);
      const userData = response.data;

      const newUser = new User(userData);
      await newUser.save();

      res.status(200).json({ message: "User saved in the database!" });
    }
  } catch (err) {
    next(err);
  }
};

export const test = (req, res) => {
  res.send("Working");
};
