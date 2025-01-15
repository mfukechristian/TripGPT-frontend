import React from "react";
import { Routes, Route } from "react-router-dom";
import FormScreen from "./screens/FormScreen";
import ResultScreen from "./screens/ResultScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<FormScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </div>{" "}
      <Footer />
    </>
  );
}

export default App;
