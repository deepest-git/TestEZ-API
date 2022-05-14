const { raw } = require("express");

init_db = require("../init");


const GetAllQpapers=async()=>{
    pg_client = init_db.init_db();
    return await pg_client.query('SELECT * FROM q_paper')
}

const DropAll=async()=>{
    pg_client = init_db.init_db();
    return await pg_client.query('DROP TABLE IF EXISTS q_paper')
}

const AddQuestion=async(data)=>{
    pg_client = init_db.init_db();
    let raw = "INSERT INTO q_paper(marks,description) VALUES ("+"'"+data.marks+"'"+','+"'"+data.des+"'"+")";
    // console.log(raw)
    // process.exit()
    return await pg_client.query(raw);
}

module.exports = {GetAllQpapers,DropAll,AddQuestion};