import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";
import axios from "axios";

export const getDataByUsername = async (req, res, next) => {
  try {
    let username = req.params.username;
    const userExists = await User.findOne({ login: username });
    console.log(userExists);
    if (userExists) {
      return next(errorHandler(404, "User Exists in the database"));
    } else {
      try {
        const response = await axios
          .get(`https://api.github.com/users/${username}`)
          .catch((err) => next(errorHandler(err)));

        const userData = response.data;

        console.log("Recieved", userData);

        const newUser = new User(userData);

        await newUser
          .save()
          .then(() => {
            res.status(200).json(newUser);
          })
          .catch((err) => next(errorHandler(err)));
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    next(errorHandler(err));
  }
};

export const test = (req, res) => {
  res.send("Working");
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (!users.length) {
      next(errorHandler(404, "No Users Found!"));
    }

    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
  }
};

export const fetchDatabaseByUsername = async (req, res, next) => {
  try {
    const login = req.params.username;
    const user = await User.findOne({
      login: { $regex: new RegExp(`^${login}$`, "i") },
    });
    console.log("database user", user);
    if (!user) {
      return next(errorHandler(404, "User not found!"));
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};
