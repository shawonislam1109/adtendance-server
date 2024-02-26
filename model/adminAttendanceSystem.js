const { Schema, model } = require("mongoose");

const adminAttendanceSystemSchema = new Schema(
  {
    timeLimit: Number,
    status: String,
    createAt: Date,
  },
  {
    timestamps: true,
  }
);

const AdminAttendance = model("adminAttendance", adminAttendanceSystemSchema);

module.exports = AdminAttendance;
