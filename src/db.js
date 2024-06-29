require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const POSTGRES_URL = "postgres://postgres:Winner12@@localhost:5433/customers";

const sequelize = new Sequelize(POSTGRES_URL, {
    dialect: 'postgres' // Specify the dialect as 'postgres'
  });

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("Connection Successful");
    } catch (error) {
        console.error("Unable to connect to database: ", error);
    }
}

module.exports = { connectDB, sequelize, Sequelize, DataTypes };