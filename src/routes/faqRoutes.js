import express from 'express';
import { getAllFAQs, createFAQ, updateFAQ, deleteFAQ } from '../controllers/faqController.js';

const router = express.Router();

// Get all FAQs
router.get('/faqs', getAllFAQs);

// Create a new FAQ
router.post('/faqs', createFAQ);

// Update an FAQ
router.put('/:id', updateFAQ);

// Delete an FAQ
router.delete('/:id', deleteFAQ);

export default router;

