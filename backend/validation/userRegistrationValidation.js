const { body } = require('express-validator');
module.exports.registerValidation =[
    body('name').notEmpty().escape().withMessage("Name Is Required"),
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('password').notEmpty().isLength({ min: 5 }).withMessage("Minimum Length Of Password Is 5")
];

module.exports.loginValidation =[
    body('email').isEmail().withMessage('Email is required'),
    body('password').notEmpty().withMessage("Password is required")
]