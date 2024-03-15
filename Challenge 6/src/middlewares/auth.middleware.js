import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import db from "../models/index.js";

export function verifyToken(req, res, next) {
  const token = req.cookies.access_token;

  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    if (err) return next(createError(403, "Token not valid"));
    req.user = user;
    next();
  });
}

export async function isAdmin(req, res, next) {
  const user = await db.user.findOne({
    where: {
      id: req.user.id,
    },
  });
  if (user?.dataValues.role === "admin") {
    next();
    return;
  }

  return res.status(403).json({ message: "Require Admin Role!" });
}

export async function isUser(req, res, next) {
  const user = await db.user.findOne({
    where: {
      id: req.user.id,
    },
  });
  if (user?.dataValues.role === "user") {
    next();
    return;
  }

  return res.status(403).json({ message: "Require User Role!" });
}
