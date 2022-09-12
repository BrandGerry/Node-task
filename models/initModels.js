const { Task } = require('./task.model')
const { User } = require('./user.model')

const initModels = () => {
    //MODELO DE RELACIONES
    //1 USER <----> M TASKS
    User.hasMany(Task, { foreignKey: 'userId' })
    Task.belongsTo(User)

}

module.exports = { initModels }