
import React from "react";
import './SoulutionCard1.css'

function SolutionCard1({ title, icon }) {
  return (
    <div>
      <div className="solutionCard-container-1"
      >
        <div className="images" >
          <img alt="icon" src={icon} />
        </div>
        <div className="solutionCard-title-1" >
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
}

export default SolutionCard1;