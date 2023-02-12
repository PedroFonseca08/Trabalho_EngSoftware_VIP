import enderecoService from "../services/endereco.service.js";

async function getAllEndereco(req, res){

    const id = req.params.id;

    if(!id){
        res.send("ID inválido!!!")
    }
    else{
        res.send(await enderecoService.getAllEndereco(id));
    }
}

async function createEndereco(req, res){

    const id = req.params.id;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;

    if((!id)||(!logradouro)||(!numero)) {
        res.send("Nome, email ou senha inválidos")
    }
    else {
        res.send(await enderecoService.createEndereco(id, logradouro, numero));
    }
}

async function deleteEndereco(req, res){
    
    const id = req.params.id;
    const logradouro = req.body.logradouro;
    const numero = req.body.numero;

    if(!id){
        res.send("Nome inválido!!!")
    }
    else {
        res.send(await enderecoService.deleteEndereco(id, logradouro, numero));
    }
}

export default{getAllEndereco, createEndereco, deleteEndereco}