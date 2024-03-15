import express from "express";
import { isAdmin, verifyToken } from "../middlewares/auth.middleware.js";
import {
  getChoice,
  addChoice,
  updateChoice,
  deleteChoice,
  getCorrectChoices
} from "../controllers/choice.controller.js";

const router = express.Router();

router.get("/:quizId/:questionId/:choiceId", [verifyToken, isAdmin], getChoice);
router.post("/:quizId/:questionId", [verifyToken, isAdmin], addChoice);
router.put(
  "/:quizId/:questionId/:choiceId",
  [verifyToken, isAdmin],
  updateChoice
);
router.delete(
  "/:quizId/:questionId/:choiceId",
  [verifyToken, isAdmin],
  deleteChoice
);
router.get("/:id", verifyToken, getCorrectChoices);

export default router;
