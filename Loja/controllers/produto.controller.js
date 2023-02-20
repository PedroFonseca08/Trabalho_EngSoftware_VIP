import produtoService from "../services/produto.service.js";



async function getAllProdutos(req, res){
    res.send(await produtoService.getAllProdutos());
}

async function getProduto(req, res){

    const nome = req.body.nome;
    console.log("nome: " + nome);
    if(!nome){
        res.send("Nome de produto inválido!!!");
    }
    else{
        res.send(await produtoService.getProduto(nome));
    }
}

async function createProduto(req, res){

    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const qtd = req.body.qtd;

    if((!nome)||(!descricao)||(!preco)||(!qtd)) {
        res.redirect("/telaCadastrarProduto.html");
    }
    else {
        cadastrar = await produtoService.createProduto(nome, descricao, preco, qtd);
        if(cadastrar){
            res.redirect("/telaCadastrarProduto.html");
        }
    }
} 

async function deleteProduto(req, res){
    
    const nome = req.params.nome;

    if(!nome){
        res.send("Nome inválido!!!");
    }
    else {
        res.send(await produtoService.deleteProduto(nome));
    }
}

async function updateProduto(req, res){
    
    const id = req.params.id;
    const novoNome = req.body.novoNome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const qtd = req.body.qtd;

    if((!id)||(!novoNome)||(!descricao)||(!preco)||(!qtd)){
        res.send("Nome, descricao, preco ou quantidade inválidos");
    }
    else{
        res.send(await produtoService.updateProduto(id, novoNome, descricao, preco, qtd));
    }
}

export default{getAllProdutos, getProduto, createProduto, updateProduto, deleteProduto}