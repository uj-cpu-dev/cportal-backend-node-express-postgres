require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const POSTGRES_URL = "postgres://postgres:password@postgres-service:5432/postgres";

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