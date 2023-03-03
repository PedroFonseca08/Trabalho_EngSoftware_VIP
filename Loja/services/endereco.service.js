import enderecoPersistence from "../persistence/endereco.persistence.js";

async function getAllEndereco(idcliente){
    return await enderecoPersistence.getAllEndereco(idcliente);
}

async function createEndereco(login, logradouro, numero){

    return await enderecoPersistence.createEndereco(login, logradouro, numero);

}

async function deleteEndereco(idcliente, logradouro, numero){

    return await enderecoPersistence.deleteEndereco(idcliente, logradouro, numero);
}

export default{getAllEndereco, createEndereco, deleteEndereco}