const authRoutes = require("./auth");
const attendanceStudentRouters = require("./attendanceStudent");

const routes = [
  {
    path: "/auth",
    handler: authRoutes,
  },
  {
    path: "/student",
    handler: attendanceStudentRouters,
  },
  {
    path: "/",
    handler: (req, res) => {
      res.send("server is running");
    },
  },
];

module.exports = (app) => {
  routes.forEach((route) => {
    if (route.path === "/") {
      app.use(route.path, route.handler);
    } else {
      app.use(route.path, route.handler);
    }
  });
};
