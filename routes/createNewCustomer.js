var express = require('express');
var router = express.Router();
var createCustomerController = require('../controller/createCustomer');
var validate = require('../middleware/validate');
var cutomerValidation = require('../middleware/customerValidation')

router.post('/', validate(cutomerValidation), (req, res, next) => {
    createCustomerController(req, res)
});

module.exports = router;