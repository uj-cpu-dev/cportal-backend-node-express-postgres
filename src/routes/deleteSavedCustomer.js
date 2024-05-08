var express = require('express');
var router = express.Router();
var deleteCustomerController = require('../controller/deleteCustomer');

router.delete('/:id', (req, res, next) => {
    deleteCustomerController(req, res)
});

module.exports = router;