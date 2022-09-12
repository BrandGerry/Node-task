const dotenv = require('dotenv')
const { app } = require('./app')

//DATABASE
const { db } = require('./utils/database.util')

//MODELS
const { initModels } = require('./models/initModels')

//DOTENV
dotenv.config({ path: './config.env' })

const startServer = async () => {
    try {
        //AUTENTICAR
        await db.authenticate()

        //MODELO DE RELACIONES
        initModels()

        //SYNCRONIZAR
        await db.sync()

        const PORT = 4002
        app.listen(PORT, () => {
            console.log('EXPRESS RUNNING')
        })

    } catch (error) {
        console.log(error)
    }
}

startServer()