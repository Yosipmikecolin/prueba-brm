import { DataTypes } from "sequelize";
import db from "../database/connection.js";
import User from "./user.models.js";
import Products from "./products.models.js";

const PurchaseDetails = db.define(
  "PurchaseDetails",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    datePurchase: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Products,
        key: 'id',
      },
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "purchase_details",
    timestamps: false,
  }
);

// Establecer las relaciones
User.hasMany(PurchaseDetails, { foreignKey: 'user_id' });
PurchaseDetails.belongsTo(User, { foreignKey: 'user_id' });

Products.hasMany(PurchaseDetails, { foreignKey: 'product_id' });
PurchaseDetails.belongsTo(Products, { foreignKey: 'product_id' });

export default PurchaseDetails;
