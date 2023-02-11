import express from "express";
import carrinhoController from "../controllers/carrinho.controller.js"


const router = express.Router();

// Carrinho
router.get("/:id", carrinhoController.getAllCarrinho);
router.get("/", carrinhoController.getCarrinho);
router.post("/", carrinhoController.createCarrinho);
router.delete("/", carrinhoController.deleteCarrinho);
router.put("/", carrinhoController.updateCarrinho);


export default router;