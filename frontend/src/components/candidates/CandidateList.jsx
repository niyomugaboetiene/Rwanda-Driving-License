import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CandidateList = () => {
    const [candidates, setCandidates] = useState(null);

    const handleGet = async () => {
        try {
           const res = await axios.get('http://localhost:4000/candidates/list');
           setCandidates(res.data.candidate);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleGet();
    }, []);

    return (
        <div className="bg-green-50 min-h-screen flex justify-center">
            <div className="max-w-7xl mx-auto w-full mt-5">
                <h1 className="mb-3 text-center text-xl font-bold">Candidates List</h1>
                <table className="w-full">
                    <thead className="bg-green-300">
                        <tr>
                            <th>Candidate National Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Date Of Birth</th>
                            <th>Exam Date</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates?.map((cand, index) => (
                            <tr key={index}>
                                <td>{cand.CandidateNationalId}</td>
                                <td>{cand.FirstName}</td>
                                <td>{cand.LastName}</td>
                                <td>{cand.Gender}</td>
                                <td>{new Date(cand.DOB).toLocaleDateString()}</td>
                                <td>{new Date(cand.ExamDate).toLocaleDateString()}</td>
                                <td>{cand.PhoneNumber}</td>

                                <td><Link to={`/update/${cand._id}`}>Update</Link></td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CandidateList;