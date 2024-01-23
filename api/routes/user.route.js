import express from "express";
import { getDataByUsername, test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/:username", getDataByUsername);

export default router;
