import express from 'express';
import { getAllFAQs, createFAQ, updateFAQ, deleteFAQ } from '../controllers/faqController.js';

const router = express.Router();

// Get all FAQs
router.get('/', getAllFAQs);

// Create a new FAQ
router.post('/', createFAQ);

// Update an FAQ
router.put('/:id', updateFAQ);

// Delete an FAQ
router.delete('/:id', deleteFAQ);

export default router;

