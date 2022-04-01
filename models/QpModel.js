init_db = require("../init");


const GetAllQpapers=async()=>{
    pg_client = init_db.init_db();
    return await pg_client.query('SELECT * FROM q_paper')
}

const DropAll=async()=>{
    pg_client = init_db.init_db();
    return await pg_client.query('DROP DATABASE IF EXISTS q_paper')
}

module.exports = {GetAllQpapers,DropAll};