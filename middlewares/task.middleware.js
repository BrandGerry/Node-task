const { Task } = require('../models/task.model');

const taskExist = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findOne({ where: { id } });

        if (!task) {
            res.status(404).json({
                status: 'error',
                message: 'task no found',
            });
        }

        req.task = task;
        next();

    } catch (error) {
        console.log(error);
    }
};

module.exports = { taskExist };
