import React from 'react';
import Forms from './Forms';
import GameImage from './GameImage';
import Social from './Social';

const Contact = () => {
    return (
        <div>
            <section>
                <div  className="desktop screen">
                    
                    <div className="page-border-desktop-content1"></div>
                    <div className="page-border-desktop-content2"></div>
                    <div className="page-border-desktop-content3"></div>
                    
                    <div className="background-contact-section-content"></div>


                   <Forms/>


                   <GameImage/>

                 
                   <Social/>

                    <div className="line-background-Madein">
                    <img className="line-Madein bp2-animate-enter18" show-on-scroll alt="" src="assets/img/desktop--line-copy-2-50DAABA0-6541-49AE-BF21-6FE8BDD75833.png" />
                    <img className="line-copy-Madein bp2-animate-enter19" show-on-scroll alt="" src="assets/img/desktop--line-copy-2-50DAABA0-6541-49AE-BF21-6FE8BDD75833.png" />
                    <img className="line-copy-2-Madein bp2-animate-enter20" show-on-scroll alt="" src="assets/img/desktop--line-copy-2-50DAABA0-6541-49AE-BF21-6FE8BDD75833.png" />
                    </div>
                    <img className="icons8-tetris-g-console-64-copy-Madein bp2-animate-enter21 smart_layers" show-on-scroll alt="" src="assets/img/desktop--icons8-tetris-game-console-64-copy-9974B3F3-93DE-47EF-8D57-6E999AB925E6@2x.png" />
                </div>
                    
                
                </section>
        </div>
    );
};

export default Contact;