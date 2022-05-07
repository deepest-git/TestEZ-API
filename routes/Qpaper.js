contoller = require('../controllers/QpController');
const express = require('express');
const router = express.Router();

router.get('/all',(req,res)=>{
    contoller.getAll(data=>res.send(data));
});

router.get('/drop_all',(req,res)=>{
    contoller.dropAll(data=>res.send(data));
});

router.post('/add_q',(req,res)=>{
    // console.log(req.body);
    // process.exit()
    contoller.addQuestion(req.body,data=>res.send(data));
});

module.exports = router;