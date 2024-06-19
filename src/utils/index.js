import db from "../database/connection.js";
import { verifyToken } from "../token/auth.js";
import User from "../models/user.models.js";

// * INICIAR BASE DE DATOS
export const startDB = async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

// * VALIDAR AUTORIZACIÓN PARA ADMINISTRADOR
export const authorizeAdmin = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ error: "Token no proporcionado" });
  }

  try {
    const response = verifyToken(token);
    const user = await User.findByPk(response.id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (user.role !== "admin") {
      return res.status(401).json({ error: "No eres administrador" });
    } else {
      req.user_id = user.id;
      next();
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error al verificar el token" });
  }
};

// * VALIDAR AUTORIZACIÓN PARA CLIENTE
export const authorizeClient = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ error: "Token no proporcionado" });
  }

  try {
    const response = verifyToken(token);
    const user = await User.findByPk(response.id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (user.role !== "client") {
      return res.status(401).json({ error: "No eres cliente" });
    } else {
      req.user_id = user.id;
      next();
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error al verificar el token" });
  }
};
