const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create a booking
router.post('/', async (req, res) => {
  const { carId, startDate, endDate } = req.body;
  try {
    const booking = new Booking({ carId, startDate, endDate });
    await booking.save();
    res.status(201).json({ success: true, message: 'Booking created' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
