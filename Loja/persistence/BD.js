import pg from "pg"

function conectar(){

    if(global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString:"postgres://postgres:123@localhost:5432/teste"
    })
    global.connection = pool;
    return pool.connect();
}

export default {conectar};