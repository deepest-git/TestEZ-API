const {Client} = require('pg');

const init_db=()=>{

const client = new Client({
    user: 'wzmcpmyjkmvbgs',
    host: 'ec2-52-21-136-176.compute-1.amazonaws.com',
    database: 'dbrggdn52uaod1',
    password: 'a9929c64f0c836d8e13a4b184987755e3f6ca7b1e8f046ead7ed7e4776bdace6',
    port: '5432',
    ssl: {
        rejectUnauthorized: false
      }
    // connectionString: process.env.DATABASE_URL,
    // ssl: {
    //   rejectUnauthorized: false
    // }
})

client.connect();

client.query("CREATE TABLE IF NOT EXISTS public.q_paper("+
"PRIMARY KEY(srl),"+
"marks INTEGER,"+
"description TEXT,"+
"marks_got INTEGER)");

return client;
}

module.exports = {init_db};