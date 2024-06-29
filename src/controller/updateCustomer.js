var CustomerModel = require('../model/schemaModel')

const updateCustomerController = async (req, res) => {
    try {
        const { id, name, email, phone, address, quota } = req.body;
        const file = req.file;
        const customerData = {
            id : parseInt(id),
            name,
            email,
            phone,
            address,
            quota: parseInt(quota),
            filename: file ? file.originalname : null,
            filetype: file ? file.mimetype : null,
            filedata: file ? file.buffer : null,
            updatedAt: new Date(),
        };
        const result = await CustomerModel.update(
            customerData,
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