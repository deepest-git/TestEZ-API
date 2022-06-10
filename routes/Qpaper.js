contoller = require('../controllers/QpController');
const express = require('express');
const router = express.Router();

router.get('/all',(req,res)=>{
    contoller.getAll(data=>res.json(data));
});

router.get('/drop_all',(req,res)=>{
    contoller.dropAll(data=>res.send(data));
});

router.post('/add_q',(req,res)=>{
    // console.log(req.body);
    // process.exit()
    // res.send(req.body);
    contoller.addQuestion(req.body,data=>res.send(data));
});

router.get('/search',(req,res)=>{
    contoller.searchQ(req.query,data=>res.send(data))
});

router.get('/reinitDB',(req,res)=>{
    contoller.reinitDB(data=>res.send(data))
});

router.post('/submitQp',(req,res)=>{
    contoller.submitQp(data=>res.send(data))
});

module.exports = router;