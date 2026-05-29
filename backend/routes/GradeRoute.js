import express from "express";
import Grade from "../schema/GradeSchema";

const router = express.Router();

router.post('/addGrade', async (req, res) => {
    try {
            // CandidateNationalId, LicenseExamCategory, ObtainedMarks/20, Decision
        const { CandidateNationalId, LicenseExamCategory, ObtainedMarks, Decision } = req.body;

        if (!CandidateNationalId || !LicenseExamCategory || !ObtainedMarks || !Decision) {
           return res.status(400).json({ message: 'Fill out missing fields' });
        }

        const newGrade = await Grade.create({ CandidateNationalId, LicenseExamCategory, ObtainedMarks, Decision });

        return res.status(201).json({ message: 'New Grade added successfully', grade : newGrade });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/list', async (req, res) => {
    try {
        const list = await Grade.find();

        if (list.length === 0){
            return res.status(404).json({ message: 'NO Grade in system' });
        }

        return res.status(200).json({ message: 'Grades', grade: list });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/list/:_id', async (req, res) => {
    try {
        const _id = req.params._id;

        const list = await Grade.findById({ _id });

        if (list.length === 0){
            return res.status(404).json({ message: 'NO Grade in system' });
        }

        return res.status(200).json({ message: 'Grades', grade: list });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/update/:_id', async (req, res) => {
    try {
    
      const _id = req.params._id;

      const { CandidateNationalId, LicenseExamCategory, ObtainedMarks, Decision } = req.body;

        let FieldsToUpdate = {};

        if (CandidateNationalId) FieldsToUpdate.CandidateNationalId = CandidateNationalId;
        if (LicenseExamCategory) FieldsToUpdate.LicenseExamCategory = LicenseExamCategory;
        if (ObtainedMarks) FieldsToUpdate.ObtainedMarks = ObtainedMarks;
        if (Decision) FieldsToUpdate.Decision = Decision;

        const Updated = await Grade.findByIdAndUpdate(_ID, FieldsToUpdate, { new: true });

        return res.status(200).json({ message: 'Updated', update: Updated });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/delete/:_id', async (req, res) => {
    try {
        const _id = req.params._id;

        await Grade.findByIdAndDelete(_id);

        return res.status(200).json({ message:'Updated successfully' });
    } catch (err) {
        console.error(err);
        return req.status(500).json({ message: 'Internal server error' });
    }
});

export default router;