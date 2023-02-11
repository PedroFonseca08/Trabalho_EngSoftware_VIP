import express from "express";
import clienteController from "../controllers/cliente.controller.js"


const router = express.Router();

// Clientes
router.get("/", clienteController.getAllClientes);
router.get("/:nome", clienteController.getCliente);
router.post("/", clienteController.createCliente);
router.delete("/:nome", clienteController.deleteCliente);

export default router;