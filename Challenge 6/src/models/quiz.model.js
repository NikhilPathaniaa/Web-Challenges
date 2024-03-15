import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Quiz = sequelize.define("quizzes", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Quiz;
}
