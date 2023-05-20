const { validationResult } = require("express-validator");
const { categoryModel } = require("../models/categoryModel");

class Cateogry {
  async create(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { parentcategory, categoryname, enabled,inmenu } = req.body;
      try {
        const exist = await categoryModel.findOne({ categoryname });
        if (!exist) {
          await categoryModel.create({
            parentcategory,
            categoryname,
            enabled,
            inmenu,
          });
          return res.status(201).json({ msg: "category has been created successfully"});
        } else {
          return res
            .status(401)
            .json({ errors: [{ msg: `${categoryname} is already exist` }] });
        }
      } catch (error) {
        console.log(error.message);
        return res.status(500).json("Internal Server Error");
      }
    } else {
      //validation Failed
      return res.status(401).json({ errors: errors.array() });
    }
  }
}

module.exports = new Cateogry;
