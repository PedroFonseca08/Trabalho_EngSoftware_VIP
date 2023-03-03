import produtoService from "../services/produto.service.js";

async function getAllProdutos(req, res){
    var produto = await produtoService.getAllProdutos();
    
    res.render('telaPrincipalAdmin', { lista : produto, mensagem:''});
}

async function getAllProdutosCliente(req, res){
    var produto = await produtoService.getAllProdutos();
    
    res.render('telaPrincipal', { lista : produto, mensagem:''});
}

async function getProduto(req, res){

    const nome = req.body.nome;
    
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
        const cadastrar = await produtoService.createProduto(nome, descricao, qtd, preco);
        if(cadastrar){
            var produto = await produtoService.getAllProdutos();
            res.render('telaPrincipalAdmin', { lista : produto, mensagem:''});
        }
    }
} 

async function deleteProduto(req, res){
    
    const nome = req.params.nome;

    if(!nome){
        res.send("Nome inválido!!!");
    }
    else {
        await produtoService.deleteProduto(nome)
        var produto = await produtoService.getAllProdutos();
        res.render('telaPrincipalAdmin', { lista : produto, mensagem:''});
    }
}

async function updateProduto(req, res){
    
    const nome = req.body.nome;
    const novoNome = req.body.novoNome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const qtd = req.body.qtd;

    console.log(nome);
    console.log(novoNome);
    console.log(descricao);
    console.log(preco);
    console.log(qtd);

    if((!nome)||(!novoNome)||(!descricao)||(!preco)||(!qtd)){
        res.send("Nome, descricao, preco ou quantidade inválidos");
    }
    else{
        await produtoService.updateProduto(nome, novoNome, descricao, preco, qtd);
        var produto = await produtoService.getAllProdutos();
        res.render('telaPrincipalAdmin', { lista : produto, mensagem:''});
    }
}

export default{getAllProdutos, getAllProdutosCliente, getProduto, createProduto, updateProduto, deleteProduto}