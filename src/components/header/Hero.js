import React from 'react';

const Hero = () => {
    return (
        <div>
             <section> 
                    <div className="screen">
                        <div className="hero_image bp2-animate-enter desktop_hero">
                        <video alt="" src="https://anima-uploads.s3.amazonaws.com/projects/60523ff4ec5e2ec86a4add42/files/mibkg-highlight-reel.mp4" loop autoplay="autoplay" playsinline muted></video>
                        </div>
                        <div className="mobile_hero">
                        <img className="hero-image-mobile-C61RwL" alt="" src="https://media.giphy.com/media/6Uuw2GuTPtlWqEBTSg/giphy.gif"/>
                        <div className="overlay-C61RwL"></div>
                        </div>
                        
                    </div>		
             </section>
        </div>
    );
};

export default Hero;