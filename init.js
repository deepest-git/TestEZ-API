const {Client} = require('pg');

const init_db=()=>{

const client = new Client({
    user: 'deepak',
    host: 'localhost',
    database: 'deepak',
    password: '1234',
    port: '5432',
})

client.connect();
return client;
}

module.exports = {init_db};