
import React from "react";
import './Solutioncard.css'

function SolutionCard({ title, icon }) {
  return (
    <div>
      <div className="solutionCard-container" style={{ display: "flex" }}>
        <div >
          <img alt="icon" src={icon} className="icons" />
        </div>
        <div className="solutionCard-title" >
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
}

export default SolutionCard;