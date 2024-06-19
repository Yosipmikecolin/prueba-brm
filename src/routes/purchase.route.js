import { Router } from "express";
import {
  createPurchase,
  getAllPurchase,
  getByIdPurchase,
} from "../controllers/purchase.controller.js";

const router = Router();

router.post("/", createPurchase);
router.get("/", getAllPurchase);
router.get("/:id", getByIdPurchase);

export default router;
