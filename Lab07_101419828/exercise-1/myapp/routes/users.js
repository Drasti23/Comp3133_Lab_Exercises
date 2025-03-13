const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Use body-parser middleware to handle form data
router.use(bodyParser.urlencoded({ extended: true })); // for form submissions
router.use(bodyParser.json()); // Optional: if you expect JSON data too

// GET route (for testing GET method)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST route to handle form submission
router.post('/', function(req, res, next) {
  // Access form data from req.body
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;

  // Display the form data in the console
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);

  // Send a response back to the client (Postman)
  res.send('POST received!');
});

module.exports = router;
