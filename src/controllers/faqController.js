import FAQ from '../models/faqModels.js';

// Get all FAQs
export const getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json({ title: "FAQ", faqs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new FAQ
export const createFAQ = async (req, res) => {
    const { question, answer } = req.body;
    const newFAQ = new FAQ({ question, answer });

    try {
        const savedFAQ = await newFAQ.save();
        res.status(201).json(savedFAQ);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an FAQ
export const updateFAQ = async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    try {
        const updatedFAQ = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
        if (!updatedFAQ) {
            return res.status(404).json({ message: 'FAQ not found' });
        }
        res.json({ message: 'FAQ Updated' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an FAQ
export const deleteFAQ = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedFAQ = await FAQ.findByIdAndDelete(id);
        if (!deletedFAQ) {
            return res.status(404).json({ message: 'FAQ not found' });
        }
        res.json({ message: 'FAQ deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

  