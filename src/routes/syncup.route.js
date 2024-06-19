import { Router } from "express";
import db from "../database/connection.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    await db.sync({ force: true });
    res.status(201).json({ message: "Tablas de base de datos creadas" });
  } catch (error) {
    console.log("Error en al creación de tablas", error);
    res.status(500).json({ error: "Hubo un problema al crear las tablas" });
  }
});

export default router;
