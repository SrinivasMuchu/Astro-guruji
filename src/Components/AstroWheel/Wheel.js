import React ,{useState}from 'react'
import sun from '../../assets/sun.svg'
import zodiacs from '../../assets/raashi.svg'
import ZodiacCrds1 from './ZodiacCrds1'
import ZodiacCards2 from './ZodiacCards2'
import star from '../../assets/starts.svg'
import styled, { keyframes } from 'styled-components';



function Wheel() {


  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  const Div = styled.div`
  animation: ${rotate} 60s infinite`;



  return (
   
    <div className="wheel-container" style={{ marginTop: "35px", marginBottom: "35px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={star} alt='star' />
        <h2 className='heading-1' style={{ fontFamily: "sansation", fontSize: "32px", fontWeight: "700", color: "#D97122" }}>
          Many Problem one Solution</h2>
        <img src={star} alt='star' />
      </div >
      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "15px" }}>
        <div>
          <ZodiacCrds1 />
        </div>
        <div>

          <div className='container' style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", width: "85%", margin: "auto" }}>
            <Div>
              <img src={zodiacs} alt='zodo' className='rotate-infinite' />
            </Div>
            
            <img src={sun} alt='sun' className='sun' style={{ position: "absolute", justifyContent: "center", alignItems: "center", top: "30.5%" }} />

          </div>
        </div>
        <div>
          <ZodiacCards2 />
        </div>
      </div>

    </div>

  )
}

export default Wheel