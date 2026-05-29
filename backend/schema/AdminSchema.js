import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    // LicenseExamCategory, ObtainedMarks/20, Decision
    AdminName: { type: String, required: true },
    Password: { type: String, required: true },
});

const Admins = mongoose.model("admins", AdminSchema);

export default Admins;