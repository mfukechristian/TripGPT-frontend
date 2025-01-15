import React from "react";
import { Routes, Route } from "react-router-dom";
import FormScreen from "./screens/FormScreen";
import ResultScreen from "./screens/ResultScreen";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<FormScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </div>{" "}
    </>
  );
}

export default App;
