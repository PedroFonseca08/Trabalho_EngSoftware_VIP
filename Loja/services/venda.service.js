import vendaPersistence from "../persistence/venda.persistence.js";

async function getAllVendas(){
    return await vendaPersistence.getAllVendas();
}

async function getVenda(numerovenda){
    return await vendaPersistence.getVenda(numerovenda);
}

async function createVenda(idcliente, idproduto, idendereco, data, qtd){

    return await vendaPersistence.createVenda(idcliente, idproduto, idendereco, data, qtd);
}

async function deleteVenda(numerovenda){

    return await vendaPersistence.deleteVenda(numerovenda);
}

async function updateVenda(numerovenda, idendereco, novoqtd){

    return await await vendaPersistence.updateVenda(numerovenda, idendereco, novoqtd);
}

export default{getAllVendas, getVenda, createVenda, updateVenda, deleteVenda}