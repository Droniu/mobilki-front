import "./App.css";
import LoginCard from "./LoginCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterCard from "./RegisterCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginCard />} />
          <Route path="/register" element={<RegisterCard />} />
          <Route path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
