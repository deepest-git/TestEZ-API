contoller = require('../controllers/QpController');
const express = require('express');
const router = express.Router();

router.get('/all',(req,res)=>{
    contoller.getAll();
// res.send(QpController.QpController());
});

module.exports = router;