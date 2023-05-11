import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}
