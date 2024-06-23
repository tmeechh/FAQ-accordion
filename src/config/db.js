import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://esantaiwo77:faqaccordion@clusterfasq.8xqybt9.mongodb.net/faq-backend').then(() => console.log("DB Connected"));
}

// mongodb+srv://esantaiwo77:<password>@clusterfasq.8xqybt9.mongodb.net/?