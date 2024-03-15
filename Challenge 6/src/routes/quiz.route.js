import express from "express";
import { isAdmin, verifyToken } from "../middlewares/auth.middleware.js";
import {
  getAllQuizzes,
  addQuiz,
  getOneQuiz,
  deleteQuiz,
  updateQuiz,
  getQuizzesUserAttended,
} from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/user", verifyToken, getQuizzesUserAttended);

/**
 * @swagger
 * /api/quiz/allquizzes:
 *   get:
 *     description: Get all quizzes
 *     tags:
 *       - Quiz
 *     responses:
 *       "200":
 *         description: Get user details
 */
router.get("/allquizzes", verifyToken, getAllQuizzes);

/**
 * @swagger
 * /api/quiz/getquiz/{id}:
 *   get:
 *     description: Get quiz by id
 *     tags:
 *       - Quiz
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Get quiz by id
 *         schema:
 *           type: string
 *           properties:
 *             id: string
 *             example: 1
 *
 *     responses:
 *       "200":
 *         description: Get user details
 */
router.get("/:quizId", verifyToken, getOneQuiz);

/**
 * @swagger
 * /api/quiz:
 *   post:
 *     description: Add quiz
 *     tags:
 *       - Quiz
 *     parameters:
 *       - in: body
 *         name: Add a quiz
 *         description: Add new quiz
 *         schema:
 *           type: object
 *           required:
 *             - title
 *           properties:
 *             title:
 *               type: string
 *               example: Quiz one
 *     responses:
 *       "200":
 *         description: Get user details
 */
router.post("/", [verifyToken, isAdmin], addQuiz);

/**
 * @swagger
 * /api/quiz/{id}:
 *   delete:
 *     description: Quiz id
 *     tags:
 *       - Quiz
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Delete quiz by id
 *         schema:
 *           type: number
 *           properties:
 *             id: string
 *             example: 1
 *
 *     responses:
 *       "200":
 *         description: Delete quiz
 */
router.delete("/:id", [verifyToken, isAdmin], deleteQuiz);

/**
 * @swagger
 * /api/quiz/{id}:
 *   put:
 *     description: Update quiz
 *     tags:
 *       - Quiz
 *     parameters:
 *       - in: body
 *         name: Update quiz
 *         description: Change quiz title
 *         schema:
 *           type: object
 *           required:
 *             - title
 *           properties:
 *             title:
 *               type: string
 *               example: Quiz one
 *       - in: path
 *         name: id
 *         description: Quiz id
 *         schema:
 *           type: number
 *           properties:
 *             id: string
 *             example: 1
 *     responses:
 *       "200":
 *         description: Get user details
 */
router.put("/:id", [verifyToken, isAdmin], updateQuiz);

export default router;
