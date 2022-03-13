QpModel = require('../models/QpModel')

const getAll = () =>{
   // return QpModel.GetAllQpapers();
   console.log(QpModel.GetAllQpapers())
}

module.exports = {getAll};