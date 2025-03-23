import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Dashboard } from "./pages/index";
import { RouteProtected } from "./Components/index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <RouteProtected>
              <Dashboard />
            </RouteProtected>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
