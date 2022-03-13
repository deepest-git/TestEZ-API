init_db = require("../init");


const GetAllQpapers=()=>{
    pg_client = init_db.init_db();
    let result=null;
    pg_client.query('SELECT * FROM q_paper',(err,res)=>{
        if(err)result = err.stack;
        else result = res.rows;
    });
    return result;
}

module.exports = {GetAllQpapers};