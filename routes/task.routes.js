const express = require('express')

//FUNCIONES DEL CONTROLLER
const { createTask, deleteTask, getAllTasks, updateTask, getStatusTasks } = require('../controllers/task.controller')

//MIDDLEWARE
const { taskExist } = require('../middlewares/task.middleware')

//ROUTER
const taskRouter = express.Router()

taskRouter.get('/', getAllTasks)
taskRouter.get('/:status', getStatusTasks)
taskRouter.post('/', createTask)
taskRouter.patch('/:id', taskExist, updateTask)
taskRouter.delete('/:id', taskExist, deleteTask)

module.exports = { taskRouter }