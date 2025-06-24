const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json(booking);
});

module.exports = router;