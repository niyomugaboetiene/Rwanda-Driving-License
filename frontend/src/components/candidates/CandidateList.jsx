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
                
            </div>
        </div>
    )
}