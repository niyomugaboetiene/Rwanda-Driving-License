import AddCandidate from "./components/candidates/AddCandidate"
import UpdateCandidate from "./components/candidates/UpdateCandidate";
import CandidateList from "./components/candidates/CandidateList"
import AddGrade from "./components/grades/AddGrade";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
       <BrowserRouter>
          <Routes>
            <Route path="/candidate/add" element={<AddCandidate /> }/>
            <Route path="/candidate/list" element={<CandidateList /> }/>
            <Route path="/candidate/update/:_id" element={<UpdateCandidate /> }/>

            <Route path="/grades/add" element={<AddGrade />}/>
          </Routes>
       </BrowserRouter>
  )
}

export default App
