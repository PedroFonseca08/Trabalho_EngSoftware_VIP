import clienteService from "../services/cliente.service.js";

async function getAllClientes(req, res){
    res.send(await clienteService.getAllClientes());
}

async function getCliente(req, res){

    const nome = req.params.nome;

    if(!nome){
        res.send("ID inválido!!!")
    }
    else{
        res.send(await clienteService.getCliente(nome));
    }
}

function emailCorreto(email){
    return email.endsWith(".com");
}

async function createCliente(req, res){

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    if((!nome)||(!email)||(!senha)||(!emailCorreto(email))) {
        res.send("Nome, email ou senha inválidos")
    }
    else {
        res.send(await clienteService.createCliente(nome, email, senha));
    }
}

async function deleteCliente(req, res){
    
    const nome = req.params.nome;

    if(!nome){
        res.send("Nome inválido!!!")
    }
    else {
        res.send(await clienteService.deleteCliente(nome));
    }
}

async function fazerLogin(nome, senha){

    console.log(nome + " " + senha);

    if((!nome)||(!senha)) {
        return false;
    }
    else {
       return await clienteService.fazerLogin(nome, senha)
    }
}


export default{getAllClientes, getCliente, createCliente, deleteCliente, fazerLogin}