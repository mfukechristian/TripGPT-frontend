import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function ResultScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { result } = location.state || { result: "No trip plan available." };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="result-screen">
      <ReactMarkdown className="markdown-content">{result}</ReactMarkdown>
      <button onClick={handleBack}>Back to Form</button>
    </div>
  );
}

export default ResultScreen;
