import { sequelize } from "../../index.js";
import db from "../models/index.js";

// export async function getAllQuestions(req, res, next) {
//   try {
//     const dataArray = await db.question.findAll();
//     const questionsArray = dataArray.map((data) => data.dataValues);
//     res.status(200).json(questionsArray);
//   } catch (err) {
//     next(err);
//   }
// }

// export async function getQuestionsByQuizId(req, res, next) {
//   try {
//     const dataArray = await db.quiz.findOne({
//       where: { id: req.params.quizId },
//       include: [db.question],
//     });
//     res.status(200).json(dataArray);
//   } catch (err) {
//     next(err);
//   }
// }

// export async function getQuestionsByQuizIdWithChoices(req, res, next) {
//   try {
//     console.log(req.params.id);
//     const dataArray = await db.quiz.findOne({
//       where: { id: req.params.id },
//       include: [{ model: db.question, include: [db.choice] }],
//     });
//     res.status(200).json(dataArray);
//   } catch (err) {
//     next(err);
//   }
// }

export async function getQuestionById(req, res, next) {
  try {
    const { quizId, questionId } = req.params;
    const data = await db.question.findOne({
      where: { id: questionId, quizId },
    });
    res.status(200).json(data.dataValues);
  } catch (err) {
    next(err);
  }
}

export async function addQuestionWithChoices(req, res, next) {
  try {
    const { question, choices } = req.body;
    const { quizId } = req.params;
    const questionId = (await db.question.create({ question, quizId }))
      .dataValues.id;
    const enrichedChoices = choices.map((choice) => {
      return { ...choice, quizId, questionId };
    });
    await db.choice.bulkCreate(enrichedChoices);
    res.status(200).json({ questionId });
  } catch (err) {
    next(err);
  }
}

export async function addQuestion(req, res, next) {
  try {
    const { quizId } = req.params;
    const data = await db.question.create({ ...req.body, quizId });
    res.status(200).json(data.dataValues);
  } catch (err) {
    next(err);
  }
}

export async function updateQuestionById(req, res, next) {
  try {
    const { quizId, questionId } = req.params;
    const data = await db.question.update(req.body, {
      where: { id: questionId, quizId },
    });
    res.status(200).json(`Question updated`);
  } catch (err) {
    next(err);
  }
}

export async function deleteQuestionById(req, res, next) {
  const { quizId, questionId } = req.params;
  try {
    await db.question.destroy({
      where: { id: questionId, quizId },
    });
    res.status(200).json(`Question deleted`);
  } catch (err) {
    next(err);
  }
}

export async function getAllQuestionsChoicesByQuizId(req, res, next) {
  try {
    const dataArray = await db.quiz.findOne({
      where: { id: req.params.id },
      include: [{ model: db.question, include: [db.choice] }],
    });
    res.status(200).json(dataArray);
  } catch (err) {
    next(err);
  }
}
