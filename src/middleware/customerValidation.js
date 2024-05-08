const { body } = require('express-validator');

const createCustomerValidations = [
    body('id').notEmpty().withMessage('id is required'),
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required'),
];

module.exports = createCustomerValidations