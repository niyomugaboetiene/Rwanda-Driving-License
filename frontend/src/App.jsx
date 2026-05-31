import AddCandidate from "./components/candidates/AddCandidate"
import UpdateCandidate from "./components/candidates/UpdateCandidate";
import CandidateList from "./components/candidates/CandidateList"
import AddGrade from "./components/grades/AddGrade";
import GradeList from "./components/grades/GradeList";
import UpdateGrade from "./components/grades/UpdateGrade";

import Register from "./components/admin/Register";
import Login from "./components/admin/Login";

import Nav from "./components/dashboards/NavBar";
import Footer from "./components/dashboards/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
       <BrowserRouter>
          <div className="mb-24">
             <Nav />
          </div>
          <Routes>
            <Route path="/candidate/add" element={<AddCandidate /> }/>
            <Route path="/candidate/list" element={<CandidateList /> }/>
            <Route path="/candidate/update/:_id" element={<UpdateCandidate /> }/>

            <Route path="/grades/add" element={<AddGrade />}/>
            <Route path="/grades/list" element={<GradeList />}/>
            <Route path="/grades/update/:_id" element={<UpdateGrade />}/>

            <Route path="/auth/login" element={<Login />}/>
            <Route path="/auth/register" element={<Register />}/>
            <Route path="/auth" element={<Footer />}/>

          </Routes>
       </BrowserRouter>
  )
}

export default App
