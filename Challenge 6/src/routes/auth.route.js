import express from "express";
import { signup, signin, signout } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

//SIGNUP A USER
/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     description: Used to add user
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: body
 *         name: Add User
 *         description: User data
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - email
 *             - password
 *           properties:
 *             username:
 *               type: string
 *               example: mpxfactor
 *             email:
 *               type: string
 *               example: mpxfactor@gmail.com
 *             password:
 *               type: string
 *               example: qwerty12345
 *     responses:
 *       "200":
 *         description: User has been added
 *       "500":
 *         description: Internal server error
 *       "400":
 *         description: Bad request
 */
router.post("/signup", signup);

//SIGNIN A USER
/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     description: Signin user
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: body
 *         name: Signin User
 *         description: User signin
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               example: mpxfactor@gmail.com
 *             password:
 *               type: string
 *               example: qwerty12345
 *     responses:
 *       "200":
 *         description: Get user details
 *       "500":
 *         description: Internal server error
 *       "400":
 *         description: User not found
 */
router.post("/signin", signin);

//SIGNOUT A USER
/**
 * @swagger
 * /api/auth/signout:
 *   get:
 *     description: Signout user
 *     tags:
 *       - Auth
 *     responses:
 *       "200":
 *         description: Signout successfull
 *       "401":
 *         description: You are not authenticated.
*/
router.get("/signout", verifyToken, signout);

export default router;
