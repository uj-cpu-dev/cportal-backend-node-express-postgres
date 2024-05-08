var CustomerModel = require('../model/schemaModel')

const findCustomerController = async (req, res) => {
    try {
        const customer = await CustomerModel.findByPk(req.params.id);

        if(!customer) {
            return res.status(404).json({
                status: "fail",
                message: "Customer not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                customer,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

module.exports = findCustomerController