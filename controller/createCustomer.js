var CustomerModel = require('../model/schemaModel')

const createCustomerController = async (req, res) => {
    try {

        const { id, name, email } = req.body;

        const customer = await CustomerModel.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
              customer,
            },
        });
    } catch (error) {
        //can't record customer with the same name
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({
                status: "error",
                message: error.message,
            });
        }

        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

module.exports = createCustomerController