QpModel = require('../models/QpModel')

const getAll = (callback) =>{
   QpModel.GetAllQpapers()
   .then(res => {callback(res.rows)})
}

const dropAll = (callback) =>{
   QpModel.DropAll()
   .then(res => {callback(res)})
}

const addQuestion = (data,cb) =>{
   QpModel.AddQuestion(data)
   .then(res => cb(res))
}

const searchQ = (data,cb) =>{
   QpModel.searchQ(data)
   .then(res => cb(res.rows))
}

const reinitDB = (cb) =>{
   QpModel.reinitDB()
   .then(res => cb(res))
}

const submitQp = (data,cb) =>{
   QpModel.submitQp(data);
   cb({'success':true})
}

module.exports = {getAll,dropAll,addQuestion,searchQ,reinitDB,submitQp};