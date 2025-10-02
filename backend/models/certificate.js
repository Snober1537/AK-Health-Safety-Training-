const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema(
  {
    certificateNo: {
      type: String,
      required: [true, "Certificate number is required"],
      unique: true,
      trim: true,
    },
    studentName: { 
      type: String 
    },
    courseName: {
      type: String,
      required: [true, "Course name is required"],
    },
    issueDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    authorizedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "certificates" }
);

module.exports = mongoose.model('Certificate', certificateSchema);