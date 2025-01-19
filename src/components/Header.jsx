import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/TripGPTLogo.png";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    console.log("Login button clicked!");
  };

  return (
    <header>
      <img src={logo} alt="TripGPT Logo" onClick={handleLogoClick} />
    </header>
  );
}

export default Header;
