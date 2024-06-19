import Products from "../models/products.models.js";
import { authorizeAdmin } from "../utils/index.js";

// * OBTENER PRODUCTOS
export const getProducts = [
  authorizeAdmin,
  async (_req, res) => {
    try {
      const products = await Products.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      res
        .status(500)
        .json({ error: "Hubo un problema al intentar obtener los productos" });
    }
  },
];

// * CREAR UN NUEVO PRODUCTO
export const createProduct = [
  authorizeAdmin,
  async (req, res) => {
    try {
      const { lotNumber, name, price, availableQuantity, entryDate } = req.body;
      const existingProducts = await Products.findOne({
        where: { lotNumber: lotNumber },
      });
      if (existingProducts) {
        return res
          .status(400)
          .json({ error: "El producto ya está registrado" });
      } else {
        const newProduct = await Products.create({
          lotNumber,
          name,
          price,
          availableQuantity,
          entryDate,
        });
        res.status(201).json(newProduct);
      }
    } catch (error) {
      console.error("Error al crear el producto:", error);
      res
        .status(500)
        .json({ error: "Hubo un problema al intentar crear el producto" });
    }
  },
];

// * OBTENER UN PRODUCTO POR ID
export const getProductById = [
  authorizeAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      res
        .status(500)
        .json({ error: "Hubo un problema al intentar obtener el producto" });
    }
  },
];

// * ACTUALIZAR PRODUCTO
export const updateProduct = [
  authorizeAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { lotNumber, name, price, availableQuantity, entryDate } = req.body;

      const product = await Products.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      if (lotNumber !== undefined) product.lotNumber = lotNumber;
      if (name !== undefined) product.name = name;
      if (price !== undefined) product.price = price;
      if (availableQuantity !== undefined)
        product.availableQuantity = availableQuantity;
      if (entryDate !== undefined) product.entryDate = entryDate;

      await product.save();
      res.status(200).json(product);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res
        .status(500)
        .json({ error: "Hubo un problema al intentar actualizar el producto" });
    }
  },
];

// * ELIMINAR PRODUCTO
export const deleteProduct = [
  authorizeAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      await product.destroy();
      res.status(200).json({ message: "Producto eliminado" });
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      res
        .status(500)
        .json({ error: "Hubo un problema al intentar eliminar el producto" });
    }
  },
];
