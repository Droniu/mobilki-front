import LoginCard from "./views/LoginCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterCard from "./views/RegisterCard";
import VisitList from "./views/VisitList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginCard />} />
          <Route path="/register" element={<RegisterCard />} />
          <Route path="/" element={<VisitList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
