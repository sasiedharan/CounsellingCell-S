const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },  // Student reference
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Counselor' },  // Counselor reference
  appointmentDate: Date,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
