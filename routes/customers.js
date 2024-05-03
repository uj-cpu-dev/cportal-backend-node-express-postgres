var express = require('express');
var router = express.Router();
var findAllCustomersController = require('../controller/findAllCustomers');

/* GET all customers.*/
router.get('/', (req, res, next) => {
    findAllCustomersController(req, res)
});

module.exports = router;