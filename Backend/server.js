const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
require('dotenv').config({
    path: 'Backend/config/.env'
}); // Load environment variables
const ConnectDB = require('./db/Database');
const ErrorHandler = require('./utils/errorHandler');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({useTempFiles: true}));

// config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
      path: 'Backend/.env' 
    });
  };

// Handling uncathced exceptions
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Create server
const port = process.env.PORT ; 
const server = app.listen(port, () => {
  console.log(`Server started on PORT: ${port} in ${process.env.NODE_ENV || 'development'} mode.`); 
});

ConnectDB();

app.use(ErrorHandler);
// Handling unhandled promise rejections
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});