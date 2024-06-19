import Products from "../models/products.models.js";
import { verifyToken } from "../token/auth.js";

// Obtener todos los productos
export const getProducts = async (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ error: "Token no proporcionado" });
  }

  try {
    const response = verifyToken(token);

    if (response.rol === "admin") {
      try {
        const products = await Products.findAll();
        res.status(200).json(products);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        res
          .status(500)
          .json({
            error: "Hubo un problema al intentar obtener los productos",
          });
      }
    } else {
      res.status(401).json({ error: "No eres administrador" });
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error al verificar el token" });
  }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ error: "Token no proporcionado" });
  }

  try {
    const response = verifyToken(token);

    if (response.rol === "admin") {
      try {
        const { lotNumber, name, price, availableQuantity, entryDate } =
          req.body;
        const newProduct = await Products.create({
          lotNumber,
          name,
          price,
          availableQuantity,
          entryDate,
        });
        res.status(201).json(newProduct);
      } catch (error) {
        console.error("Error al crear el producto:", error);
        res
          .status(500)
          .json({ error: "Hubo un problema al intentar crear el producto" });
      }
    } else {
      res.status(401).json({ error: "No eres administrador" });
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error al verificar el token" });
  }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ error: "Token no proporcionado" });
  }

  try {
    const response = verifyToken(token);

    if (response.rol === "admin") {
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
    } else {
      res.status(401).json({ error: "No eres administrador" });
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error al verificar el token" });
  }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ error: "Token no proporcionado" });
  }

  try {
    const response = verifyToken(token);

    if (response.rol === "admin") {
      try {
        const { id } = req.params;
        const { lotNumber, name, price, availableQuantity, entryDate } =
          req.body;

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
          .json({
            error: "Hubo un problema al intentar actualizar el producto",
          });
      }
    } else {
      res.status(401).json({ error: "No eres administrador" });
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error al verificar el token" });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ error: "Token no proporcionado" });
  }

  try {
    const response = verifyToken(token);

    if (response.rol === "admin") {
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
    } else {
      res.status(401).json({ error: "No eres administrador" });
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error al verificar el token" });
  }
};
