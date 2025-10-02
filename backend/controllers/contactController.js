const Contact = require('../models/Contact');

// @desc    Submit a contact form
// @route   POST /api/contacts
// @access  Public
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({
      name,
      email,
      message,
      date: new Date(),
    });

    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error });
  }
};

// @desc    Get all contact submissions (admin only)
// @route   GET /api/contacts
// @access  Protected
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving contacts', error });
  }
};