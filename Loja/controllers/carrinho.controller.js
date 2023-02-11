import carrinhoService from "../services/carrinho.service.js";



async function getAllCarrinho(req, res){

    const id = req.params.id;

    if(!id){
        res.send("id de carrinho inválido!!!");
    }
    else{
        res.send(await carrinhoService.getAllCarrinho(id));
    }
}

async function getCarrinho(req, res){
  
    const idproduto = req.body.idproduto;
    const idcliente = req.body.idcliente;

    if((!idcliente)||(!idproduto)){
        res.send("id de carrinho inválido!!!");
    }
    else{
        res.send(await carrinhoService.getCarrinho(idcliente, idproduto));
    }
}


async function createCarrinho(req, res){

    const idcliente = req.body.idcliente;
    const idproduto = req.body.idproduto;
    const qtd = req.body.qtd;

    if((!idcliente)||(!idproduto)||(!qtd)) {
        res.send("Nome, descricao, preco ou quantidade inválidos");
    }
    else {
        res.send(await carrinhoService.createCarrinho(idcliente, idproduto, qtd));
    }
}

async function deleteCarrinho(req, res){
    
    const idcliente = req.body.idcliente;
    const idproduto = req.body.idproduto;

    if(!idcliente){
        res.send("idcliente inválido!!!");
    }
    else {
        res.send(await carrinhoService.deleteCarrinho(idcliente, idproduto));
    }
}

async function updateCarrinho(req, res){
    
    const idcliente = req.body.idcliente;
    const idproduto = req.body.idproduto;
    const novoqtd = req.body.novoqtd;

    if((!idcliente)||(!idproduto)||(!novoqtd)) {
        res.send("Nome, descricao, preco ou quantidade inválidos");
    }
    else{
        res.send(await carrinhoService.updateCarrinho(idcliente, idproduto, novoqtd));
    }
}

export default{getAllCarrinho, getCarrinho, createCarrinho, updateCarrinho, deleteCarrinho}