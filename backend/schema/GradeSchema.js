import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema({
    CandidateNationalId: { type: Number, ref: "candidates", required: true },
    // LicenseExamCategory, ObtainedMarks/20, Decision
    LicenseExamCategory: { type: String, required: true },
    ObtainedMarks: { type: Number, required: true },
    Decision: { type: String, required: true }
});

const Grade = mongoose.model("grades", GradeSchema);

export default Grade;