const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { createUser, findUserByProperty } = require("./user");
const { error } = require("../utils/error");

const registerService = async (
  name,
  email,
  role,
  password,
  phone,
  profilePics
) => {
  const slat = await bcrypt.genSalt(15);
  const hashPassword = await bcrypt.hash(password, slat);
  const user = await createUser({
    name,
    email,
    role,
    password: hashPassword,
    phone,
    profilePics,
  });

  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "5h",
  });

  return { data: user, token };
};

// login service
const loginService = async (email, phone, password) => {
  const findUser = await findUserByProperty("email", email, "phone", phone);

  if (!findUser) {
    throw error("Invalid credentials", 401);
  }

  const matchPassword = await bcrypt.compare(password, findUser.password);

  if (!matchPassword) {
    throw error("Invalid credentials", 401);
  }

  const token = jwt.sign({ userId: findUser._id }, process.env.SECRET_KEY, {
    expiresIn: "5h",
  });

  return { findUser, token };
};

module.exports = { registerService, loginService };
