var { sequelize, DataTypes } = require('../db');

const CustomerModel = sequelize.define("customersList", {
    id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true,
    },
    company_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true,
    },
    quota: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
    },
    address: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    orders: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
    },
},  {
    tableName: "customersList"
});

module.exports = CustomerModel
