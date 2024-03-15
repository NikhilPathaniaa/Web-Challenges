import express from "express";

import {
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";

import {
  isAdmin,
  isUser,
  verifyToken,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

/** Admin  */
/**Get all users */
/**
 * @swagger
 * /api/user/allusers:
 *   get:
 *     description: Get all users
 *     tags:
 *       - User
 *     responses:
 *       "200":
 *         description: Get user details
 */
router.get("/allusers", [verifyToken, isAdmin], getAllUsers);

/**Admin get user */
// router.get("/get/:id", verifyToken, getUser);

/**User */
/**get user details */
/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     description: Get user by id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Get user by id
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
router.get("/:id", verifyToken, getUser);

/**update user */
/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     description: Update user
 *     tags:
 *       - User
 *     parameters:
 *       - in: body
 *         name: Update user
 *         description: Change username, email and password
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - email
 *             - oldpassword
 *             - newpassword
 *           properties:
 *             username:
 *               type: string
 *               example: mpxfactor
 *             email:
 *               type: string
 *               example: mpxfactor@gmail.com
 *             oldpassword:
 *               type: string
 *               example: qwerty12345
 *             newpassword:
 *               type: string
 *               example: qwerty
 *       - in: path
 *         name: id
 *         description: Get user by id
 *         schema:
 *           type: string
 *           properties:
 *             id: string
 *             example: 1
 *     responses:
 *       "200":
 *         description: Get user details
 */
router.put("/:id", [verifyToken, isUser], updateUser);

export default router;
