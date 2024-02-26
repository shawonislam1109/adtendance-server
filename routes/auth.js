const {
  signupController,
  loginController,
} = require("../controller/authController");
const { loginValidator } = require("../validation/login");
const { signupValidator } = require("../validation/signup");

const authRoutes = require("express").Router();

authRoutes.post("/register", signupValidator, signupController);
authRoutes.post("/login", loginValidator, loginController);

module.exports = authRoutes;
