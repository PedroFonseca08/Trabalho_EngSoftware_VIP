import express from "express";
import enderecoController from "../controllers/endereco.controller.js"


const router = express.Router();

// Endereço
router.get("/:id", enderecoController.getAllEndereco);
router.post("/", enderecoController.createEndereco);
router.delete("/:id", enderecoController.deleteEndereco);

export default router;