import React from 'react';
import './Appointment.css';  // Import the CSS file

export const Appointment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      patientName: formData.get('patientName'),
      emailAddress: formData.get('emailAddress'),
      contactNumber: formData.get('contactNumber'),
      appointmentDate: formData.get('appointmentDate'),
      appointmentTime: formData.get('appointmentTime'),
      symptoms: formData.get('symptoms'),
    };
    
    console.log('Form submitted with data:', data);
    // Process the form data here, like sending it to the server
  };

  return (
    <div className="appointment-container">
      <div className="appointment-form">
        <h1 className="appointment-header">
          Book an Appointment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="patientName">
              Patient's Full Name
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              aria-label="Patient's full name"
              className="input-field"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              className="input-field"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="relative mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              className="input-field"
              placeholder="+91 xxxxxxxxxx"
              pattern="^\+91\s[1-9]{1}[0-9]{9}$"
              required
            />
          </div>

          {/* Date Field */}
          <div className="relative mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="appointmentDate">
              Book Appointment Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              className="input-field"
              required
            />
          </div>

          {/* Time Field */}
          <div className="relative mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="appointmentTime">
              Appointment Time
            </label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              className="input-field"
              required
            />
          </div>

          {/* Reason Field */}
          <div className="relative mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="symptoms">
              Specify the Symptoms
            </label>
            <textarea
              id="symptoms"
              name="symptoms"
              className="textarea-field"
              placeholder="Describe the specific reason here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-btn"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};
