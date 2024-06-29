var express = require('express');
var router = express.Router();
var createCustomerController = require('../controller/createCustomer');
var validate = require('../middleware/validate');
var cutomerValidation = require('../middleware/customerValidation')
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), validate(cutomerValidation), async(req, res, next) => {
    createCustomerController(req, res);
});

module.exports = router;