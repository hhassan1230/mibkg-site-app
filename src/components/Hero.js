function Hero() {
  return (
    <section>
      <div className="screen">
        <div className="hero_image bp2-animate-enter desktop_hero">
          <video src="https://anima-uploads.s3.amazonaws.com/projects/60523ff4ec5e2ec86a4add42/files/mibkg-highlight-reel.mp4" loop autoPlay="autoplay" playsInline muted />
        </div>
        <div className="mobile_hero">
          <img className="hero-image-mobile-C61RwL" src="https://media.giphy.com/media/JoIiLnxitZAcWkAJBQ/giphy-downsized-large.gif" />
          <div className="overlay-C61RwL"></div>
        </div>
        
      </div>    
    </section>
  );
}

export default Hero;
