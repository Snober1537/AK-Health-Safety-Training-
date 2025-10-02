// config/db.js - Database Connection Logic

const mongoose = require('mongoose');

/**
 * Connects to the MongoDB database using the MONGODB_URI from the .env file.
 */
const connectDB = async () => {
  try {
    // The connection string is read from the environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;