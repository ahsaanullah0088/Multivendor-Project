const mongoose = require('mongoose');
require('dotenv').config({
    path: '/Backend/config/.env'
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit with error code
  }
};

module.exports = connectDB;