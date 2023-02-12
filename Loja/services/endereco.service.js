import enderecoPersistence from "../persistence/endereco.persistence.js";

async function getAllEndereco(idcliente){
    return await enderecoPersistence.getAllEndereco(idcliente);
}

async function createEndereco(idcliente, logradouro, numero){

    return await enderecoPersistence.createEndereco(idcliente, logradouro, numero);

}

async function deleteEndereco(idcliente, logradouro, numero){

    return await enderecoPersistence.deleteEndereco(idcliente, logradouro, numero);
}

export default{getAllEndereco, createEndereco, deleteEndereco}