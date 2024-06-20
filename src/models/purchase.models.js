import { DataTypes } from "sequelize";
import db from "../database/connection.js";
import Products from "./products.models.js";
import User from "./user.models.js";

const Purchases = db.define(
  "Purchases",
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Products,
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "purchases",
    timestamps: true,
  }
);

//1 PRODUCTO PUEDE TENER RELACION CON MUCHOS REGISTRO DE (Purchases)
Products.hasMany(Purchases, { foreignKey: "product_id" });

//MUCHOS REGISTORS DE (Purchases) PUEDE TENER 1 PRODUCTO
Purchases.belongsTo(Products, { foreignKey: "product_id" });

//1 USUARIO  PUEDE TENER RELACION CON MUCHOS REGISTRO DE (Purchases)
User.hasMany(Purchases, { foreignKey: "user_id" });

//MUCHOS REGISTORS DE (Purchases) PUEDE TENER 1 USUARIO
Purchases.belongsTo(User, { foreignKey: "user_id" });

export default Purchases;
