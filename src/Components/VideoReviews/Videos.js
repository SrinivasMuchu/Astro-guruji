import React, { useState } from "react";
import sun from '../../assets/smallsun.svg'
import star from '../../assets/starts.svg'
import './Videos.css'
import ReactPlayer from 'react-player';
import prev from '../../assets/prev.svg'
import next from '../../assets/next.svg'
import sale from '../../assets/ads.svg'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'




const videos = [
  {
    id: 1,
    title: 'Video 1',
    url: video1,
  },
  {
    id: 2,
    title: 'Video 2',
    url: video2,
  },
  {
    id: 3,
    title: 'Video 3',
    url: video3,
  },
];
const Videos = () => {


  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const prevSlide = () => {
    const currentIndex = videos.findIndex((video) => video.id === currentVideo.id);
    const prevIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentVideo(videos[prevIndex]);
  };

  const nextSlide = () => {
    const currentIndex = videos.findIndex((video) => video.id === currentVideo.id);
    const nextIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    setCurrentVideo(videos[nextIndex]);
  };
  

  return (
       
    <div className="bodycontainer">
      <div className="div-container" >
        <img src={sun} alt="sun" className="sunimage" />
      </div>
      <div className="title-container" >
      <img src={star} alt="sun"/>
      <h4>User Testimonial</h4>
      <img src={star} alt="sun"/>

      </div>
      <div >
        <div className="videos">
      <ReactPlayer url={currentVideo.url} playing={false} controls={true} width="300px"height="400px"/>
      </div>
    
      
        
      
      <div className="btn-div" >
        <button onClick={prevSlide}   className="btn11"><img src={prev} alt="prev"/></button>
      <button onClick={nextSlide} className="btn22"><img src={next} alt="next" /></button>
      </div>
      </div>
      <div>
      <img src={sale} className="discount-ad" alt="ads" />
      </div>
    </div>
    


    
  );
};

export default Videos;