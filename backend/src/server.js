// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const packageRoutes = require('./routes/packageRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const connectWithRetry = () => {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => console.log('✅ MongoDB Connected'))
//     .catch((error) => {
//       console.error('❌ Error connecting to MongoDB:', error.message);
//       console.log('🔄 Retrying MongoDB connection in 5 seconds...');
//       setTimeout(connectWithRetry, 5000);
//     });
// };

// connectWithRetry();

// app.use('/api', packageRoutes);

// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to the backend API' });
// });

// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// app.use((err, req, res, next) => {
//   console.error('Unhandled Error:', err.message);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const packageRoutes = require('./routes/packageRoutes'); // Ensure correct path

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectWithRetry = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch((error) => {
      console.error('❌ Error connecting to MongoDB:', error.message);
      console.log('🔄 Retrying MongoDB connection in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.use('/api', packageRoutes); // Make sure this is correct

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});


app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
