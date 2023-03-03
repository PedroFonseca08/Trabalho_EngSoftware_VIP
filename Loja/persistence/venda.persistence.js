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
        const insere = await conn.query("INSERT INTO venda VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING * ", [idproduto, idcliente, idendereco, data, qtd]);
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

async function deleteVenda(numerovenda){
    const conn = await BD.conectar();
    try {
        const deletar = await conn.query("DELETE FROM venda WHERE numerovenda=$1 RETURNING *", [numerovenda]);
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

async function updateVenda(numerovenda, idendereco, novoqtd){
    
    const conn = await BD.conectar();

    try {
        const update = await conn.query("UPDATE venda SET idendereco=$1, qtd=$2 WHERE numerovenda=$3 RETURNING *", [idendereco, novoqtd, numerovenda]);
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