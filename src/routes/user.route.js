import { Router } from "express";
import { loginUser, createUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/", loginUser);
router.post("/", createUser);

export default router;
