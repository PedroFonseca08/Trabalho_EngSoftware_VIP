import express from "express";
import produtoController from "../controllers/produto.controller.js"


const router = express.Router();

// Produtos
router.get("/", produtoController.getAllProdutos);
router.get("/:nome", produtoController.getProduto);
router.post("/", produtoController.createProduto);
router.delete("/:nome", produtoController.deleteProduto);
router.put("/:id", produtoController.updateProduto);

export default router;