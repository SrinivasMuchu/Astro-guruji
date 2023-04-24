import React, { useEffect, useState } from 'react'
import './Headers.css'
import Sliding from './Sliding'
import logos from '../../assets/logo.svg'
import profilelogos from '../../assets/Ellipse 11.png'
import MenuIcon from '@mui/icons-material/Menu';
import orangetheme from '../../assets/background.svg'
import purpletheme from '../../assets/purplebackground.svg'
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const LoadingSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton animation='wave' variant='circle'/>
        <Skeleton height={400}></Skeleton>
      </CardContent>
    </Card>
  );
};

const images = [
  orangetheme,
  purpletheme
]
function Headers() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);


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
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  if (loading) {
    return <LoadingSkeleton />;
  }
  return (
    <>
    <Card>
      <CardContent>
        <Typography>
     
    
    <div className='header-container' style={backgroundImageStyle} >
      <div className='topbar' >
        <div className='menu'><MenuIcon /></div>
<Typography variant='rectangle'>
        <img alt='logs' src={logos} className='logo1' />
        </Typography>
        
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
      </Typography>
      </CardContent>
      </Card>
      </>


    
  )
}

export default Headers