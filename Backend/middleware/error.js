const ErrorHandler = require('../utils/ErrorHandler'); // Import the ErrorHandler class

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  // Handle specific errors
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(400, message);
  }

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(400, message);
  }

  if (err.name === 'JsonWebTokenError') {
    const message = `JSON Web Token is invalid, Try again`;
    err = new ErrorHandler(400, message);
  }

  if (err.name === 'TokenExpiredError') {
    const message = `JSON Web Token is expired, Try again`;
    err = new ErrorHandler(401, message); // Unauthorized
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};