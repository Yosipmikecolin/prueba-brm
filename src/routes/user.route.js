import express from "express";
import { loginUser, createUser } from "../controllers/user.controller.js";

const router = express.Router();

// Rutas para usuarios
router.get("/", loginUser);
router.post("/", createUser);

export default router;
