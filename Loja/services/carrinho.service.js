import carrinhoPersistence from "../persistence/carrinho.persistence.js";


async function getAllCarrinho(idcliente){
    return await carrinhoPersistence.getAllCarrinho(idcliente);
}

async function getCarrinho(idcliente, idproduto){
    return await carrinhoPersistence.getCarrinho(idcliente, idproduto);
}

async function createCarrinho(idcliente, idproduto, qtd){
    const carrinho = await getCarrinho(idcliente, idproduto);
    console.log(carrinho);
    if(carrinho.length == 0){
    return await carrinhoPersistence.createCarrinho(idcliente, idproduto, qtd);
    }
    else{
        return "Carrinho já cadastrado";
    }
}

async function deleteCarrinho(idcliente, idproduto){
    const carrinho = await getCarrinho(idcliente, idproduto);
    if(carrinho.length > 0){
        return await carrinhoPersistence.deleteCarrinho(idcliente, idproduto);
    }
    else{
        return "Carrinho não cadastrado";
    }
}

async function updateCarrinho(idcliente, idproduto, novoqtd){
    const carrinho = await getCarrinho(idcliente, idproduto);
    if(carrinho.length > 0){
        return await await carrinhoPersistence.updateCarrinho(idcliente, idproduto, novoqtd);
    }
    else{
        return "Carrinho não cadastrado";
    }
}

export default{getAllCarrinho, getCarrinho, createCarrinho, updateCarrinho, deleteCarrinho}