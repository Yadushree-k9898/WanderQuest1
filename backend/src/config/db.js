// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



// connectDB.js

const mongoose = require("mongoose");

const connectDB = async () => {
  const maxRetries = 5;  // Set maximum retry attempts
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB Connected");
      break;  // Exit the loop if connection is successful
    } catch (err) {
      attempt++;
      console.error(`❌ Error connecting to MongoDB (Attempt ${attempt}/${maxRetries}):`, err.message);
      if (attempt === maxRetries) {
        console.error("🚨 Max retries reached, exiting...");
        process.exit(1);  // Exit the process after max retries
      }
      console.log("🔄 Retrying in 5 seconds...");
      await new Promise((resolve) => setTimeout(resolve, 5000));  // Retry after 5 seconds
    }
  }
};

module.exports = connectDB;
