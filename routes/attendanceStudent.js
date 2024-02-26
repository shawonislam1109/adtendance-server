const { verifyToken } = require("../middleware/jwt-verify");

const attendanceStudentRouters = require("express").Router();

attendanceStudentRouters.get("/", verifyToken, (req, res, next) => {
  res.json({ message: "yes verify is working" });
});

module.exports = attendanceStudentRouters;
