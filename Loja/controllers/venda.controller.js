import vendaService from "../services/venda.service.js";



async function getAllVendas(req, res){
    res.send(await vendaService.getAllVendas());
}

async function getVenda(req, res){

    const id = req.params.id;

    if(!id){
        res.send("idcliente de venda inválido!!!");
    }
    else{
        res.send(await vendaService.getVenda(id));
    }
}

async function createVenda(req, res){

    const idcliente = req.body.idcliente;
    const idproduto = req.body.idproduto;
    const idendereco = req.body.idendereco;
    const data = req.body.data;
    const qtd = req.body.qtd;

    if((!idcliente)||(!idproduto)||(!idendereco)||(!data)||(!qtd)) {
        res.send("Nome, descricao, preco ou quantidade inválidos");
    }
    else {
        res.send(await vendaService.createVenda(idcliente, idproduto, idendereco, data, qtd));
    }
}

async function deleteVenda(req, res){
    
    const numerovenda = req.body.numerovenda;

    if(!numerovenda) {
        res.send("Numero de venda inválido");
    }
    else {
        res.send(await vendaService.deleteVenda(numerovenda));
    }
}

async function updateVenda(req, res){
    
    const idcliente = req.body.idcliente;
    const novoidproduto = req.body.novoidproduto;
    const idendereco = req.body.idendereco;
    const data = req.body.data;
    const novoqtd = req.body.novoqtd;
    const idproduto = req.body.idproduto;

    if((!idcliente)||(!novoidproduto)||(!idendereco)||(!data)||(!novoqtd)||(!idproduto)) {
        res.send("Nome, descricao, preco ou quantidade inválidos");
    }
    else {
        res.send(await vendaService.updateVenda(idcliente, novoidproduto, idendereco, data, novoqtd, idproduto));
    }
}

export default{getAllVendas, getVenda, createVenda, updateVenda, deleteVenda}