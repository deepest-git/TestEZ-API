QpModel = require('../models/QpModel')

const getAll = (callback) =>{
   QpModel.GetAllQpapers()
   .then(res => {callback(res.rows)})
}

const dropAll = (callback) =>{
   QpModel.DropAll()
   .then(res => {callback(res)})
}

module.exports = {getAll,dropAll};