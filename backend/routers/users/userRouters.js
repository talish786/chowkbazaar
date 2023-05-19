const express = require("express");

const { body, validationResult } = require('express-validator');

const {registerValidation,loginValidation} = require("../../validation/userRegistrationValidation");

const {register,login} = require("../../controllers/userRegisterController");

const router = express.Router();

router.post("/register",registerValidation,register);

router.post("/login",loginValidation,login);

module.exports = router;