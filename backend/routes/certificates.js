const express = require('express');
const Certificate = require('../models/Certificate');
const { requireAdmin, requireAuth } = require('../utils/jwt');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Validation middleware for certificate number
const validateCertificateNo = [
  body('certificateNo')
    .notEmpty()
    .withMessage('Certificate number is required')
    .isLength({ min: 3 })
    .withMessage('Certificate number must be at least 3 characters long')
    .matches(/^[A-Z0-9\-]+$/)
    .withMessage('Certificate number can only contain uppercase letters, numbers, and hyphens')
];

// Validation middleware for creating/updating certificates
const validateCertificate = [
  body('certificateNo')
    .notEmpty()
    .withMessage('Certificate number is required')
    .isLength({ min: 3 })
    .withMessage('Certificate number must be at least 3 characters long')
    .matches(/^[A-Z0-9\-]+$/)
    .withMessage('Certificate number can only contain uppercase letters, numbers, and hyphens'),
  body('studentName')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Student name must be less than 100 characters'),
  body('courseName')
    .notEmpty()
    .withMessage('Course name is required')
    .isLength({ max: 100 })
    .withMessage('Course name must be less than 100 characters'),
  body('issueDate')
    .notEmpty()
    .withMessage('Issue date is required')
    .isISO8601()
    .withMessage('Issue date must be a valid ISO date'),
  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['Valid', 'Expired', 'Revoked'])
    .withMessage('Status must be Valid, Expired, or Revoked'),
  body('authorizedBy')
    .notEmpty()
    .withMessage('Authorized by is required')
    .isLength({ max: 100 })
    .withMessage('Authorized by must be less than 100 characters')
];

// GET certificate by number (public endpoint)
router.get("/:certificateNo", validateCertificateNo, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        valid: false, 
        message: 'Invalid certificate number',
        errors: errors.array()
      });
    }
    
    // Convert to uppercase for consistency
    const certNo = req.params.certificateNo.toUpperCase();
    
    const cert = await Certificate.findOne({ certificateNo: certNo });

    if (!cert) {
      return res.status(404).json({ valid: false, message: "Certificate not found" });
    }

    res.json({ 
      valid: true, 
      certificate: {
        certNumber: cert.certificateNo,
        studentName: cert.studentName,
        courseName: cert.courseName,
        issueDate: cert.issueDate,
        status: cert.status,
        authorizedBy: cert.authorizedBy
      }
    });
  } catch (err) {
    console.error("Error fetching certificate:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST create new certificate (admin only)
router.post("/", requireAdmin, validateCertificate, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: errors.array()
      });
    }
    
    const { certificateNo, studentName, courseName, issueDate, status, authorizedBy } = req.body;
    
    // Check if certificate already exists
    const existingCert = await Certificate.findOne({ certificateNo });
    if (existingCert) {
      return res.status(400).json({ message: "Certificate with this number already exists" });
    }
    
    // Create new certificate
    const certificate = new Certificate({
      certificateNo,
      studentName,
      courseName,
      issueDate,
      status,
      authorizedBy
    });
    
    const savedCert = await certificate.save();
    
    res.status(201).json({
      message: "Certificate created successfully",
      certificate: savedCert
    });
  } catch (err) {
    console.error("Error creating certificate:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT update certificate (admin only)
router.put("/:certificateNo", requireAdmin, validateCertificate, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: errors.array()
      });
    }
    
    const certNo = req.params.certificateNo.toUpperCase();
    const { studentName, courseName, issueDate, status, authorizedBy } = req.body;
    
    // Find and update certificate
    const certificate = await Certificate.findOneAndUpdate(
      { certificateNo: certNo },
      { studentName, courseName, issueDate, status, authorizedBy },
      { new: true, runValidators: true }
    );
    
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    
    res.json({
      message: "Certificate updated successfully",
      certificate
    });
  } catch (err) {
    console.error("Error updating certificate:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// DELETE certificate (admin only)
router.delete("/:certificateNo", requireAdmin, async (req, res) => {
  try {
    const certNo = req.params.certificateNo.toUpperCase();
    
    // Find and delete certificate
    const certificate = await Certificate.findOneAndDelete({ certificateNo: certNo });
    
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    
    res.json({
      message: "Certificate deleted successfully",
      certificateNo: certNo
    });
  } catch (err) {
    console.error("Error deleting certificate:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// GET all certificates (admin only)
router.get("/", requireAdmin, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const certificates = await Certificate.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
      
    const total = await Certificate.countDocuments();
    
    res.json({
      certificates,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error("Error fetching certificates:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;