const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
// register user function
module.exports.registerUser = async function (req, res) {
  try {
    let { email, password, fullname } = req.body;
// checking if user already exists
    let user = await userModel.findOne({ email: email });
    
    if (user) {
      req.flash("error", "You already have an account, please login.");
      return res.redirect("/");
    }
// hashing the password
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });

          let token = generateToken(user);
          res.cookie("token", token);

          res.redirect("/shop");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};
// login user function
module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email: email });
  if (!user) {
    req.flash("error", "Email or Password incorrect");
    return res.redirect("/");
  }
// comparing the password
  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = generateToken(user);
      res.cookie("token", token);
      //rendering the shop page after login
      res.redirect("/shop");
    } else {
      req.flash("error", "Email or Password incorrect");
      return res.redirect("/");
    }
  });
};
// logout function
module.exports.logout = function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
};