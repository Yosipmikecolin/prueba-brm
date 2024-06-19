import Purchases from '../models/purchase.models.js';
import Products from '../models/products.models.js';

export const create = async (req, res) => {
  const { product_id, cantidad } = req.body;
  try {
    const product = await Products.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    if (product.availableQuantity < cantidad) {
      return res.status(400).json({ error: 'Insufficient stock' });
    }
    const purchase = await Purchases.create({ product_id, cantidad });
    product.availableQuantity -= cantidad;
    await product.save();
    res.json(purchase);
  } catch (error) {
    res.status(500).json({ error: 'Error creating purchase' });
  }
};

export const getAll = async (_req, res) => {
  try {
    const purchases = await Purchases.findAll({ include: [Products] });
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching purchases' });
  }
};

export const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await Purchases.findByPk(id, { include: [Products] });
    if (!purchase) {
      return res.status(404).json({ error: 'Purchase not found' });
    }
    res.json(purchase);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching purchase' });
  }
};

export default { create, getAll, getById };
