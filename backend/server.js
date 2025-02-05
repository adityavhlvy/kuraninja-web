import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json()); // Allows us to accept json data in the req.body

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.post("/api/portofolios", async (req, res) => {
    const portofolio = req.body; // User will send this data

    if (!portofolio.name || !portofolio.briefDescription || !portofolio.link || !portofolio.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newPortofolio = new Portofolio(portofolio)

    try {
        await newPortofolio.save();
        res.status(201).json({ success: true, message: "Portofolio created successfully", portofolio: newPortofolio });
    } catch (error) {
        console.error("Error in Create Portofolio", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }


});

// Postman Test

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on port 5000 : http://localhost:5000");
});

