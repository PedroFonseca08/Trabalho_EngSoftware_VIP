import produtoPersistence from "../persistence/produto.persistence.js";

async function getAllProdutos(){
    return await produtoPersistence.getAllProdutos();
}

async function getProduto(nome){
    return await produtoPersistence.getProduto(nome);
}

async function createProduto(nome, descricao, preco, qtd){
    const produto = await produtoPersistence.createProduto(nome, descricao, preco, qtd);
    console.log(produto);
    if(produto.length == 0){
        return true;
    }
    else{
        return false;
    }
}

async function deleteProduto(nome){
    const produto = await getProduto(nome);
    if(produto.length > 0){
        return await produtoPersistence.deleteProduto(nome);
    }
    else{
        return "Produto não cadastrado";
    }
}

async function updateProduto(id, novoNome, descricao, preco, qtd){
    const produto = await getProduto(novoNome);
    if(produto.length > 0){
        return await await produtoPersistence.updateProduto(id, novoNome, descricao, preco, qtd);
    }
    else{
        return "Produto não cadastrado";
    }
}

export default{getAllProdutos, getProduto, createProduto, updateProduto, deleteProduto}