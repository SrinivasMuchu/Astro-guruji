import React,{useState} from 'react'
import guruji from '../../assets/logo.svg'
import facebook from '../../assets/Facebook logo.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'
import razopay from '../../assets/razopay.svg'
import paytm from '../../assets/paytm.svg'
import stripe from '../../assets/stripe.svg'
import './Footer.css'
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const LoadingSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton height={30} />
        <Skeleton height={100}></Skeleton>
      </CardContent>
    </Card>
  );
};

function Footer() {
  const [loading, setLoading] = useState(true);
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
        <div className='footer-container'>
      <div className='column1'>
        <div className='footer-title'>
          <img src={guruji} alt="guru" />
          <p>About Guruji s2 to 3
            lines what guruji do and how it works About Guruji s2 to 3
            lines what guruji do and how it works</p>
        </div>
        <div className='social-media'>
          <img src={facebook} alt="fb" />
          <img src={instagram} alt="insta" />
          <img src={twitter} alt="twit" />
          <img src={youtube} alt="yt" />
        </div>
        <div className='gateway'>
          <h3>Trusted & Seals</h3>
          <div className='twogateways'>
            <img src={razopay} alt="razo" />
            <img src={paytm} alt="paytm" />
          </div>
          <div className='onegateway'>
            <img src={stripe} alt="stripe" />
          </div>
        </div>

      </div>
      <div className='column2'>
        <div className='company'>
          <h3>Company</h3>
          <span>Home</span>
          <span>Privacy </span>
          <span>T &C</span>
          <span>Varied P</span>
        </div>
        <div className='collobarate'>
          <h3>Collaborate</h3>
          <span>Clever Tap</span>
          <span>Exotel </span>
          <span>Facebook</span>
          <span>Quora</span>
          <span>Google</span>
          <span>Youtube</span>
        </div>

      </div>

      <div className='column3'>
        <div className='support'>
          <h3>Support</h3>
          <span>Home</span>
          <span>Privacy </span>
          <span>T &C</span>
          <span>Varied P</span>
        </div>
        <div className='important-link'>
          <h3>Important Link</h3>
          <span>Tarot Reader</span>
          <span>Vedic Astrology </span>
          <span>Palmistry </span>
          <span>Gemology</span>
          <span>Vastu</span>
          <span>Numerology</span>
        </div>

      </div>

      <div className='colum4'>
        <form>
          <input type='text' placeholder='Your  Name' style={{ width: "90%", height: "42px", borderRadius: "8px" }} /><br />
          <input type='text' placeholder='Mail ID' style={{ width: "90%", height: "42px", borderRadius: "8px" }} /><br />
          <input type='text' placeholder='Write Query' style={{ width: "90%", height: "80px", borderRadius: "8px" }} /><br />
          <button className='submit-btn'>SUBMIT</button>
        </form>
      </div>

    </div>
        </Typography>
      </CardContent>
    </Card>
  
    
    </>
  )
}

export default Footer