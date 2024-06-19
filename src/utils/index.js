import db from "../database/connection.js";
import { verifyToken } from "../token/auth.js";


// * INICIAR BASE DE DATOS
export const startDB = async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};


// * VALIDAR AUTORIZACIÓN
export const authorizeAdmin = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ error: "Token no proporcionado" });
  }

  try {
    const response = verifyToken(token);

    if (response.rol !== "admin") {
      return res.status(401).json({ error: "No eres administrador" });
    }

    req.user = response; // Guarda el usuario en el request para uso futuro
    next();
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error al verificar el token" });
  }
};
