import Purchases from "../models/purchase.models.js";
import Products from "../models/products.models.js";
import { authorizeClient } from "../utils/index.js";
import { createPurchaseDetail } from "./purchase-details.controller.js";

// * CREAR UNA COMPRA
export const createPurchase = [
  authorizeClient,
  async (req, res) => {
    const purchasesData = req.body;
    const user_id = req.user_id;

    // Verificar que purchasesData es un array
    if (!Array.isArray(purchasesData)) {
      return res.status(400).json({
        error: "El cuerpo de la solicitud debe ser un array de compras",
      });
    }

    const results = [];
    const errors = [];

    for (const purchaseData of purchasesData) {
      const { product_id, amount } = purchaseData;

      try {
        const product = await Products.findByPk(product_id);
        if (!product) {
          errors.push({ product_id, error: "Producto no encontrado" });
          continue;
        }
        if (product.availableQuantity < amount) {
          errors.push({ product_id, error: "Stock insuficiente" });
          continue;
        }

        const purchase = await Purchases.create({
          product_id,
          amount,
          user_id,
        });

        product.availableQuantity -= amount;
        await product.save();

        const details = {
          user_id,
          product_id,
          amount,
          totalPrice: product.price * amount,
        };
        await createPurchaseDetail(details);

        results.push(purchase);
      } catch (error) {
        console.log("Error al crear la compra", error);
        errors.push({ product_id, error: "Error al crear la compra" });
      }
    }

    // Si hay errores, enviar los errores junto con los resultados exitosos
    if (errors.length > 0) {
      return res.status(207).json({ success: results, errors });
    } else {
      res.json(results);
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
