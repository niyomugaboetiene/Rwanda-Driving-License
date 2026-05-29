import express from "express";
import Admin from "../schema/AdminSchema.js";


const router = express.Router();

router.post('/register' , async (req, res) => {
    try {
        const { AdminName, Password } = req.body;


        if (!AdminName || !Password) {
            return res.status(400).json({ message: 'fill out missing fields' });
        }
    }
})