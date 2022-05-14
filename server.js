const express = require('express');
const http = require('http');
var cors = require('cors');
const app = express(); 
const server = http.createServer(app);
const routeQP = require('./routes/Qpaper');
const init = require('./init');
const process = require('process');

try{
init.init_db();
}catch(err){
    console.log(err.message)
};

app.use(cors());
app.use(express.json());
app.use(express.static('./'));
app.get('/', (req, res) => res.sendFile('test.html',{root:'./'}));
app.use('/q_papers',routeQP);

const port = process.env.PORT||3000;
server.listen(port, () => console.log(`Server running on port ${port}`));