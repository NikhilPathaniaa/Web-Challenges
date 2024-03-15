import { sequelize } from "../../index.js";
import db from "../models/index.js";

export async function saveAnswers(req, res, next) {
  const answers = req.body;
  try {
    const dataArray = (
      await sequelize.query(
        "select quizzes.id as quizId, questionId, choices.is_correct as correctChoice from quizzes, questions, choices where quizzes.id = questions.quizId and choices.questionId = questions.id and is_correct!=0;"
      )
    )[0];

    for (let i = 0; i < answers.length; i++) {
      if (
        (answers[i].quizId =
          dataArray[i].quizId &&
          answers[i].questionId == dataArray[i].questionId)
      ) {
        if (dataArray[i].correctChoice === 0) {
          await db.userAnswer.create({
            ...answers[i],
            userId: req.user.id,
            correctChoice: 4,
          });
          continue;
        }
        // console.log(answers[i]);
        await db.userAnswer.create({
          ...answers[i],
          userId: req.user.id,
          correctChoice: dataArray[i].correctChoice,
        });
      }
    }
    res.status(200).json("Answers saved");
  } catch (err) {
    next(err);
  }
}
