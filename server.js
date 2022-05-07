const express = require('express');
const http = require('http');
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

app.get('/', (req, res) => res.sendFile('test.html',{root:'./'}));
app.use(express.json());
app.use('/q_papers',routeQP);

const port = process.env.PORT||3000;
server.listen(port, () => console.log(`Server running on port ${port}`));