import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  saveAnswers,
} from "../controllers/answer.controller.js";

const router = express.Router();

router.post("/", verifyToken, saveAnswers);

export default router;
