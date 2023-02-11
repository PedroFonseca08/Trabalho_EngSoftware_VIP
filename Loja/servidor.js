import express from "express";
import clienteRouter from "./routes/cliente.routes.js"

const servidor = express();

servidor.use(express.json())
servidor.use(express.urlencoded({extended: true}))

servidor.use("/cliente", clienteRouter)

servidor.listen(3000, servico);

function servico(){
    console.log("Servidor rodando...");
}


