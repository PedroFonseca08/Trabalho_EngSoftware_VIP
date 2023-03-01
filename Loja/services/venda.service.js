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

async function deleteVenda(numerovenda){

    return await vendaPersistence.deleteVenda(numerovenda);
}

async function updateVenda(idcliente, novoidproduto, idendereco, data, novoqtd, idproduto){

    return await await vendaPersistence.updateVenda(idcliente, novoidproduto, idendereco, data, novoqtd, idproduto);
}

export default{getAllVendas, getVenda, createVenda, updateVenda, deleteVenda}