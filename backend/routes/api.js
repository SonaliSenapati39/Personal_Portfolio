import express from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // In a real app, this would save to the DB, but for now we'll mock it if not connected.
    // If the mongoose connection is readyState 1 (connected), we save it.
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ name, email, subject, message });
      await newContact.save();
    }
    
    // Simulate some delay for cinematic loading effect on frontend
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    res.status(201).json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    console.error('Contact Error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
