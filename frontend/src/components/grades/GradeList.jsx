import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GradeList = () => {
    const [grades, setGrades] = useState(null);
    const navigate = useNavigate();

    const handleGet = async () => {
        try {
           const res = await axios.get('http://localhost:4000/grade/list');
           setGrades(res.data.grade);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleGet();
    }, []);

    const handleDeleteGrade = async(_id) => {
        try {
            const confrim = window.confirm('Are you sure ?');
            if (confrim) {
                await axios.delete(`http://localhost:4000/grade/delete/${_id}`);
                await handleGet();
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="bg-green-50 min-h-screen flex justify-center">
            <div className="max-w-7xl mx-auto w-full mt-5">
               <div className="flex justify-between mb-4">
                 <h1 className="mb-3 text-center text-xl font-bold text-green-600">Candidates List</h1>
                 <button className="bg-green-300 py-2 px-6 rounded-lg text-white font-bold" onClick={() => navigate('/grades/add')}>Add new</button>
               </div>
                <table className="w-full">
                    <thead className="bg-green-300 text-gray-700">
                        <tr>
                            <th className="text-left py-3 px-4">Candidate National Id</th>
                            <th className="text-left py-3 px-4">First Name</th>
                            <th className="text-left py-3 px-4">Last Name</th>
                            <th className="text-left py-3 px-4">License Exam Category</th>
                            <th className="text-left py-3 px-4">Obtained Marks/20</th>
                            <th className="text-left py-3 px-4">Decision</th>
                            <th className="text-left py-3 px-4">Done at</th>
                            <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades?.map((gra, index) => (
                            <tr key={index} className="bg-green-100 text-gray-700">
                                <td className="text-left py-3 px-4">{gra.CandidateNationalId?.CandidateNationalId || "No national Id"}</td>
                                <td className="text-left py-3 px-4">{gra.CandidateNationalId?.FirstName || "No first name"}</td>
                                <td className="text-left py-3 px-4">{gra.CandidateNationalId?.LastName || "No last name"}</td>
                                <td className="text-left py-3 px-4">{gra.LicenseExamCategory}</td>
                                <td className="text-left py-3 px-4">{gra.ObtainedMarks}</td>
                                <td className={`text-center px-4`}>
                                    <span className={`${gra.Decision == 'fail' ? 'bg-red-500' : 'bg-green-500'} rounded-full py-2 px-7 text-white font-bold`}>{gra.Decision}</span>
                                </td>
                                <td className="text-left py-3 px-4">{new Date(gra.createdAt).toLocaleDateString()}</td>

                                <td className="text-left py-3 px-4 flex justify-between">
                                    <Link to={`/grades/update/${gra._id}`} className="bg-green-300 py-2 px-6 rounded-lg text-white font-bold">Update</Link>
                                    <button  className="bg-red-300 py-2 px-6 rounded-lg text-white font-bold" onClick={() => handleDeleteGrade(gra._id)}>Delete</button>
                                </td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GradeList;