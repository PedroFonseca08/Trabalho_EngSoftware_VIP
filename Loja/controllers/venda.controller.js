import vendaService from "../services/venda.service.js";



async function getAllVendas(req, res){
    var venda = await vendaService.getAllVendas();
    res.render('telaVendas', { lista : venda, mensagem:''})
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
    
    const numerovenda = req.params.numerovenda;

    if(!numerovenda) {
        res.send("Numero de venda inválido");
    }
    else {
        res.send(await vendaService.deleteVenda(numerovenda));
    }
}

async function updateVenda(req, res){
    
    const idendereco = req.body.idendereco;
    const novoqtd = req.body.novoqtd;
    const numerovenda = req.body.numerovenda;

    console.log(idendereco);
    console.log(novoqtd);
    console.log(numerovenda);

    if((!idendereco)||(!novoqtd)||(!numerovenda)) {
        res.send("Nome, descricao, preco ou quantidade inválidos");
    }
    else {
        res.send(await vendaService.updateVenda(numerovenda, idendereco, novoqtd));
    }
}

export default{getAllVendas, getVenda, createVenda, updateVenda, deleteVenda}