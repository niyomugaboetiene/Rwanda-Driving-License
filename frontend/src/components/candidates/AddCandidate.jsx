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
            const res = await axios.post("http://localhost:5000/candidates/addCandidate", { CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber });
            setMessage(res.data.message);
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || "Error occured";
            setError(errorMessage);
        }
    }

    return (
        <div className="bg-green-50 min-h-screen flex justify-center items-center">
            <div className="bg-white p-4 rounded-xl w-1/4">
                <h1 className="text-xl text-center font-bold text-green-500 mb-3">Add Candidate Portal</h1>
                {error && (
                    <p>{error}</p>
                )}
                {message && (
                    <p>{message}</p>
                )}
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Candidate National Id</label>
                    <input 
                      type="number" 
                      className="w-full py-3 border rounded-full px-3 bg-gray-100"
                      placeholder="Enter National Id"
                      onChange={(e) => setCandidateNationalId(e.target.value)}
                      required={true}
                    />
                </div>
                
                <div>
                    <label className="text-lg font-bold text-green-500 block">First Name</label>
                    <input 
                      type="text" 
                      className="w-full py-3 border border-green-500 rounded-full px-3"
                      placeholder="Enter First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      required={true}
                    />
                </div>
                
                <div>
                    <label className="text-lg font-bold text-green-500 block">Last Name </label>
                    <input 
                      type="text" 
                      className="w-full py-3 border border-green-500 rounded-full px-3"
                      placeholder="Enter Last Name"
                      required={true}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                
                <div>
                    <label className="text-lg font-bold text-green-500 block">Gender</label>
                    <input 
                      type="text" 
                      className="w-full py-3 border border-green-500 rounded-full px-3"
                      placeholder="Enter Gender"
                      required={true}
                      onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                
                <div>
                    <label className="text-lg font-bold text-green-500 block">Date Of Birth</label>
                    <input 
                      type="date" 
                      className="w-full py-3 border border-green-500 rounded-full px-3"
                      required={true}
                      onChange={(e) => setDOB(e.target.value)}
                    />
                </div>
                
                <div>
                    <label className="text-lg font-bold text-green-500 block">Exam Date</label>
                    <input 
                      type="date" 
                      className="w-full py-3 border border-green-500 rounded-full px-3"
                      required={true}
                      placeholder="Enter National Id"
                      onChange={(e) => setExamDate(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-lg font-bold text-green-500 block">Phone Number</label>
                    <input 
                      type="text"
                      className="w-full py-3 border border-green-500 rounded-full px-3"
                      required={true}
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