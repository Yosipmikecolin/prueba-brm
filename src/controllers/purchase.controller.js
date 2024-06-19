import Purchases from "../models/purchase.models.js";
import Products from "../models/products.models.js";
import { authorizeClient } from "../utils/index.js";
import { createPurchaseDetail } from "./purchase-details.controller.js";

// * CREAR UNA COMPRA
export const createPurchase = [
  authorizeClient,
  async (req, res) => {
    const { product_id, amount } = req.body;
    const user_id = req.user_id;
    try {
      const product = await Products.findByPk(product_id);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      if (product.availableQuantity < amount) {
        return res.status(400).json({ error: "Stock insuficiente" });
      }
      const purchase = await Purchases.create({ product_id, amount, user_id });
      product.availableQuantity -= amount;
      const details = {
        user_id,
        product_id,
        amount,
        totalPrice: product.price * amount,
      };
      await createPurchaseDetail(details);
      await product.save();
      res.json(purchase);
    } catch (error) {
      console.log("Error al crear la compra", error);
      res.status(500).json({ error: "Error al crear la compra" });
    }
  },
];

// * OBTENER TODAS LAS COMPRAS
export const getAllPurchase = [
  authorizeClient,
  async (_req, res) => {
    try {
      const purchases = await Purchases.findAll({ include: [Products] });
      res.json(purchases);
    } catch (error) {
      console.log("Error al recuperar la compras", error);
      res.status(500).json({ error: "Error al recuperar compras" });
    }
  },
];

//* OBTENER UNA COMPRA
export const getByIdPurchase = [
  authorizeClient,
  async (req, res) => {
    const { id } = req.params;
    try {
      const purchase = await Purchases.findByPk(id, { include: [Products] });
      if (!purchase) {
        return res.status(404).json({ error: "Compra no encontrada" });
      }
      res.json(purchase);
    } catch (error) {
      console.log("Error al recuperar la compra", error);
      res.status(500).json({ error: "Error al recuperar la compra" });
    }
  },
];

export default { createPurchase, getAllPurchase, getByIdPurchase };
