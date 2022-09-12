const express = require('express')

//FUNCIONES DEL CONTROLLER
const { createTask, deleteTask, getAllTasks, updateTask, getStatusTasks } = require('../controllers/task.controller')

//MIDDLEWARE
const { taskExist } = require('../middlewares/task.middleware')

//ROUTER
const taskRouter = express.Router()

taskRouter.get('/', getAllTasks)
taskRouter.get('/:status', getStatusTasks)
taskRouter.post('/', taskExist, createTask)
taskRouter.patch('/:id', updateTask)
taskRouter.delete('/:id', deleteTask)

module.exports = { taskRouter }