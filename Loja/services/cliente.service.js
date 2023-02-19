import clientePersistence from "../persistence/cliente.persistence.js";

async function getAllClientes(){
    return await clientePersistence.getAllClientes();
}

async function getCliente(nome){
    return await clientePersistence.getCliente(nome);
}

async function createCliente(nome, email, senha){
    const cliente = await clientePersistence.createCliente(nome, email, senha);
    console.log(cliente);
    if(cliente.length > 0){
        return true;
    }
    else{
        return false;
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
    const cliente = await clientePersistence.fazerLogin(nome, senha);
    console.log(cliente.length);
    if(cliente.length > 0){
        return true;
    }
    else {
        return false;
    }
}

export default{getAllClientes, getCliente, createCliente, deleteCliente, fazerLogin}