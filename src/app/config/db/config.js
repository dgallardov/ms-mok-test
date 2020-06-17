
const Sequelize = require('sequelize');
require('dotenv').config()

const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const userDb = process.env.DB_USER;
const userPass = process.env.DB_PASS;
const dialectDb = process.env.DB_DIALECT;
const port = process.env.DB_PORT;


module.exports = new Sequelize(database, userDb, userPass, {
    host: host,
    port: port, 
    dialect: dialectDb,
    dialectOptions: {
        options: {
            trustServerCertificate: false
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });