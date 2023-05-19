const express = require("express");

const { body, validationResult } = require('express-validator');

const {registerValidation} = require("../../validation/userRegistrationValidation");

const {register} = require("../../controllers/userRegisterController");

const router = express.Router();

router.post("/register",registerValidation,register);

module.exports = router;