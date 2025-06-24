const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

router.get('/', async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

router.get('/:id', async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.json(listing);
});

router.post('/', async (req, res) => {
  const listing = new Listing(req.body);
  await listing.save();
  res.status(201).json(listing);
});

module.exports = router;