import clientePersistence from "../persistence/cliente.persistence.js";

async function getAllClientes(){
    return await clientePersistence.getAllClientes();
}

async function getCliente(nome){
    return await clientePersistence.getCliente(nome);
}

async function createCliente(nome, email, senha){
    const cliente = await getCliente(nome);
    console.log(cliente);
    if(cliente.length == 0){
        return await clientePersistence.createCliente(nome, email, senha);
    }
    else{
        return "Nome de usuário indisponível!";
    }
}

async function deleteCliente(nome){
    const cliente = await getCliente(nome);
    if(cliente.length > 0){
        return await clientePersistence.deleteCliente(nome);
    }
    else {
        return "Cliente não cadastrado";
    }
}

async function fazerLogin(nome, senha){
    return await clientePersistence.fazerLogin(nome, senha);
}

export default{getAllClientes, getCliente, createCliente, deleteCliente, fazerLogin}