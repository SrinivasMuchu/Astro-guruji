import React from 'react'
import './Premium.css'
import star from '../../assets/starts.svg'
import PremiumCards from './PremiumCards'
import astro1 from '../../assets/astrologer1.svg'
import astro2 from '../../assets/astrologer2.svg'
import astro3 from '../../assets/astrologer3.svg'
import astro4 from '../../assets/astrologer4.svg'
import astro5 from '../../assets/astrologer5.svg'
import astro6 from '../../assets/astrologer6.svg'
import astro7 from '../../assets/astrologer7.svg'
import astro8 from '../../assets/astrologer8.svg'
import astro9 from '../../assets/astrologer9.svg'



const items = [
  { id: 1, imageUrl: astro1 },
  { id: 2, imageUrl: astro2 },
  { id: 3, imageUrl: astro3 },
  { id: 4, imageUrl: astro4 },
  { id: 5, imageUrl: astro5 },
  { id: 6, imageUrl: astro6 },
  { id: 7, imageUrl: astro7 },
  { id: 8, imageUrl: astro8 },
  { id: 9, imageUrl: astro9 },
];

function Premium() {
  return (
    <div>
      <div className='main-div'>

        <div className='title-container'>
          <img src={star} alt='star' />
          <h4>Premium Astrologers</h4>
          <img src={star} alt='star' />

        </div>
        <div className='column-flex'>
          {items.map((item) => (
            <div key={item} style={{ backgroundImage: `url(${item.imageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "auto" }}>
              <PremiumCards />
            </div>
          ))}
        </div>


      </div>
    </div>


  )
}

export default Premium