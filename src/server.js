import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import faqRoutes from './routes/faqRoutes.js'; // Import the FAQ routes


// app config
const app = express()
const port = 6000;

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();


// Routes
app.use('/api/faqs', faqRoutes); // Use the FAQ routes for the API endpoint


app.get("/", (req, res ) => {
    res.send("FAQ API IS WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
})


//mongodb+srv://esantaiwo77:<password>@clusterfasq.8xqybt9.mongodb.net/?