import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginView from "./components/login/LoginView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={< LoginView />} />
        <Route path="/" element={< LoginView />} />
      </Routes>
    </Router>
  );
}

export default App;
