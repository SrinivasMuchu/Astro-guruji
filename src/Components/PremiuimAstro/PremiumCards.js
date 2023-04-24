import React from 'react'
import './PremiumCards.css'
import online from '../../assets/online.svg'
import call from '../../assets/call.svg'
import chat from '../../assets/chat.svg'
import live from '../../assets/live.svg'

function PremiumCards() {
  return (
    <div className='bodycontainer1'>
        <div className='main'>
            <div className='top'>
                <p className='online'>10+ Years</p>
                <img src={online} alt='online' className='online'/>
            </div>
            <div className='middle-con'>
                <div className='left-cont'>
                    <h4>Astrologer Ramraj</h4>
                    <h5>Specialties</h5>
                    <p>Love, Business, Life </p>
                    <h5>Skills</h5>
                    <p>Vedic Astrology, Kundali, </p>
                </div>
                <div className='right-cont'>
                   <b> <h2>Price <br/> <span>₹10 </span>/min</h2></b>
                </div>

            </div>
            <div className='bottom-con'>
            <button className='live-btn'><img src={live} alt='live' className='live-img' style={{width:"90%",height:"90%"}}/></button>
                <button className='chat-btn'><img src={chat} alt='chat' className='chat-img' style={{width:"75%",height:"75%"}}/></button>
                
                <button className='call-btn'><img src={call} alt='call' className='call-img' style={{width:"75%",height:"75%"}}/></button>
                
              
            </div>

        </div>

    </div>
  )
}

export default PremiumCards