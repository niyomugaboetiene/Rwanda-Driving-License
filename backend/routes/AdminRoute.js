import express from "express";
import Admin from "../schema/AdminSchema.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post('/register' , async (req, res) => {
    try {
        const { AdminName, Password } = req.body;


        if (!AdminName || !Password) {
            return res.status(400).json({ message: 'fill out missing fields' });
        }

        const isNameExist = await Admin.findOne({ AdminName });

        if (isNameExist) {
            return res.status(403).json({ message: 'User name is already taken' });
        } 

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        const newAdmin = await Admin.create({ AdminName, Password: hashedPassword });

        return res.status(201).json({ message: 'Created successfully', admin: newAdmin });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error '})
    }
});


router.post('/login', async (req, res) => {
    try {
        const { AdminName, Password } = req.body;

        if (!AdminName || !Password) {
            return res.status(400).json({ message: 'Fill out missing fields' });
        }

        const isNameExist = await Admin.findOne({ AdminName });

        if (!isNameExist) {
            return res.status(404).json({ message: 'Invalid username' });
        }

        const hashedPassword = await isNameExist.Password;

        const isPasswordCorrect = await bcrypt.compare(Password, hashedPassword);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Incorrect Password' });
        }

        req.session.admin = {
          id: isNameExist._id,
          name: isNameExist.AdminName
        }

        return res.status(200).json({ message: 'Logged in successfully', admin: req.session.admin });
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: 'Internal server error' });
    }
});


router.post('/logout', async (req, res) => {
    try {
         req.session.destroy((err) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: 'Failed to logout' });
            }

            return res.status(200).json({ message: 'Logged out successfully' });
         })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


export default router;