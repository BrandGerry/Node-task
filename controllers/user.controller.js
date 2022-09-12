const { User } = require('../models/user.model')
const { Task } = require('../models/task.model')


//FUNCION TRAER LOS USERS
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ where: { status: 'Active' }, include: { model: Task } })
        res.status(200).json({
            status: 'success',
            data: {
                users: users,
            }
        })

    } catch (error) {
        console.log(error)
    }
}

//FUNCION PARA CREAR USERS
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const newUser = await User.create({ name: name, email: email, password: password })
        res.status(201).json({
            status: 'success',
            data: { newUser },
        })
    } catch (error) {
        console.log(error)
    }

}

//FUNCION PARA ACTUALIZAR LOS USERS
const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body
        const { id } = req.params
        const user = await User.findOne({ where: { id } })
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            })
        }
        const updatedUser = await user.update({ name, email })
        res.status(200).json({
            status: 'succes',
            data: { updatedUser }
        })

    } catch (error) {
        console.log(error)

    }
}

//FUNCION PARA ELIMINAR LOS USERS
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ where: { id } })
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            })
        }
        const deleteUser = await user.update({ status: 'Deleted' })
        res.status(204).json({
            status: 'succes'
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser }