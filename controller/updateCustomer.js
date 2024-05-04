var CustomerModel = require('../model/schemaModel')

const updateCustomerController = async (req, res) => {
    try {
        const result = await CustomerModel.update(
            { ...req.body, updatedAt: Date.now() },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        if (result[0] === 0) {
            return res.status(404).json({
                status: "fail",
                message: "Customer not found",
            });
        }

        //to retrieve the updated record
        const customer = await CustomerModel.findByPk(req.params.id);

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

module.exports = updateCustomerController;