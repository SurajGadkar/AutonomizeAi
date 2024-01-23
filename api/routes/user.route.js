import express from "express";
import {
  getDataByUsername,
  test,
  getAllUsers,
  fetchDatabaseByUsername,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/:username", getDataByUsername);
router.get("/", getAllUsers);
router.get("/:username", fetchDatabaseByUsername);

export default router;
