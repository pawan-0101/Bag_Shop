const jwt = require("jsonwebtoken");
// this function will generate token and verify user by the id and email
const generateToken = (user) => {
  return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY);
};
// then export it
module.exports.generateToken = generateToken;