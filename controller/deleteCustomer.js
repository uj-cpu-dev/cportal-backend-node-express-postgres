var CustomerModel = require('../model/schemaModel')

const deleteCustomerController = async (req,res) => {
    try {
        const result = await CustomerModel.destroy({
            where: { id: req.params.id },
            force: true,
        });

        if (result === 0) {
            return res.status(404).json({
                status: "fail",
                message: "Customer not found",
            });
        }

        // to return to client
        res.status(200).json({
           status: "success",
           message: "Customer deleted successfully" 
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

module.exports = deleteCustomerController;