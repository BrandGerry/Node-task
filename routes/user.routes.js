const express = require('express')

//FUNCIONES DEL CONTROLLER
const { createUser, getAllUsers, deleteUser, updateUser } = require('../controllers/user.controller')

//MIDDLEWARE
const { createUserValidators } = require('../middlewares/validation.middlewares')
//ROUTER
const userRouter = express.Router()

userRouter.get('/', getAllUsers)
//Validacion de nombre,email y title
userRouter.post('/', createUserValidators, createUser)
userRouter.patch('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

module.exports = { userRouter }
