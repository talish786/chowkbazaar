const express = require("express");

const { body, validationResult } = require('express-validator');

const {createCategoryValidation} = require("../validation/categoryValidation");

const Cateogry = require("../controllers/Cateogry");

const router = express.Router();

router.post("/create",createCategoryValidation,Cateogry.create);

module.exports = router;