// app.js
const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const ErrorHandler = require('./utils/ErrorHandler');
const app = express();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use("/" , express.static("uploads"));
app.use(cors());

const user = require("./controller/user");
app.use("/api/v2/user", user);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
      success: false,
      message,
  });
});



module.exports = app;
