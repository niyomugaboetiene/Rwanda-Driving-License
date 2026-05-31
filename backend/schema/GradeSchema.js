import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "candidates"},
    CandidateNationalId: { type: Number, required: true },
    // CandidateNationalId, LicenseExamCategory, ObtainedMarks/20, Decision
    LicenseExamCategory: { type: String, required: true },
    ObtainedMarks: { type: Number, required: true },
    Decision: { type: String, required: true }
}, { timestamps: true });

const Grade = mongoose.model("grades", GradeSchema);

export default Grade;