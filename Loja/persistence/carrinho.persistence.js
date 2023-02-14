import BD from "./BD.js"



async function getAllCarrinho(idcliente){

    const conn = await BD.conectar();
    try {
        const consulta = await conn.query("SELECT * FROM carrinho WHERE idcliente=$1", [idcliente]);
        console.log("getCarrinho !!! \n" + consulta.rows);
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

async function getCarrinho(idcliente, idproduto){

    const conn = await BD.conectar();
    try {
        const consulta = await conn.query("SELECT * FROM carrinho WHERE idcliente=$1 AND idproduto=$2", [idcliente, idproduto]);
        console.log("getCarrinho !!! \n" + consulta.rows);
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

async function createCarrinho(idcliente, idproduto, qtd){

    const conn = await BD.conectar();
    try {
        const insere = await conn.query("INSERT INTO carrinho VALUES ($1,$2,$3) RETURNING *", [idcliente, idproduto, qtd]);
        console.log("createCarrinho !!!");
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

async function deleteCarrinho(idcliente, idproduto){
    const conn = await BD.conectar();
    try {
        const deletar = await conn.query("DELETE FROM carrinho WHERE idcliente=$1 AND idproduto=$2 RETURNING *", [idcliente, idproduto]);
        console.log("deleteCarrinho !!!");
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

async function updateCarrinho(idcliente, idproduto, novoqtd){
    
    const conn = await BD.conectar();

    try {
        const update = await conn.query("UPDATE carrinho SET qtd = $1 WHERE idproduto=$2 AND idcliente=$3 RETURNING *", [novoqtd, idproduto, idcliente]);
        console.log("updatecarrinho");
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

export default{getAllCarrinho, getCarrinho, createCarrinho, updateCarrinho, deleteCarrinho}