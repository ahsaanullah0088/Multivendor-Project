// server.js
const app = require('./app'); // Import the app from app.js
const connectDB = require('./db/Database');
require('dotenv').config({
  path: 'Backend/config/.env' // Load environment variables
});
connectDB();
// Handling uncaught exceptions
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Start the server
const port = process.env.PORT || 5000; // Default to port 5000 if not specified
const server = app.listen(port, () => {
  console.log(`Server started on PORT: ${port} in ${process.env.NODE_ENV || 'development'} mode.`);
});

// Handling unhandled promise rejections
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
