import React from "react";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p className="footer-text">
        &copy;{" "}
        <a
          href="https://www.linkedin.com/in/christian-mfuke-kambulu/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Christian Mfuke
        </a>{" "}
        {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
