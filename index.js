const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3989;

// imports routes
const setMainRoutes = require("./routes/main-routes");
const setMiddleware = require("./middleware/main-middleware");
const setErrorHandler = require("./error-handler/errorHandler");

// setMiddleware
setMiddleware(app);
// setRoutes
setMainRoutes(app);
// setError
setErrorHandler(app);

//=============|| mongo  bd connection ||================
mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 100,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => {
    return console.log(err);
  });
