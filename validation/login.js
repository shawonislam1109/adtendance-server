const { validationResult, check } = require("express-validator");

exports.resultsValidator = (req) => {
  const messages = [];
  if (!validationResult(req).isEmpty()) {
    const errors = validationResult(req).array();
    for (const i of errors) {
      messages.push(i);
    }
  }
  return messages;
};

exports.loginValidator = [
  check("password").notEmpty().withMessage("Password is required"),
  // Custom validation function to check either email or phone number is provided
  (req, res, next) => {
    const { email, phone } = req.body;
    if (!email && !phone) {
      return res
        .status(422)
        .json({ error: "Please provide either email or phone number" });
    }
    next();
  },
  // Additional validation for email and phone number
  check("email").optional().isEmail().withMessage("Invalid email"),
  check("phone").optional().isMobilePhone().withMessage("Invalid phone number"),
  // Validation result handling middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];
