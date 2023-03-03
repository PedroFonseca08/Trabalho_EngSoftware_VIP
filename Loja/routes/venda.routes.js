import express from "express";
import vendaController from "../controllers/venda.controller.js"


const router = express.Router();

// Vendas
router.get("/", vendaController.getAllVendas);
router.post("/busca", vendaController.getVenda);
router.post("/cadastrarVenda", vendaController.createVenda);
router.get("/:numerovenda", vendaController.deleteVenda);
router.post("/alterar", vendaController.updateVenda);

export default router;