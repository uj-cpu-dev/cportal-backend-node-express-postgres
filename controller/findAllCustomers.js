var CustomerModel = require('../model/schemaModel')


const findAllCustomersController = async( req, res ) => {
    try {
        const customers = await CustomerModel.findAll();

        res.status(200).json({
            status: "success",
            results: customers.length,
            customers,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

module.exports = findAllCustomersController