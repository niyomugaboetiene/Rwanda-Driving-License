import AddCandidate from "./components/candidates/AddCandidate"
import CandidateList from "./components/candidates/CandidateList"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
       <BrowserRouter>
          <Routes>
            <Route path="/candidate/add" element={<AddCandidate /> }/>
            <Route path="/candidate/list" element={<CandidateList /> }/>
          </Routes>
       </BrowserRouter>
  )
}

export default App
