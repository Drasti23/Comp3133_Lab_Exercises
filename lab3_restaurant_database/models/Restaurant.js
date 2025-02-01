const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  restaurant_id: String,
  name: String,
  cuisines: String,
  city: String,
  address: {
    street: String,
    zipcode: String,
  },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
