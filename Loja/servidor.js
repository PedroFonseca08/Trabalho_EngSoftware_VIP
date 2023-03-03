import express from "express";
import path from "path"
import { fileURLToPath } from 'url';

import clienteRouter from "./routes/cliente.routes.js"
import produtoRouter from "./routes/produto.routes.js"
import carrinhoRouter from "./routes/carrinho.routes.js"
import enderecoRouter from "./routes/endereco.routes.js"
import vendaRouter from "./routes/venda.routes.js"
import interfacesRouter from "./routes/interfaces.routes.js"

const servidor = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

servidor.listen(3000, servico);

servidor.set('views', path.join(__dirname, 'views'));
servidor.set('view engine', 'ejs')

servidor.use(express.json())
servidor.use(express.urlencoded({extended: true}))
servidor.use(express.static('views'))

servidor.use("/cliente", clienteRouter)
servidor.use("/produto", produtoRouter)
servidor.use("/carrinho", carrinhoRouter)
servidor.use("/endereco", enderecoRouter)
servidor.use("/venda", vendaRouter);
servidor.use("/interface", interfacesRouter);

servidor.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/TelaLogin.html"))
})


function servico(){
    console.log("Servidor rodando...");
}


