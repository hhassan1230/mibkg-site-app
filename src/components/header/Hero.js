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
                        <img className="hero-image-mobile-C61RwL" alt="" src="assets/img/mobile-game-showcase-hero-image-mobile--A17A3CFD-1001-41F0-B69A-8440E534AC7B.png"/>
                        <div className="overlay-C61RwL"></div>
                        </div>
                        
                    </div>		
             </section>
        </div>
    );
};

export default Hero;