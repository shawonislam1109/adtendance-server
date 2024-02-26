const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: [String],
      default: ["student"],
    },
    accountStatus: String,
    profile: {
      type: Types.ObjectId,
      ref: "Profile",
    },
    profilePics: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("Users", userSchema);
module.exports = User;
