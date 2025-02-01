const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurantRoutes');

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', restaurantRoutes);




mongoose
  .connect("mongodb+srv://drastiparikh23:Dp%4023063@cluster0.a5txz.mongodb.net/restaurantDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
