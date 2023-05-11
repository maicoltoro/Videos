const mongoose = require('mongoose')
mongoose.connect('mongodb://192.168.132.129:27017')

const objetobd = mongoose.connection

objetobd.on('connected',() =>{
    console.log("conexion a bases correcta")
})

objetobd.on('error',() =>{
    console.log("conexion fallida")
})

module.exports = mongoose