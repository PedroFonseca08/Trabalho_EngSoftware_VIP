import express from "express";
import produtoController from "../controllers/produto.controller.js"

const router = express.Router();

// Produtos
router.get("/", produtoController.getAllProdutos);
router.get("/cliente", produtoController.getAllProdutosCliente);
router.post("/busca", produtoController.getProduto);
router.post("/cadastrarProduto", produtoController.createProduto);
router.get("/:nome", produtoController.deleteProduto);
router.post("/alterar", produtoController.updateProduto);

export default router;