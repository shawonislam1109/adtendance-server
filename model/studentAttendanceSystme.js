const { Schema, model } = require("mongoose");

const studentAttendanceSystemSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId(),
      ref: "User",
    },
    adminAttendanceId: {
      type: Schema.Types.ObjectId(),
      ref: "AdminAttendance",
    },
    createAt: new Date(),
  },
  {
    timestamps: true,
  }
);

const StudentAttendance = model(
  "adminAttendance",
  studentAttendanceSystemSchema
);

module.exports = StudentAttendance;
