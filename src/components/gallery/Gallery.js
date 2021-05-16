import React from 'react';
import GameGallery from './GameGallery';
import GameSlow from './GameSlow';
import MerchGallery from './MerchGallery';

const Gallery = () => {
    return (
        <div>
             <section>
                <div className="screen">
                    <div className="brooklyn_img" show-on-scroll>
                      <div className="overlay_brooklyn"></div>
                    </div>
                    <img className="bg-image-C61RwL" show-on-scroll="" alt="" src="assets/img/desktop--game-showcase-bg-image--02130E08-A93A-4018-8141-EB8B923E2D59.jpg" />
                    <div className="overlay-C61RwL" id="overlay"></div>
                    <div className="bg_grey" show-on-scroll></div>
                    <img className="arrow_game_section bp2-animate-enter1" show-on-scroll alt="" src="assets/img/desktop--arrow-2E732899-BAFD-4965-B92E-295245B625B2@2x.png" />

                     
                     <GameGallery/>
                     <MerchGallery/>
                     <GameSlow/>
                 
                
                </div>
                </section>
        </div>
    );
};

export default Gallery;