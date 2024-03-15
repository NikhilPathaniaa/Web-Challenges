import { DataTypes } from "sequelize";

export default function (sequelize) {
  const UserAnswer = sequelize.define(
    "answer",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userChoice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      correctChoice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["userId", "questionId", "quizId"],
        },
      ],
    }
  );

  return UserAnswer;
}
