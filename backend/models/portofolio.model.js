import mongoose from "mongoose";

const portofolioSchems = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    briefDescription: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Portofolio = mongoose.model('Portofolio', portofolioSchems);

export default Portofolio;