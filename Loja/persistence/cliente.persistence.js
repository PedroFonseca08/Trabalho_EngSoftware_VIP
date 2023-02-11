import BD from "./BD.js"

async function getAllClientes(){

    const conn = await BD.conectar();
    try {
        const consulta = await conn.query('SELECT * FROM cliente');
        console.log("getAllClientes /n"+ consulta.rows);
       return consulta.rows;
    } catch (error) {
        console.log(error);
    }
    finally{
        conn.release();
    }
}

async function getCliente(nome){

    const conn = await BD.conectar();
    try {
        const consulta = await conn.query("SELECT * FROM cliente WHERE nome=$1", [nome]);
        console.log("getClient !!! \n" + consulta.rows);
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

async function createCliente(nome, email, senha){

    const conn = await BD.conectar();
    try {
        const insere = await conn.query("INSERT INTO cliente VALUES (DEFAULT,$1,$2,$3) RETURNING * ", [nome, email, senha]);
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

async function deleteCliente(nome){
    const conn = await BD.conectar();
    try {
        const deletar = await conn.query("DELETE FROM cliente WHERE nome=$1 RETURNING *", [nome]);
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

export default{getAllClientes, getCliente, createCliente, deleteCliente}