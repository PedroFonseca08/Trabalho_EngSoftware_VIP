import BD from "./BD.js"

async function getAllEndereco(idcliente){

    const conn = await BD.conectar();
    try {
        const consulta = await conn.query('SELECT * FROM endereco WHERE idcliente=$1', [idcliente]);
        console.log("getAllEnderecos /n"+ consulta.rows);
        return consulta.rows;
    } catch (error) {
        console.log(error);
    }
    finally{
        conn.release();
    }
}


async function createEndereco(idcliente, logradouro, numero){

    const conn = await BD.conectar();
    try {
        const insere = await conn.query("INSERT INTO endereco VALUES ($1,$2,$3) RETURNING * ", [idcliente, logradouro, numero]);
        console.log("createClient !!!");
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

async function deleteEndereco(idcliente, logradouro, numero){
    const conn = await BD.conectar();
    try {
        const deletar = await conn.query("DELETE FROM endereco WHERE idcliente=$1 AND logradouro=$2 AND numero=$3 RETURNING *", [idcliente, logradouro, numero]);
        console.log("deleteClient !!!");
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

export default{getAllEndereco, createEndereco, deleteEndereco}