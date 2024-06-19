import express from "express";
import { getUser, createUser } from "../controllers/user.controller.js";

const router = express.Router();

// Rutas para usuarios
router.get("/", getUser);
router.post("/", createUser);

export default router;
