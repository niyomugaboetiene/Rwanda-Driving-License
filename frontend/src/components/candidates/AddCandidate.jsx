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
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleAddCandidate = async () => {
        try {
            console.log("received fields", CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber)
            if (!CandidateNationalId || !FirstName || !LastName || !Gender || !DOB || !ExamDate || !PhoneNumber) {
                setMessage("Fill out missing fields");
            }

            const res = await axios.post("http://localhost:5000/candidates/addCandidate", { CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate });
            setMessage(res.data.message);
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || "Error occured";
            setError(errorMessage);
        }
    }

    return (
        <div>
            <div>
                {error && (
                    <p>{error}</p>
                )}
                {message && (
                    <p>{message}</p>
                )}
                <div>
                    <label htmlFor="">Candidate National Id</label>
                    <input 
                      type="number" 
                      placeholder="Enter National Id"
                      onChange={(e) => setCandidateNationalId(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter First Name"
                      onChange={(e) => FirstName(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="">Last Name </label>
                    <input 
                      type="text" 
                      placeholder="Enter Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="">Gender</label>
                    <input 
                      type="text" 
                      placeholder="Enter Gender"
                      onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="">Date Of Birth</label>
                    <input 
                      type="date" 
                      onChange={(e) => setDOB(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="">Exam Date</label>
                    <input 
                      type="date" 
                      placeholder="Enter National Id"
                      onChange={(e) => setExamDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <input 
                      type="text" 
                      placeholder="Enter Phone Number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <button onClick={handleAddCandidate}>Add</button>
            </div>
        </div>
    )
}

export default AddCandidate;