const { Sequelize } = require("sequelize");
const dotenv = require('dotenv')
//RAIZ DEL PROYECTO
dotenv.config({ path: './config.env' })


//ESTABLECER CONEXION CON BD
const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB,
    logging: false,
})

module.exports = { db } 