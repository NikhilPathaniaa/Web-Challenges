import { sequelize } from "../../index.js";
import db from "../models/index.js";
import { createError } from "../utils/error.js";

export async function getChoice(req, res, next) {
  try {
    const { quizId, questionId, choiceId } = req.params;
    const data = await db.choice.findOne({
      where: { id: choiceId, quizId, questionId },
    });
    if (data) {
      res.status(200).json(data.dataValues);
    } else {
      next(createError(404, "Not found"));
    }
  } catch (err) {
    next(err);
  }
}

export async function addChoice(req, res, next) {
  try {
    const { quizId, questionId } = req.params;
    const data = await db.choice.create({ ...req.body, quizId, questionId });
    res.status(200).json(data.dataValues);
  } catch (err) {
    next(err);
  }
}

export async function updateChoice(req, res, next) {
  try {
    const { quizId, choiceId, questionId } = req.params;
    await db.choice.update(req.body, {
      where: { id: choiceId, quizId, questionId },
    });
    res.status(200).json("choice updated");
  } catch (err) {
    next(err);
  }
}

export async function deleteChoice(req, res, next) {
  try {
    const { quizId, choiceId, questionId } = req.params;
    await db.choice.destroy({ where: { id: choiceId, quizId, questionId } });
    res.status(200).json("Choice deleted.");
  } catch (err) {
    next(err);
  }
}

export async function getCorrectChoices(req, res, next) {
  try {
    // console.log(req.params.id);
    const data = await sequelize.query(
      "select answers.correctChoice, answers.questionId from answers, quizzes where quizzes.id = answers.quizId"
    )
    res.status(200).json(data[0]);
  } catch (err) {
    next(err);
  }
}
