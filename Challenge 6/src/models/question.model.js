import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Question = sequelize.define("questions", {
    question: {
      type: DataTypes.STRING,
    },
  });

  return Question;
}
