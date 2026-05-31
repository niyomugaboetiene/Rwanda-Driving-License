import axios from "axios";
import { useEffect, useState } from "react";

const CandidateList = () => {
    const [candidates, setCandidates] = useState(null);

    const handleGet = async () => {
        try {
           const res = await axios.get('http://localhost:5000/candidates/list');
           setCandidates(res.data.candidate);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleGet();
    }, []);

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Candidate National Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Date Of Birth</th>
                            <th>Exam Date</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates?.map((cand, index) => (
                            //     CandidateNationalId (PK), FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber
                            <tr>
                                <td>{cand.CandidateNationalId}</td>
                                <td>{cand.FirstName}</td>
                                <td>{cand.LastName}</td>
                                <td>{cand.Gender}</td>
                                <td>{cand.DOB}</td>
                                <td>{cand.ExamDate}</td>
                                <td>{cand.PhoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}