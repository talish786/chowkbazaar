const { validationResult } = require("express-validator");
const { userModel } = require("../models/userModel");
const { hashedPassword , createToken} = require("../services/authService");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await userModel.findOne({email});
      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await userModel.create({ 
          name,
          email,
          password:hashed
        });

        const token = createToken({id:user._id,name:user.name});
        return res.status(201).json({ msg: "Your account has been created successfully",token});
      } else {
        return res.status(401).json({ errors: [{msg: `${email} is already taken`}]})
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Internal Server Error");
    }
  } else {
    //validation Failed
    return res.status(400).json({ errors: errors.array() });
  }
};
