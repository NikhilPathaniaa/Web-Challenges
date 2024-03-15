import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Result = sequelize.define(
    "result",
    {
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quizTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalQuestions: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      correctAnswers: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields:['userId', 'quizId']
        },
      ],
    }
  );

  return Result;
}
