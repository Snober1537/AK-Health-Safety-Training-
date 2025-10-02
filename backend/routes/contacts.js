const express = require('express');
const {
  submitContactForm,
  getAllContacts,
} = require('../controllers/contactController');
const { protect, admin } = require('../middleware/auth'); // or adjust path if needed

const router = express.Router();

// Submit contact form (public)
router.post('/', submitContactForm);

// Get all contacts (protected, admin only)
router.get('/', protect, admin, getAllContacts);

module.exports = router;