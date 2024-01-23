import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

// Enable JSON using express json middleware
app.use(express.json());

//Local port
const PORT = 3000;

//Connecting to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to Database successfully!");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use("/api/v1/users", userRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});