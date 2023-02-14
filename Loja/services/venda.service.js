import vendaPersistence from "../persistence/venda.persistence.js";

async function getAllVendas(){
    return await vendaPersistence.getAllVendas();
}

async function getVenda(idcliente){
    return await vendaPersistence.getVenda(idcliente);
}

async function createVenda(idcliente, idproduto, idendereco, data, qtd){

    return await vendaPersistence.createVenda(idcliente, idproduto, idendereco, data, qtd);
}

async function deleteVenda(idcliente, idproduto, idendereco, data){

    return await vendaPersistence.deleteVenda(idcliente, idproduto, idendereco, data);
}

async function updateVenda(idcliente, novoidproduto, idendereco, data, novoqtd, idproduto){

    return await await vendaPersistence.updateVenda(idcliente, novoidproduto, idendereco, data, novoqtd, idproduto);
}

export default{getAllVendas, getVenda, createVenda, updateVenda, deleteVenda}