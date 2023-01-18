import React from "react";
import "./footer.css";
import gitIcon from "./images/github.png";

const Footer = () => {
  const gitImg = document.createElement("img");
  gitImg.src = gitIcon;
  return (
    <div className="footer">
      <p>
        Developed by <a href="https://github.com/almeida-91">Almeida-91</a>
        <img src={gitIcon} alt="GitHub Icon" />
      </p>
    </div>
  );
};

export default Footer;
