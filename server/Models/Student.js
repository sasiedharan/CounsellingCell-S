// Models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  department: String,
  year: String,
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Counselor' },  // Reference to Counselor model
});

module.exports = mongoose.model('Student', studentSchema);
