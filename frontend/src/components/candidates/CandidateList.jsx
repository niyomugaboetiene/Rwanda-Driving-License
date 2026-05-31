import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CandidateList = () => {
    const [candidates, setCandidates] = useState(null);
    const navigate = useNavigate();

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

    const handleDeleteCandidate = async(_id) => {
        try {
            const confrim = window.confirm('Are you sure ?');
            if (confrim) {
                
            }
        }
    }

    return (
        <div className="bg-green-50 min-h-screen flex justify-center">
            <div className="max-w-7xl mx-auto w-full mt-5">
               <div className="flex justify-between mb-4">
                 <h1 className="mb-3 text-center text-xl font-bold text-green-600">Candidates List</h1>
                 <button className="bg-green-300 py-2 px-6 rounded-lg text-white font-bold" onClick={() => navigate('/candidate/add')}>Add new</button>
               </div>
                <table className="w-full">
                    <thead className="bg-green-300 text-gray-700">
                        <tr>
                            <th className="text-left py-3 px-4">Candidate National Id</th>
                            <th className="text-left py-3 px-4">First Name</th>
                            <th className="text-left py-3 px-4">Last Name</th>
                            <th className="text-left py-3 px-4">Gender</th>
                            <th className="text-left py-3 px-4">Date Of Birth</th>
                            <th className="text-left py-3 px-4">Exam Date</th>
                            <th className="text-left py-3 px-4">Phone Number</th>
                            <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates?.map((cand, index) => (
                            <tr key={index} className="bg-green-100 text-gray-700">
                                <td className="text-left py-3 px-4">{cand.CandidateNationalId}</td>
                                <td className="text-left py-3 px-4">{cand.FirstName}</td>
                                <td className="text-left py-3 px-4">{cand.LastName}</td>
                                <td className="text-left py-3 px-4">{cand.Gender}</td>
                                <td className="text-left py-3 px-4">{new Date(cand.DOB).toLocaleDateString()}</td>
                                <td className="text-left py-3 px-4">{new Date(cand.ExamDate).toLocaleDateString()}</td>
                                <td className="text-left py-3 px-4">{cand.PhoneNumber}</td>

                                <td className="text-left py-3 px-4 flex justify-between">
                                    <Link to={`/candidate/update/${cand._id}`} className="bg-green-300 py-2 px-6 rounded-lg text-white font-bold">Update</Link>
                                    <button  className="bg-red-300 py-2 px-6 rounded-lg text-white font-bold">Delete</button>
                                </td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CandidateList;