const mongoose = require('mongoose');

const url = process.env.NODE_ENV === "production" ? 
  process.env.PROD_MONGO_URL : 
  process.env.DEV_MONGO_URL;

mongoose.connect(url)
  .then(() => {
    console.log("✅ Connected to the MongoDB database");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

module.exports = mongoose;
