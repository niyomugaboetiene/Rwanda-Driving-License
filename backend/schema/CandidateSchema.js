import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema({
    CandidateNationalId: { type: Number, unique: true },
    // CandidateNationalId (PK), FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber (UniqueKey)
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Gender: { type: String, required: true },
    DOB: { type: Date, required: true },
    ExamDate: { type: Date, required: true },
    PhoneNumber: { type: String, required: true, unique: true }
}, { timestamps: true });

const Candidate = mongoose.model("candidates", CandidateSchema);

export default Candidate;