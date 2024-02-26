const User = require("../model/userModel");

const createUser = ({ name, email, role, password, phone, profilePics }) => {
  const userData = new User({
    name,
    email,
    role,
    password,
    phone,
    profilePics,
  });
  return userData.save();
};

const findUserByProperty = (key, value, key2, value2) => {
  if (key === "_id") {
    return User.findOne({ [key]: value });
  }
  return User.findOne({ $or: [{ [key]: value }, { [key2]: value2 }] });
};

module.exports = { createUser, findUserByProperty };
