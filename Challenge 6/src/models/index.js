import Sequelize from "sequelize";

import userModel from "./user.model.js";
import quizModel from "./quiz.model.js";
import questionModel from "./question.model.js";
import choiceModel from "./choice.model.js";
import userAnswer from "./userAnswer.model.js";
import result from "./result.model.js";

import { sequelize } from "../../index.js";

const db = {};

export function initializeDB() {
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.user = userModel(sequelize, Sequelize);
  db.quiz = quizModel(sequelize, Sequelize);
  db.question = questionModel(sequelize, Sequelize);
  db.choice = choiceModel(sequelize, Sequelize);
  db.userAnswer = userAnswer(sequelize, Sequelize);
  db.result = result(sequelize, Sequelize);
  
  //quiz question => one to many relation
  db.quiz.hasMany(db.question, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.question.belongsTo(db.quiz);

  //question choices => one to many relation
  db.question.hasMany(db.choice, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.choice.belongsTo(db.question);

  //quiz choices => one to many relation
  db.quiz.hasMany(db.choice, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  db.choice.belongsTo(db.quiz);

  /*************USER ANSWER****************** */
  /************FUCKED UP******************** */
  //user useranswer => one to many relation
  // db.user.hasMany(db.userAnswer);
  // db.userAnswer.belongsTo(db.user);

  // //question useranswer => one to many relation
  // db.question.hasMany(db.userAnswer);
  // db.userAnswer.belongsTo(db.question);

  // //choice useranswer => one to many relation
  // db.choice.hasMany(db.userAnswer);
  // db.userAnswer.belongsTo(db.question);
  /***************************************** */
}

export default db;
