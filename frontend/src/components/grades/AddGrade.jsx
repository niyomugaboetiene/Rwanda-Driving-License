import { useState, useEffect } from "react";
import axios from "axios";

const AddGrade = () => {
    //  CandidateNationalId, LicenseExamCategory, ObtainedMarks/20, Decision
    const [CandidateNationalId, setCandidateNationalId] = useState(0);
    const [LicenseExamCategory, setLicenseExamCategory] = useState("");
    const [ObtainedMarks, setObtainedMarks] = useState("");
    const [Decision, setDecision] = useState("");
    const [candidate, setCandidates] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleAddGrade = async () => {
        try {
            // console.log("received fields", CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber)
            const res = await axios.post("http://localhost:4000/grade/addGrade", { CandidateNationalId, LicenseExamCategory, ObtainedMarks, Decision });
            setMessage(res.data.message);
            setError("");
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || "Error occured";
            setError(errorMessage);
            setMessage("");
        }
    }

    const handleGetCandidate = async () => {
        try {
           const res = await axios.get('http://localhost:4000/candidates/list');
           setCandidates(res.data.candidate);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleGetCandidate();
    }, []);

    return (
        <div className="bg-green-50 min-h-screen flex justify-center items-center">
            <div className="bg-white p-4 rounded-xl w-1/4">
                <h1 className="text-xl text-center font-bold text-green-500 mb-3">Add Grade Portal</h1>
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
                    <label className="text-lg font-bold text-green-500 block">Candidate</label>
                    <select 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      onChange={(e) => setCandidateNationalId(e.target.value)}
                    >
                        {candidate?.map((cand, index) => (
                            <option value={cand.CandidateNationalId} key={index}>{cand.FirstName} {cand.CandidateNationalId}</option>
                        ))}
                    </select>
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">License Category</label>
                    <input 
                      type="text" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      placeholder="Enter License Exam Category"
                      required={true}
                      onChange={(e) => setLicenseExamCategory(e.target.value)}
                    />
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">ObtainedMarks/20</label>
                    <input 
                      type="text" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      placeholder="Enter Obtained Marks"
                      required={true}
                      onChange={(e) => setObtainedMarks(e.target.value)}
                    />
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Decision</label>
                    <input 
                      type="text" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      required={true}
                      placeholder="Enter Decision"
                      onChange={(e) => setDecision(e.target.value)}
                    />
                </div>

                <button onClick={handleAddGrade} className="w-full mt-4 rounded-full text-white bg-green-400 py-3 hover:bg-green-500 transition-colors">Add Grade</button>
            </div>
        </div>
    )
}

export default AddGrade;