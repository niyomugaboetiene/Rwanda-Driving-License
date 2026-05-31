import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateCandidate = () => {
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

    const { _id } = useParams();

    const handleUpdateCandidate = async () => {
        try {
            console.log("received fields", CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber)
            const res = await axios.put(`http://localhost:4000/candidates/update/${_id}`, { CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber });
            setMessage(res.data.message);
            setError("");
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || "Error occured";
            setError(errorMessage);
            setMessage("");
        }
    }

    const handleGetExistingCandidate = async() => {
        try {
            const res = await axios.get(`http://localhost:4000/candidates/list/${_id}`);
            const data = res.data.candidate;

            setCandidateNationalId(data.CandidateNationalId);
            setDOB(new Date(data.DOB).toISOString('').split('T')[0]);
            setExamDate(new Date(data.ExamDate()).toISOString().split('T')[0]);
            set
        }
    }

    return (
        <div className="bg-green-50 min-h-screen flex justify-center items-center">
            <div className="bg-white p-4 rounded-xl w-1/4">
                <h1 className="text-xl text-center font-bold text-green-500 mb-3">Add Candidate Portal</h1>
                {error && (
                    <div className="bg-red-300 py-2 px-3 text-red-600 font-bold rounded-lg">
                         <p>{error}</p>
                    </div>
                )}
                {message && (
                    <div className="bg-green-300 py-2 px-3 text-green-600 font-bold rounded-lg mt-3">
                        <p>{message}</p>
                    </div>
                )}
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Candidate National Id</label>
                    <input 
                      type="number" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      placeholder="Enter National Id"
                      onChange={(e) => setCandidateNationalId(e.target.value)}
                      required={true}
                    />
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">First Name</label>
                    <input 
                      type="text" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      placeholder="Enter First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      required={true}
                    />
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Last Name </label>
                    <input 
                      type="text" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      placeholder="Enter Last Name"
                      required={true}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Gender</label>
                    <input 
                      type="text" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      placeholder="Enter Gender"
                      required={true}
                      onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Date Of Birth</label>
                    <input 
                      type="date" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      required={true}
                      onChange={(e) => setDOB(e.target.value)}
                    />
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Exam Date</label>
                    <input 
                      type="date" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      required={true}
                      placeholder="Enter National Id"
                      onChange={(e) => setExamDate(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Phone Number</label>
                    <input 
                      type="text"
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      required={true}
                      placeholder="Enter Phone Number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <button onClick={handleUpdateCandidate} className="w-full mt-4 rounded-full text-white bg-green-400 py-3 hover:bg-green-500 transition-colors">Update</button>
            </div>
        </div>
    )
}

export default UpdateCandidate;