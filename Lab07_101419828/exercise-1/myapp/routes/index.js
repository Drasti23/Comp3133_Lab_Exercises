const express = require('express');
const router = express.Router();

// Root route handler
router.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});


module.exports = router;
