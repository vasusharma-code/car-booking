const express = require('express');
const router = express.Router();
const Car = require('../models/Car'); // Adjust the path as needed

router.get('/', async (req, res) => {
  try {
    const { make, model, year, minPrice, maxPrice } = req.query;

    const filters = {};
    if (make) filters.make = make;
    if (model) filters.model = model;
    if (year) filters.year = year;
    if (minPrice || maxPrice) {
      filters.pricePerDay = {};
      if (minPrice) filters.pricePerDay.$gte = minPrice;
      if (maxPrice) filters.pricePerDay.$lte = maxPrice;
    }

    const cars = await Car.find(filters);
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
