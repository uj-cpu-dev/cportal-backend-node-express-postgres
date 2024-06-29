var CustomerModel = require('../model/schemaModel')

const createCustomerController = async (req, res) => {
    try {
        const { id, name, email, phone, address, quota } = req.body;
        const file = req.file;

        const customerData = {
            id : parseInt(id),
            name,
            email,
            phone,
            address,
            createdAt: new Date(),
            quota: parseInt(quota),
            filename: file ? file.originalname : null,
            filetype: file ? file.mimetype : null,
            filedata: file ? file.buffer : null,
        };

        const customer = await CustomerModel.create(customerData);

        res.status(201).json({
            status: "success",
            data: {
                customer,
            },
        });
    } catch (error) {
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