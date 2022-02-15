import React from 'react';

const GameShow = (title="Museum Multiverse", imgage="assets/img/mobile-game-showcase-hero-image-mobile--A17A3CFD-1001-41F0-B69A-8440E534AC7B.png", types=["Adventure", "Narrative"], trailer="https://www.youtube.com/embed/MF46EPlngic?rel=0&amp;autoplay=1", screenShots=[], store="Viveport") => {
    return (
        <div>
             <aside id="other_section">                      
                    <div className="other_contant">
                    <div className="bottom_move">
                    <div className="other_img_grid">
                        <img alt="" src="assets/img/mobile-game-showcase-mm-bg-image-1C1E03A4-6BF7-4E12-8FE3-84EF83D78B34.jpg" className="hover-up"/>
                        <img alt="" src="assets/img/desktop--game-showcase-rectangle-copy-4-3044EBF1-10A5-4282-A799-AE28C92DD45F.jpg" className="hover-up"/>
                        <img alt="" src="assets/img/desktop--game-showcase-rectangle-copy-5-BE34638F-A368-41E6-A813-627677531F78.jpg" className="hover-up"/>
                        <div id="youtube">
                        <img alt="" src="https://i9.ytimg.com/vi_webp/MF46EPlngic/mqdefault.webp?v=5ea4fc8c&sqp=CIDc0IkG&rs=AOn4CLBqYNNz07Yf3ZgKPcmfDn3AJEi_2Q"/>
                        <div className="nounplay3318513-KOsP6k"></div>
                        </div>
                        
                    </div>
                    
                    <div className="text_two_part">
                        <div className="left-side">
                        <span className="about-title">About the Game</span>
                        <span className="lable bg-purpul">Adventure</span>
                        <span className="lable bg-light-purpul">Narrative</span>
                        
                        <p className="the-webby">
                            The Webby-nominated Museum Multiverse is a virtual reality platformer. This perspective-changing experience
                            chronicles JR's adventures, a kid who has mysteriously awoken in an abandoned museum. He must traverse the
                            various worlds within the art pieces within the depths of the cursed museum to find a way to escape.
                            </p>
                        </div>
                        <div className="right-side">
                        <p className="choose-available">Choose Available Platform:</p>
                        <div className="listeners-active">{store} <img className="path-B1fNjY" alt="" src="assets/img/desktop--game-showcase-path-1E4BF3EA-EE4B-4661-8E25-688789989909@2x.png"/></div>
                        </div>
                    </div>
                    </div>	
                    </div>
                    
                    <div className="dark-overlay-C61RwL">
                    <div className="cancel-C61RwL smart-layers-pointers">
                    <img className="shape-F9v9tx" alt="" src="assets/img/desktop--game-showcase-shape-3DCF22E5-7705-4D64-8292-09AFF15374A6@2x.png"/>
                    <img className="path-F9v9tx" alt="" src="assets/img/desktop--game-showcase-path-457F1CAB-CD6A-4707-95DE-08E3326EF082@2x.png"/>
                    </div>
                    <iframe style={{border: '0', pointerEvents: 'auto'}} id="ytplayer" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/MF46EPlngic?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"/></div>
                    
                    <div className="banner-C61RwL">
                    <div className="rectangle-HhOyb4"></div>
                    <div className="logo-HhOyb4"></div>
                    <img className="group-HhOyb4" alt="" src="assets/img/desktop--game-showcase-group-B81A5238-55CE-4612-9D72-8ABC5E6833E1.png"/>
                    <img className="path-2-HhOyb4" alt="" src="assets/img/desktop--game-showcase-path-2-677D3B50-4800-48AF-96E4-6E082CAEAFB4@2x.png"/>
                    <div className="group-3-HhOyb4">
                    <div className="group-5-AxPXiJ">
                    <div className="nounvr2771726-6Z6YmS">
                        <img className="shape-tBF58u" alt="" src="assets/img/desktop--game-showcase-shape-B382B0A8-43A4-49F3-A7F0-63B7A5646875@2x.png"/>
                        <img className="path-tBF58u" alt="" src="assets/img/desktop--game-showcase-path-4DFBA9FD-1B74-4DBE-AFFD-EC6F67C6026E@2x.png"/>
                        <img className="path-9XKmEx" alt="" src="assets/img/desktop--game-showcase-path-742AA8C3-49D2-474C-851C-E9CBBC04BE61@2x.png"/>
                        <img className="path-QY56vo" alt="" src="assets/img/desktop--game-showcase-path-742AA8C3-49D2-474C-851C-E9CBBC04BE61@2x.png"/>
                    </div>
                    <div className="vr-enable-6Z6YmS">VR Enable</div>
                    </div>
                    <div className="group-7-AxPXiJ">
                    <div className="noun-user3662623-Rzrxl3">
                        <div className="group-ZdZq8L">
                        <div className="group-ZdEj6a">
                        <div className="group-HOgXcz">
                        <div className="oval-hfmlPG"></div>
                        <img className="path-hfmlPG" alt="" src="assets/img/desktop--game-showcase-path-C4B5DD71-2060-45A6-969E-A0FC0BF83AF5@2x.png"/>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="x1-player-Rzrxl3">1 Player</div>
                    </div>
                    </div>
                    </div>
                </aside>
        </div>
    );
};

export default GameShow;