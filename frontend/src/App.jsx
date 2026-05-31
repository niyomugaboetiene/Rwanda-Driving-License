import AddCandidate from "./components/candidates/AddCandidate"
import UpdateCandidate from "./components/candidates/UpdateCandidate";
import CandidateList from "./components/candidates/CandidateList"
import AddGrade from "./components/grades/AddGrade";
import GradeList from "./components/grades/GradeList";
import UpdateGrade from "./components/grades/UpdateGrade";

import Register from "./components/admin/Register";
import Login from "./components/admin/Login";

import Nav from "./components/dashboards/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
       <BrowserRouter>
          <Routes>
            <Route path="/candidate/add" element={<AddCandidate /> }/>
            <Route path="/candidate/list" element={<CandidateList /> }/>
            <Route path="/candidate/update/:_id" element={<UpdateCandidate /> }/>

            <Route path="/grades/add" element={<AddGrade />}/>
            <Route path="/grades/list" element={<GradeList />}/>
            <Route path="/grades/update/:_id" element={<UpdateGrade />}/>

            <Route path="/auth/login" element={<Login />}/>
            <Route path="/auth/register" element={<Register />}/>
            <Route path="/nav" element={<Nav />}/>
          </Routes>
       </BrowserRouter>
  )
}

export default App
