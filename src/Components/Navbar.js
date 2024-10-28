import React from "react";
import Logo from "../Assets/Images/logo.png";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  );
}
