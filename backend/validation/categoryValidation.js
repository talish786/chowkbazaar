const { body } = require('express-validator');
module.exports.createCategoryValidation =[
    body('categoryname').notEmpty().escape().withMessage("Name Is Required")
];