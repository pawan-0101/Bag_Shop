const express = require("express");
const router = express.Router();
const isloggedin = require("../Middlewares/isLoggedIn");
const {
  registerUser,
  loginUser,
  logout,
} = require("../Controllers/authController");

router.get("/", function (req, res) {
  res.send("hey it's working");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logout);

module.exports = router;