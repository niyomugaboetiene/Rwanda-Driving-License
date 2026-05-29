import express from "express";
import Candidate from "../schema/CandidateSchema.js";

const router = express.Router();

router.post('/addCandidate', async (req, res) => {
    try {
            // CandidateNationalId (PK), FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber
        const { CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber } = req.body;

        console.log( CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber);
        if (!CandidateNationalId || !FirstName || !LastName || !Gender || !DOB || !ExamDate || !PhoneNumber) {
           return res.status(400).json({ message: 'Fill out missing fields' });
        }

        const isPhoneExist = await Candidate.find({ PhoneNumber });

        if (isPhoneExist.length > 0) {
            return res.status(403).json({ message: 'Phone number is taken' });
        }

        const newCandidate = await Candidate.create({ CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber });

        return res.status(201).json({ message: 'New candidate added successfully', condidate: newCandidate });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/list', async (req, res) => {
    try {
        const list = await Candidate.find();

        if (list.length === 0){
            return res.status(404).json({ message: 'No cnadidate in system' });
        }

        return res.status(200).json({ message: 'Candidates', candidate: list });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/list/:_id', async (req, res) => {
    try {
        const _id = req.params._id;

        const list = await Candidate.findById({ _id });

        if (list.length === 0){
            return res.status(404).json({ message: 'No candidate in system' });
        }

        return res.status(200).json({ message: 'Candidate', candidate: list });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/update/:_id', async (req, res) => {
    try {
    
      const _id = req.params._id;

        const { CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber } = req.body;

        let FieldsToUpdate = {};

        if (CandidateNationalId) FieldsToUpdate.CandidateNationalId = CandidateNationalId;
        if (FirstName) FieldsToUpdate.FirstName = FirstName;
        if (LastName) FieldsToUpdate.LastName = LastName;
        if (Gender) FieldsToUpdate.Gender = Gender;
        if (ExamDate) FieldsToUpdate.ExamDate = ExamDate;
        if (DOB) FieldsToUpdate.DOB = DOB;
        if (PhoneNumber) {
            const isPhoneExist = await Candidate.find({ PhoneNumber });
            if (isPhoneExist > 0) {
                return res.status(403).json({ message: 'Phone number is taken' });
            }
            FieldsToUpdate.PhoneNumber = PhoneNumber;
        };

        const Updated = await Candidate.findByIdAndUpdate(_id, FieldsToUpdate, { new: true });

        return res.status(200).json({ message: 'Updated', update: Updated });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/delete/:_id', async (req, res) => {
    try {
        const _id = req.params._id;

        await Candidate.findByIdAndDelete(_id);

        return res.status(200).json({ message:'deleted successfully' });
    } catch (err) {
        console.error(err);
        return req.status(500).json({ message: 'Internal server error' });
    }
});

export default router;