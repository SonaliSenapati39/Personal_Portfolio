import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection (gracefully handle if no URI is provided)
const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected to Cinematic Portfolio DB'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.log('No MONGO_URI provided. Running without database connection.');
}

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Cinematic Portfolio Backend is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
