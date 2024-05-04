var express = require('express');
var router = express.Router();
var updateCustomerController = require('../controller/updateCustomer');

router.put('/:id', (req, res, next) => {
    updateCustomerController(req, res)
});

module.exports = router;