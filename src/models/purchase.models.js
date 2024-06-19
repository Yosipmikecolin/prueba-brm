import { DataTypes } from "sequelize";
import db from "../database/connection.js";
import Products from "./products.models.js";

const Purchases = db.define(
  "Purchases",
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Products,
        key: 'id'
      }
    },
    cantidad: {
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

// Establecer la relación
Products.hasMany(Purchases, { foreignKey: 'product_id' });
Purchases.belongsTo(Products, { foreignKey: 'product_id' });

export default Purchases;
