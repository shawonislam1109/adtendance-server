const { Schema, model, Types } = require("mongoose");

const profileSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
    avatar: String,
    userId: {
      type: Schema.Types.ObjectId(),
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Profile = model("profile", profileSchema);

module.exports = Profile;
