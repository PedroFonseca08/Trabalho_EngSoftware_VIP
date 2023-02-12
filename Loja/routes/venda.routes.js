import express from "express";
import vendaController from "../controllers/venda.controller.js"


const router = express.Router();

// Vendas
router.get("/", vendaController.getAllVendas);
router.get("/:id", vendaController.getVenda);
router.post("/", vendaController.createVenda);
router.delete("/", vendaController.deleteVenda);
router.put("/", vendaController.updateVenda);

export default router;