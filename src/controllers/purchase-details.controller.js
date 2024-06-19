import PurchaseDetails from "../models/purchade-details.models.js";
import User from "../models/user.models.js";
import Products from "../models/products.models.js";

// Crear detalles de compra
export const createPurchaseDetail = async (params) => {
  const { user_id, product_id, amount, totalPrice } = params;
  try {
    const purchaseDetail = await PurchaseDetails.create({
      user_id,
      product_id,
      amount,
      totalPrice,
      datePurchase: new Date(),
    });
    res.status(201).json(purchaseDetail);
  } catch (error) {
    console.error("Error creating purchase detail:", error);
    res.status(500).json({ error: "Error creating purchase detail" });
  }
};

// Obtener todos los detalles de compra
export const getAllPurchaseDetails = async (req, res) => {
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
};
