import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/HomePage.css";
import HomeBody from "../Components/HomeBody";

export default function HomePage() {
  return (
    <div className="home-container">
      <Navbar />
      <HomeBody />
    </div>
  );
}
