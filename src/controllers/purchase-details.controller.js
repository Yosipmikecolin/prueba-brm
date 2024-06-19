import PurchaseDetails from "../models/purchade-details.models.js";
import User from "../models/user.models.js";
import Products from "../models/products.models.js";
import { authorizeAdmin } from "../utils/index.js";

export const createPurchaseDetail = async (params) => {
  const { user_id, product_id, amount, totalPrice } = params;
  try {
    await PurchaseDetails.create({
      user_id,
      product_id,
      amount,
      totalPrice,
      datePurchase: new Date(),
    });
    return true;
  } catch (error) {
    console.error("Error creating purchase detail:", error);
    return false;
  }
};

// Obtener todos los detalles de compra
export const getAllPurchaseDetails = [
  authorizeAdmin,
  async (_req, res) => {
    try {
      const purchaseDetails = await PurchaseDetails.findAll({
        include: [
          { model: User, attributes: ["id", "username", "email"] },
          { model: Products, attributes: ["id", "name", "price"] },
        ],
      });
      res.json(purchaseDetails);
    } catch (error) {
      console.error("Error fetching purchase details:", error);
      res.status(500).json({ error: "Error fetching purchase details" });
    }
  },
];
