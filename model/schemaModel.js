var { sequelize, DataTypes } = require('../db');

const CustomerModel = sequelize.define("customersList", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
        allowNull: false,
        unique: true,
    },
    company_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    quota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    address: {
        type: DataTypes.JSON,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    orders: {
        type: DataTypes.JSON,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
},  {
    tableName: "customersList"
});

module.exports = CustomerModel
