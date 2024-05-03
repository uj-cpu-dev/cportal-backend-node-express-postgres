var express = require('express');
var router = express.Router();
var findCustomerController = require('../controller/findEachCustomer');

router.get('/:id', (req, res, next) => {
    findCustomerController(req, res)
});

module.exports = router;