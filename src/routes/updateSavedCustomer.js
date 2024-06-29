var express = require('express');
var router = express.Router();
var updateCustomerController = require('../controller/updateCustomer');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.put('/:id', upload.single('file'), (req, res, next) => {
    updateCustomerController(req, res)
});

module.exports = router;