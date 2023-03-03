import express from "express";
import produtoController from "../controllers/produto.controller.js"

const router = express.Router();

// Produtos
router.get("/telaPrincipalAdmin", produtoController.getAllProdutos);

export default router;