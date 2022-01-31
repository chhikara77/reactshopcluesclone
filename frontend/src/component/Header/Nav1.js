import React from "react";
import "../Header/header.css";

const Nav1 = () => {
  return (
    <div className="nav1">
      <div className="callus">
        <a href="#">Sell With Us</a>
        <span>|</span>
        <a href="#">Call Us</a>
        <span>|</span>
        <a href="#">Download App</a>
      </div>
      <div className="app-icon">
        <a href="#">
          <i className="fab fa-google-play"></i>
        </a>
        <a href="#">
          <i className="fab fa-apple"></i>
        </a>
        <a href="#">
          <i className="fab fa-windows"></i>
        </a>
      </div>
    </div>
  );
};

export default Nav1;
