import { DataTypes } from "sequelize";
import db from "../database/connection.js";

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: { type: DataTypes.STRING },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: { type: DataTypes.STRING, allowNull: false },
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [["admin", "client"]],
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default User;