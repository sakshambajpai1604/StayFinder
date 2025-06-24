const bookingSchema = new mongoose.Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  guestId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  checkIn: Date,
  checkOut: Date,
  totalPrice: Number
});
module.exports = mongoose.model('Booking', bookingSchema);