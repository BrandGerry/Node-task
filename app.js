const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')

//ROUTERS
const { userRouter } = require('./routes/user.routes')
const { taskRouter } = require('./routes/task.routes')

//INICIALIZAR EXPRESS
const app = express()
//RECIBIR JSON
app.use(express.json())

//DEFINIR ENDPOINTS
app.use('/api/v1/users', userRouter)
app.use('/api/v1/tasks', taskRouter)


module.exports = { app }