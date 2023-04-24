import React, { useState } from 'react';
import './Reviews.css'
import review1 from '../../assets/review1.svg'
import review2 from '../../assets/review2.svg'
import review3 from '../../assets/review3.svg'
import review4 from '../../assets/review4.svg'
import review5 from '../../assets/review5.svg'
import review6 from '../../assets/review6.svg'
import star from '../../assets/starts.svg'
import stars from '../../assets/reviewstars.svg'


const photos = [
    {
        name: "Harshal",
        src: review1,
        title: 'Photo 1',
        matter: 'Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ',
    },
    {
        name: "johns",
        src: review2,
        title: 'Photo 2',
        matter: 'is an amazing app as it is very easy to talk to an astrologer through an easy-to-use chat support. The service fee is also quite low. Also, all the supervisors and astrologers are very knowledgeable and provide the right solution for all your issues.',
    },
    {
        name: "Riya",
        src: review3,
        title: 'Photo 3',
        matter: 'is very simple to use and all the features are great and easy to access. Once I asked Guruji a Astro App for help, they were just so helpful and provided me report in the email. I think this is amazing thing for a app.',
    },
    {
        name: "Andria",
        src: review4,
        title: 'Photo 4',
        matter: 'This app is very user-friendly and easy to navigate through all the different features. This app helped me make better predictions. I love how the app incorporates articles and videos.',
    },
    {
        name: "Sonia",
        src: review5,
        title: 'Photo 5',
        matter: 'I get my astrology chart done in a couple of weeks so that I can monitor my progress. The best part is that the app is totally free and has no ads to distract from the experience.',
    },
    {
        name: "Rajdeep",
        src: review6,
        title: 'Photo 6',
        matter: 'This app is a smooth experience, and there are not any invasive advertisements. its a top-notch effort. Everyone should use this app to beat their greatest fear.',
    },
];

function Reviews() {
    const [currentPhotoMatter, setCurrentPhotoMatter] = useState(photos[0].matter);
    const [name, setName] = useState(photos[0].name)
    const handlePhotoClick = (matter, name) => {
        setCurrentPhotoMatter(matter);
        setName(name)
    };
    const handlePrev = () => {
        const currentIndex = photos.findIndex(photo => photo.matter === currentPhotoMatter);
        const currentnameIndex = photos.findIndex(photo => photo.name === name);
        const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
        const newName = currentnameIndex === 0 ? photos.length-1 : currentnameIndex-1
        setCurrentPhotoMatter(photos[newIndex].matter);
        setName(photos[newName].name)
      };
      
      const handleNext = () => {
        const currentIndex = photos.findIndex(photo => photo.matter === currentPhotoMatter);
        const currentnameIndex = photos.findIndex(photo => photo.name === name);
        const newIndex = currentIndex === 0 ? photos.length + 1 : currentIndex + 1;
        const newName = currentnameIndex === 0 ? photos.length+1 : currentnameIndex+1
        setCurrentPhotoMatter(photos[newIndex].matter);
        setName(photos[newName].name)
      };
    return (
        <div className='review-cont'>

            <div className="gallery">
                <div className='titlecard' >
                    <img src={star} alt="star" />
                    <h4>User Review</h4>
                    <img src={star} alt="star" />
                </div>
                <div className="matter">
                <div className='btnsofnavs'>
                    <button onClick={handlePrev} className='pre'>|</button>
                    <button onclick={handleNext} className='nxt'>|</button>
                </div>
                    <img src={stars} alt="star" />
                   <p>{currentPhotoMatter}</p> 
                    </div>
                <div className="photos">
                    {photos.map((photo, index) => (
                        <img key={index} src={photo.src} alt={photo.title} onClick={() => handlePhotoClick(photo.matter, photo.name)} />
                    ))}
                </div>
                <p className='name'>{name}</p>
                
            </div>
        </div>

    )
}

export default Reviews