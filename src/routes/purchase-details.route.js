import { Router } from "express";
import { getAllPurchaseDetails } from "../controllers/purchase-details.controller.js";

const router = Router();

router.get("/", getAllPurchaseDetails);

export default router;
