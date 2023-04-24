import React from 'react'
import './SolutionCards2.css'

function SolutionCards2({ title, icon }) {
  return (
    <div>
      <div className="solutionCard-container-2" >

        <div className="solutionCard-title-2" >
          <div>{title}</div>
        </div>
        <div className="images" >
          <img alt="icon" src={icon} />
        </div>
      </div>
    </div>
  )
}

export default SolutionCards2