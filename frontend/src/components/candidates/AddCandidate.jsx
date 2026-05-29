import { useState, useEffect } from "react";
import axios from "axios";

const AddCandidate = () => {
    // CandidateNationalId (PK), FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber
    const [CandidateNationalId, setCandidateNationalId] = useState(0);
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [ExamDate, setExamDate] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
}