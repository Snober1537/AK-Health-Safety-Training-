const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Certificate = require('../models/Certificate');

dotenv.config({ path: '.env' });

// Load certificates data
const certificates = require('../../data/certificates.json');

const importData = async () => {
  try {
    // Connect to database
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Clear existing data
    await Certificate.deleteMany();
    console.log('Existing certificates cleared');

    // Insert new data
    await Certificate.insertMany(certificates);
    console.log('Certificates imported successfully');

    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    await Certificate.deleteMany();
    console.log('Data deleted successfully');
    process.exit();
  } catch (error) {
    console.error('Error deleting data:', error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}