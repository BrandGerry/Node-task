const { Task } = require('../models/task.model')
const { User } = require('../models/user.model')

//FUNCION TRAER LAS TASK
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ include: { model: User } })
        res.status(200).json({
            status: 'success',
            data: {
                tasks: tasks,
            }
        })

    } catch (error) {
        console.log(error)
    }
}

//FUNCION TRAER LAS TASK POR STATUS
const getStatusTasks = async (req, res) => {
    try {
        const { status } = req.params
        const status2 = `${status}`.toLowerCase()
        if (status2 === 'active' || status2 === 'completed' || status2 === 'late' || status2 === 'cancelled') {
            const tasks = await Task.findAll({ where: { status } })
            return res.status(200).json({
                status: 'sucess',
                data: { tasks }
            })
        }
        else {
            return res.status(404).json({
                status: 'error',
                message: 'Task not found with this status'
            })
        }

    } catch (error) {
        console.log(error)
    }
}

/* const { status } = req.params
        const tasks = await Task.findAll({ where: { status } })
        if (!tasks) {
            return res.status(404).json({
                status: 'error',
                message: 'Task not found with this status'
            })
        }
        res.status(200).json({
            status: 'success',
            data: {
                tasks: tasks,
            }
        }) */

//FUNCION CREAR TASK
const createTask = async (req, res) => {
    try {
        const { title, userId, startDate, limitDate } = req.body
        const newTask = await Task.create({ title, userId, startDate, limitDate })
        res.status(201).json({
            status: 'success',
            data: { newTask },
        })
    } catch (error) {
        console.log(error)
    }
}

//FUNCION PARA ACTUALIZAR LAS TASKS
const updateTask = async (req, res) => {
    try {
        const { task } = req;

        const { finishDate, status } = req.body;

        finishDateDate = new Date(finishDate);


        if (status === "Active") {
            if (finishDateDate < task.limitDate)
                await task.update({ finishDate, status: "Completed" });
            else await task.update({ finishDate, status: "Late" });

            res.status(200).json({
                status: "success",
                data: {
                    task,
                },
            });
        }

        res.status(404).json({
            status: "error",
            message: "taks no active",
        });
    } catch (error) {
        console.log(error);
    }
};

//FUNCION PARA ELIMINAR LOS TASKS
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOne({ where: { id } })
        if (!task) {
            return res.status(404).json({
                status: 'error',
                message: 'Task not found'
            })
        }
        const deleteTask = await task.update({ status: 'Cancelled' })
        res.status(204).json({
            status: 'succes'
        })

    } catch (error) {
        console.log(error)
    }
}


module.exports = { getAllTasks, createTask, updateTask, deleteTask, getStatusTasks }