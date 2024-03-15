import { sequelize } from "../../index.js";
import db from "../models/index.js";

export async function getAllQuizzes(req, res, next) {
  try {
    const dataArray = await db.quiz.findAll();
    const quizzesArray = dataArray.map((data) => data.dataValues);
    res.status(200).json(quizzesArray);
  } catch (err) {
    next(err);
  }
}

export async function addQuiz(req, res, next) {
  try {
    const quiz = await db.quiz.create(req.body);
    res.status(200).json(`${quiz.title} added.`);
  } catch (err) {
    next(err);
  }
}

export async function deleteQuiz(req, res, next) {
  try {
    await db.quiz.destroy({ where: { id: req.params.id } });
    res.status(200).json(`Quiz is deleted`);
  } catch (err) {
    next(err);
  }
}

export async function getOneQuiz(req, res, next) {
  try {
    const quiz = await db.quiz.findOne({ where: { id: req.params.quizId } });
    res.status(200).json(quiz);
  } catch (err) {
    next(err);
  }
}

export async function updateQuiz(req, res, next) {
  try {
    await db.quiz.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(`Quiz ${req.params.id} updated`);
  } catch (err) {
    next(err);
  }
}

export async function getQuizzesUserAttended(req, res, next) {
  try {
    const data = await sequelize.query(
      `select distinct(quizId) from answers where userId = ${req.user.id}`
    );
    res.status(200).json(data[0]);
  } catch (err) {
    next(err);
  }
}
