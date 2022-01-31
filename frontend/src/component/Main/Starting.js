import React from "react";
import "../Main/main.css";
import { starting } from "../../data";
const Starting = () => {
  return (
    <div className="starting">
      <div className="item-box">
        {starting.map((elements) => (
          <a href="#"><img src={elements.url}></img></a>
        ))}
      </div>
    </div>
  );
};

export default Starting;
