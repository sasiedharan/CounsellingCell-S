const mongoose = require('mongoose');

const counselorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  email: String,
  availableSlots: [Date],  // Array of available slots
});

module.exports = mongoose.model('Counselor', counselorSchema);
