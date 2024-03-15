import bcrypt from "bcrypt";

import db from "../models/index.js";
import { createError } from "../utils/error.js";

export async function getAllUsers(req, res, next) {
  try {
    const dataArray = await db.user.findAll({ where: { role: "user" } });
    const usersArray = dataArray.map((data) => {
      const { password, ...details } = data.dataValues;
      return details;
    });
    res.status(200).json(usersArray);
  } catch (err) {
    next(err);
  }
}

export async function getUser(req, res, next) {
  if (req.params.id == req.user.id || req.user.id === 1) {
    try {
      const user = await db.user.findOne({ where: { id: req.params.id } });
      if (!user) return res.status(400).json({ message: "User not found" });

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only get your account"));
  }
}

export async function updateUser(req, res, next) {
  try {
    let user;
    if (req.params.id == req.user.id) {
      user = await db.user.findOne({
        where: {
          id: req.user.id,
        },
      });

      if (!user) return res.status(400).json({ message: "User not found" });
    } else {
      return next(createError(403, "You can only get your account"));
    }

    const { username, email, oldpassword, newpassword } = req.body;

    const isCorrect = await bcrypt.compare(oldpassword, user.password);
    if (isCorrect) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(newpassword.toString(), salt);

      const updateData = {
        username,
        password: hash,
        email,
      };
      const updatedUser = await db.user.update(updateData, {
        where: { id: req.params.id },
      });
      res.status(200).json(updatedUser);
    }
  } catch (err) {
    next(err);
  }
}
