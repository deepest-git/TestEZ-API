const express = require('express');
const http = require('http');
const app = express(); 
const server = http.createServer(app);
const routeQP = require('./routes/Qpaper');
const init = require('./init');

try{
init.init_db();
}catch(err){
    console.log(err.message)
};

app.get('/', (req, res) => res.sendFile('/home/deepak/Desktop/TestEZ/api/test.html'));
app.use(express.json());
app.use('/q_papers',routeQP);

const port = 8088;
server.listen(port, () => console.log(`Server running on port ${port}`));