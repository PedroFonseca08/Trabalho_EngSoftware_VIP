import express from "express";
import clienteRouter from "./routes/cliente.routes.js"
import produtoRouter from "./routes/produto.routes.js"
import carrinhoRouter from "./routes/carrinho.routes.js"
import enderecoRouter from "./routes/endereco.routes.js"
import vendaRouter from "./routes/venda.routes.js"

const servidor = express();

servidor.use(express.json())
servidor.use(express.urlencoded({extended: true}))

servidor.use("/cliente", clienteRouter)
servidor.use("/produto", produtoRouter)
servidor.use("/carrinho", carrinhoRouter)
servidor.use("/endereco", enderecoRouter)
servidor.use("/venda", vendaRouter);

servidor.listen(3000, servico);

function servico(){
    console.log("Servidor rodando...");
}


