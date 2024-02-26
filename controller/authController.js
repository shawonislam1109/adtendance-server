const { registerService, loginService } = require("../service/auth");
const jwt = require("jsonwebtoken");

// singUp controller
const signupController = async (req, res, next) => {
  try {
    const { name, email, role, password, phone, profilePics } = req.body;

    const createUser = await registerService(
      name,
      email,
      role,
      password,
      phone,
      profilePics
    );

    res.status(201).json({
      data: createUser.data,
      token: createUser.token,
      message: "successFully user create",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

// login controller
const loginController = async (req, res, next) => {
  try {
    const { email, phone, password } = req.body;

    const validUser = await loginService(email, phone, password);

    res.status(200).json({
      data: validUser.findUser,
      token: validUser.token,
      message: "Successfully logged in",
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

module.exports = { signupController, loginController };
