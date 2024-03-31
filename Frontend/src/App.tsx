import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import { Home } from "./Home"
import { Read } from "./Read"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Read" element={<Read/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
