import BD from "./BD.js"


async function getAllVendas(){

    const conn = await BD.conectar();
    try {
        const consulta = await conn.query('SELECT * FROM venda');
        console.log("getAllVendas /n"+ consulta.rows);
       return consulta.rows;
    } catch (error) {
        console.log(error);
    }
    finally{
        // Liberar (devolver) a conexão.
        conn.release();
    }
}

async function getVenda(idcliente){

    const conn = await BD.conectar();
    try {
        const consulta = await conn.query("SELECT * FROM venda WHERE idcliente=$1", [idcliente]);
        console.log("getVenda !!! \n" + consulta.rows);
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

async function createVenda(idcliente, idproduto, idendereco, data, qtd){

    const conn = await BD.conectar();
    try {
        const insere = await conn.query("INSERT INTO venda VALUES ($1,$2,$3,$4,$5) RETURNING * ", [idcliente, idproduto, idendereco, data, qtd]);
        console.log("createVenda !!!");
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

async function deleteVenda(idcliente, idproduto, idendereco, data){
    const conn = await BD.conectar();
    try {
        const deletar = await conn.query("DELETE FROM venda WHERE idcliente=$1 AND idproduto=$2 AND idendereco=$3 AND data=$4 RETURNING *", [idcliente, idproduto, idendereco, data]);
        console.log("deleteVenda !!!");
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

async function updateVenda(idcliente, novoidproduto, idendereco, data, novoqtd, idproduto){
    
    const conn = await BD.conectar();

    try {
        const update = await conn.query("UPDATE venda SET idproduto=$1, qtd=$2 WHERE idcliente=$3 AND idproduto=$4 AND idendereco=$5 AND data=$6 RETURNING *", [novoidproduto, novoqtd, idcliente, idproduto, idendereco, data]);
        console.log("updateVenda");
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

export default{getAllVendas, getVenda, createVenda, updateVenda, deleteVenda}