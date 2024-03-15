import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Choice = sequelize.define("choices", {
    choice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_correct: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Choice;
}
