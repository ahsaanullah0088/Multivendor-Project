const express = require('express');
const app = express();

// Load environment variables if not in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: 'Backend/.env' 
  });
}

// ... (Rest of your app's configurations and routes here) 

module.exports = app; 
