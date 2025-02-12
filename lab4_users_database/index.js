const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/userModel');

const app = express();
const PORT = 8081;

const MONGO_URI = "mongodb+srv://drastiparikh23:Dp%4023063@cluster0.a5txz.mongodb.net/Lab4?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

app.use('/users', userRoutes);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));


const seedUsers = async () => {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const users = require('./UsersData.json');
      await User.insertMany(users);
      console.log("✅ Users seeded successfully");
    } else {
      console.log("ℹ️ Users already exist in the database");
    }
  } catch (error) {
    console.error("❌ Error seeding users:", error.message);
  }
};

seedUsers();


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
