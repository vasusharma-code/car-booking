// const mongoose = require('mongoose');

// const CarSchema = new mongoose.Schema({
//   make: { type: String, required: true },
//   model: { type: String, required: true },
//   year: { type: Number, required: true },
//   pricePerDay: { type: Number, required: true },
// });

// module.exports = mongoose.model('Car', CarSchema);

const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  model: String,
  description: String,
  image: String, // URL or path to the image
});

module.exports = mongoose.model('Car', CarSchema);
