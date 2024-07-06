import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatUI from "./components/ChatUI";
import Report from "./components/Report";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ChatUI />} />
          <Route path="/report/:uid" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
