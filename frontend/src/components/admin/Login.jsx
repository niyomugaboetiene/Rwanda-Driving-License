import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
    //  CandidateNationalId, LicenseExamCategory, ObtainedMarks/20, Decision
    const [AdminName, setAdminName] = useState("");
    const [Password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            // console.log("received fields", CandidateNationalId, FirstName, LastName, Gender, DOB, ExamDate, PhoneNumber)
            const res = await axios.post("http://localhost:4000/auth/login", { AdminName, Password }, { withCredentials: true });
            setMessage(res.data.message);
            setError("");
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || "Error occured";
            setError(errorMessage);
            setMessage("");
        }
    }

    return (
        <div className="bg-green-50 min-h-screen flex justify-center items-center">
            <div className="bg-white p-4 rounded-xl w-1/4">
                <h1 className="text-xl text-center font-bold text-green-500 mb-3">Login Portal</h1>
                <h1 className="text-md text-center font-bold text-green-500 mb-3">Admin member only</h1>
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
                    <label className="text-lg font-bold text-green-500 block">User Name</label>
                    <input 
                      type="text" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      placeholder="Enter User Name"
                      required={true}
                      onChange={(e) => setAdminName(e.target.value)}
                    />
                </div>
                
                <div className="mt-3">
                    <label className="text-lg font-bold text-green-500 block">Password</label>
                    <input 
                      type="password" 
                      className="w-full py-3 rounded-full px-3 bg-gray-100"
                      placeholder="Enter Password"
                      required={true}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button onClick={handleLogin} className="w-full mt-4 rounded-full text-white bg-green-400 py-3 hover:bg-green-500 transition-colors">Login</button>
            </div>
        </div>
    )
}

export default Login;