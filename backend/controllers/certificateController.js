const Certificate = require('../models/Certificate');

// @desc    Issue a certificate
// @route   POST /api/certificates
// @access  Protected
exports.issueCertificate = async (req, res) => {
  try {
    const { user, course, certNumber } = req.body;

    const certificate = new Certificate({
      user,
      course,
      certNumber,
      dateIssued: new Date(),
    });

    const savedCert = await certificate.save();
    res.status(201).json(savedCert);
  } catch (error) {
    res.status(500).json({ message: 'Error issuing certificate', error });
  }
};

// @desc    Search certificate by certNumber
// @route   GET /api/certificates/:certNumber
// @access  Public
exports.getCertificateByNumber = async (req, res) => {
  try {
    const cert = await Certificate.findOne({ certNumber: req.params.certNumber })
      .populate('user')
      .populate('course');

    if (!cert) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.json(cert);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving certificate', error });
  }
};