var express = require('express');
var router = express.Router();
var deleteAllCustomers = require('../controller/deleteAllCustomers');

router.delete('/api/deleteAll', (req, res, next) => {
    deleteAllCustomers(req, res)
});

module.exports = router;