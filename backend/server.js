const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('../backend/routes/Auth');
const carRoutes = require('./routes/cars');
const bookingRoutes = require('./routes/bookings');
const checkoutRoutes = require('./routes/checkout');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/checkout', checkoutRoutes);

// Handle root route
app.get('/', (req, res) => {
  res.send('Welcome to the Car Booking App');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Connect to MongoDB
// mongoose.connect(process.env.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error(err));

mongoose.connect(process.env.DB_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error('Database connection error:', err));
