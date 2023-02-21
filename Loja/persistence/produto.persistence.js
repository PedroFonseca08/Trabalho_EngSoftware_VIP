import BD from "./BD.js"


async function getAllProdutos(){

    const conn = await BD.conectar();
    try {
        const consulta = await conn.query('SELECT * FROM produto');
        console.log("getAllProdutos /n"+ consulta.rows);
       return consulta.rows;
    } catch (error) {
        console.log(error);
    }
    finally{
        // Liberar (devolver) a conexão.
        conn.release();
    }
}

async function getProduto(nome){

    const conn = await BD.conectar();
    try {
        var i=0;
        var primeiraPalavra = "";
        while ( (i < nome.length) && (nome[i] != ' ') ){
            primeiraPalavra += nome[i];
            i++;
        }
        const consulta = await conn.query("SELECT * FROM produto WHERE nome LIKE $1", ['%'+primeiraPalavra+'%']);
        console.log("getProduto !!! \n" + consulta.rows);
        return consulta.rows;
    }
    catch (err){
        console.log(err);
    }
    finally {
        // Liberar (devolver) a conexão.
        conn.release();
    }
}

async function createProduto(nome, descricao, preco, qtd){

    const conn = await BD.conectar();
    try {
        const insere = await conn.query("INSERT INTO produto VALUES (DEFAULT,$1,$2,$3,$4) RETURNING * ", [nome, descricao, preco, qtd]);
        console.log("createProduto !!!");
        return insere.rows;
    }
    catch (err){
        console.log(err);
    }
    finally {
        // Liberar (devolver) a conexão.
        conn.release();
    }
}

async function deleteProduto(nome){
    const conn = await BD.conectar();
    try {
        const deletar = await conn.query("DELETE FROM produto WHERE nome=$1 RETURNING *", [nome]);
        console.log("deleteProduto !!!");
        return deletar.rows;
    }
    catch (err){
        console.log(err);
    }
    finally {
        // Liberar (devolver) a conexão.
        conn.release();
    }
}

async function updateProduto(id, novoNome, descricao, preco, qtd){
    
    const conn = await BD.conectar();

    try {
        const update = await conn.query("UPDATE produto SET nome = $2, descricao = $3, preco = $4, qtd = $5 WHERE idProduto=$1 RETURNING *", [id, novoNome, descricao, preco, qtd]);
        console.log("updateProduto");
        return update.rows;
    }
    catch (err){
        console.log(err);
    }
    finally {
        // Liberar (devolver) a conexão.
        conn.release();
    }
}

export default{getAllProdutos, getProduto, createProduto, updateProduto, deleteProduto}