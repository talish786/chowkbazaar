const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var {JWT_SECRET} = require("../config/envConfig");


module.exports.hashedPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashed = await bcrypt.hash(password.toString(), salt);
  return hashed;
};

module.exports.createToken = (user) =>{
    return jwt.sign({user}, JWT_SECRET, { 
        expiresIn: "7d"
      });
}