import React, { useEffect, useState } from 'react'
import './Headers.css'
import Sliding from './Sliding'
import logos from '../../assets/logo.svg'
import profilelogos from '../../assets/Ellipse 11.png'
import MenuIcon from '@mui/icons-material/Menu';
import orangetheme from '../../assets/background.svg'
import purpletheme from '../../assets/purplebackground.svg'


const images = [
  orangetheme,
  purpletheme
]
function Headers() {
  const [currentImageIndex, setCurrentImageIndex] = useState(images[0]);
 


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  
  return (
  
     
    
    <div className='header-container' style={backgroundImageStyle} >
      <div className='topbar' >
        <div className='menu'><MenuIcon /></div>

        <img alt='logs' src={logos} className='logo1' />
    
        
        <div className='navs'>
          <p>Home</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>Call with Astrologer</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>Live (Coming Soon) </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>

        <img alt='pro' src={profilelogos} className='logo2' />
      </div>
      <div >

        <h2 className='heading' >
          “Astrology for Clarity”
        </h2>
        <p className='description-para'>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy </p>
        <button className='btn'>Consult now</button>
        <div>

        </div>
        <Sliding />
      </div>
      </div>
 


    
  )
}

export default Headers