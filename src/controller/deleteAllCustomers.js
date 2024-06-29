var {sequelize} = require('../db');
var Customer = require('../model/schemaModel');

const deleteAllCustomerController = async(req, res) => {
    /*const tableName = "customersPortal";

    if (!tableName) {
        return res.status(400).json({ error: 'Table name is required' });
    }

    try {
        const queryInterface = sequelize.getQueryInterface();
        const tableExists = await queryInterface.describeTable(tableName).then(() => true).catch(() => false);

        if (!tableExists) {
            return res.status(400).json({ error: 'Invalid table name' });
        }

        await sequelize.query(`DELETE FROM "${tableName}"`, { type: sequelize.QueryTypes.DELETE });

        res.status(200).json({ message: 'All records deleted successfully' });
    } catch (err) {
        console.error('Error deleting records:', err);
        res.status(500).json({ error: 'An error occurred while deleting records' });
    }*/
    const { ids } = req.body;

    console.log(req.body)

    if (!ids || !Array.isArray(ids)) {
        return res.status(400).json({ error: 'Invalid or missing IDs' });
    }

    try {
        await Customer.destroy({
            where: {
                id: ids
            }
        });

        res.status(200).json({ message: 'Customers deleted successfully' });
    } catch (error) {
        console.error('Error deleting customers:', error);
        res.status(500).json({ error: 'Failed to delete customers' });
    }
}

module.exports = deleteAllCustomerController