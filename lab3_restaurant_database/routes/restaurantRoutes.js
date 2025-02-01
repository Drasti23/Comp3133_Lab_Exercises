const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();


router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  try {
    const cuisine = req.params.cuisine; 
    console.log('Cuisine requested:', cuisine); 


    const restaurants = await Restaurant.find({ cuisine: cuisine });

    if (!restaurants.length) {
      return res.status(404).json({ message: 'No restaurants found for this cuisine' });
    }

    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants by cuisine:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


router.get('/restaurants/sort', async (req, res) => {
  try {
    const sortBy = req.query.sortBy === 'DESC' ? -1 : 1; // Determine sort order
    const restaurants = await Restaurant.find({}, { restaurant_id: 1, cuisine: 1, name: 1, city: 1 })
      .sort({ restaurant_id: sortBy });
    res.json(restaurants);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


router.get('/restaurants/Delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find(
      { cuisine: 'Delicatessen', city: { $ne: 'Brooklyn' } },
      { cuisine: 1, name: 1, city: 1, _id: 0 }
    ).sort({ name: 1 });
    res.json(restaurants);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
