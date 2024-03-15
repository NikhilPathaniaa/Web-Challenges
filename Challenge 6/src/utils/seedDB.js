import db from "../models/index.js";
import bcrypt from "bcrypt";
import { sequelize } from "../../index.js";

export async function createAdmin() {
  try {
    const user = {
      username: "nanu",
      password: "neenu",
      email: "wtf@gmail.com",
      role: "admin",
    };

    /**creating Hash */
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password.toString(), salt);

    /**creating new user */
    const newUser = { ...user, password: hash };

    /**saving user to database */
    await db.user.create(newUser);
    console.log("Admin user created");
  } catch (err) {
    console.log(err);
  }
}

export async function createUser() {
  const users = [
    {
      username: "punith",
      password: "12345",
      email: "punith@gmail.com",
      role: "user",
    },
    {
      username: "lokesh",
      password: "54321",
      email: "lokesh@gmail.com",
      role: "user",
    },
  ];

  try {
    for (let user of users) {
      /**creating Hash */
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user.password.toString(), salt);

      /**creating new user */
      const newUser = { ...user, password: hash };

      /**saving user to database */
      await db.user.create(newUser);
      console.log("User created");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function createQuiz() {
  try {
    await db.quiz.create({ title: "Javascript Quiz 1" });
    await db.quiz.create({ title: "Javascript Quiz 2" });
    console.log("Test Quiz was created");
  } catch (err) {
    console.log(err);
  }
}

export async function createQuestion() {
  const questions = [
    "Inside which HTML element do we put the JavaScript?",
    "Which of the following is true about variable naming conventions in JavaScript?",
    "Which of the following is true about cookie handling in JavaScript?",
    "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  ];
  try {
    const quizId = 1;
    for (let question of questions) {
      await db.question.create({ question, quizId });
      console.log(`${question} was created`);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function createChoice() {
  const choices = [
    /**question 1 */
    { choice: "<scripting>", is_correct: 0, questionId: 1, quizId: 1 },
    { choice: "<script>", is_correct: 2, questionId: 1, quizId: 1 },
    { choice: "<js>", is_correct: 0, questionId: 1, quizId: 1 },
    { choice: "<javascript>", is_correct: 0, questionId: 1, quizId: 1 },

    /**question 2 */
    {
      choice:
        "JavaScript variable names must begin with a letter or the underscore character.",
      is_correct: 0,
      questionId: 2,
      quizId: 1,
    },
    {
      choice: "JavaScript variable names are case sensitive.",
      is_correct: 0,
      questionId: 2,
      quizId: 1,
    },
    {
      choice: "Both of the above.",
      is_correct: 3,
      questionId: 2,
      quizId: 1,
    },
    {
      choice: "None of the above.",
      is_correct: 0,
      questionId: 2,
      quizId: 1,
    },

    /**question 3 */
    {
      choice:
        "JavaScript can manipulate cookies using the cookie property of the Document object.",
      is_correct: 0,
      questionId: 3,
      quizId: 1,
    },
    {
      choice:
        "JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.",
      is_correct: 0,
      questionId: 3,
      quizId: 1,
    },
    {
      choice: "Both of the above.",
      is_correct: 3,
      questionId: 3,
      quizId: 1,
    },
    {
      choice: "None of the above.",
      is_correct: 0,
      questionId: 3,
      quizId: 1,
    },

    /**question 4 */
    { choice: "last()", is_correct: 0, questionId: 4, quizId: 1 },
    { choice: "put()", is_correct: 0, questionId: 4, quizId: 1 },
    { choice: "push()", is_correct: 0, questionId: 4, quizId: 1 },
    {
      choice: "None of the above.",
      is_correct: 1,
      questionId: 4,
      quizId: 1,
    },
  ];

  try {
    for (let ch of choices) {
      await db.choice.create(ch);
      console.log(`${ch.choice} created for question ${ch.questionId}`);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function createUserAnswer() {
  const answers = [
    { userId: 1, questionId: 1, userChoice: 1, quizId: 1 },
    { userId: 1, questionId: 2, userChoice: 2, quizId: 1 },
    { userId: 1, questionId: 3, userChoice: 3, quizId: 1 },
    { userId: 1, questionId: 4, userChoice: 4, quizId: 1 },
  ];

  try {
    const dataArray = (
      await sequelize.query(
        "select quizzes.id as quizId, questionId, choices.is_correct as correctChoice from quizzes, questions, choices where quizzes.id = questions.quizId and choices.questionId = questions.id and is_correct!=0;"
      )
    )[0];

    for (let i = 0; i < answers.length; i++) {
      // console.log(dataArray[0][i].quizId, dataArray[0][i].questionId);
      if (
        (answers[i].quizId =
          dataArray[i].quizId &&
          answers[i].questionId == dataArray[i].questionId)
      ) {
        await db.userAnswer.create({
          ...answers[i],
          correctChoice: dataArray[i].correctChoice,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
}
