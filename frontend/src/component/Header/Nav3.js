import React from 'react';
import india from "../../images/madeinindia.png";
import "../Header/header.css";
const Nav3 = () => {
  return <div className='nav3 center'>
    <div className='india-logo-div'>
      <img src={india} className='india-logo'/>
    </div>
    <div className='list-container'>
      <ul className='nav-list center'>
        <li><a href="#">mobiles &amp; more</a></li>
        <li><a href="#">men</a></li>
        <li><a href="#">women</a></li>
        <li><a href="#">home &amp; kitchen</a></li>
        <li><a href="#">appliances</a></li>
        <li><a href="#">sports &amp; more</a></li>
        <li><a href="#">essentials</a></li>
        <li><a href="#">offers</a></li>
        <li><a href="#">global shopping</a></li>
      </ul>
    </div>
  </div>;
};

export default Nav3;
