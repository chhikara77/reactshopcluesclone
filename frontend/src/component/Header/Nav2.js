import React from "react";
import logo from "../../images/logo.png";
import "../Header/header.css";
const Nav2 = () => {
  return (
    <div className="nav2">
      <div className="logo-box">
        <a href="#">
          <img src={logo} className="logo" />
        </a>
      </div>
      <div className="search">
      
          <i className="far fa-search"></i>
        
        <input
          type="text"
          className="search-box"
          placeholder="What is on your mind today?"
        />
        <a href="#" className="search-btn">
          Search
        </a>
      </div>
      <div className="share"><p>Share</p><a href="#">Location</a></div>
      <div className="cart-icons">
      <i className="fal fa-map-marker-alt"></i>
      <i class="far fa-bell"></i>
      <i class="far fa-heart"></i>
      <i class="fal fa-cart-plus"></i>
      </div>
      <div className="signin">
        <a href="#">Sign In</a>
      </div>
    </div>
  );
};

export default Nav2;
