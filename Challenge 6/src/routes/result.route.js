import express from "express";
import {
  isAdmin,
  isUser,
  verifyToken,
} from "../middlewares/auth.middleware.js";
import {
  getResultsByUserId,
  getAllResultsByUserId,
  getAllResults,
} from "../controllers/result.controller.js";

const router = express.Router();

router.post("/:quizId", verifyToken, getResultsByUserId);
router.get("/getallresults/:userId", verifyToken, getAllResultsByUserId);
router.get("/getallresults", [verifyToken, isAdmin], getAllResults);

export default router;
