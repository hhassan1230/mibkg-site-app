import React from 'react';

const GameShow = ({
    title="", 
    description="", 
    imgage="", 
    types=["", ""], 
    trailer="", 
    screenShots=[], 
    stores=[],
    isVR=Boolean,
    players="",
}) => {    
return (
        <div>
             <aside id="other_section">                      
                    <div className="other_contant">
                    <div className="bottom_move">
                    <div className="other_img_grid">
                        {screenShots.map((screenShot, index) => 
                            <div key={index}>
                                <div>
                                    <img alt="" src={screenShot} className="hover-up"/> {/* iterate over these to get screemshots */}
                                </div>
                            </div>
                        )}
                        <div id="youtube">
                        <img alt="" src="https://i9.ytimg.com/vi_webp/MF46EPlngic/mqdefault.webp?v=5ea4fc8c&sqp=CIDc0IkG&rs=AOn4CLBqYNNz07Yf3ZgKPcmfDn3AJEi_2Q"/> {/* Replace this with another thumbnail locally */}
                        <div className="nounplay3318513-KOsP6k"></div>
                        </div>
                        
                    </div>
                    
                    <div className="text_two_part">
                        <div className="left-side">
                        <span className="about-title">About the Game</span>
                        <span className="lable bg-purpul">{types[0]}</span>
                        <span className="lable bg-light-purpul">{types[1]}</span>
                        
                        <p className="the-webby">
                            {description}
                        </p>
                        </div>
                        <div className="right-side">
                        <p className="choose-available">Choose Available Platform:</p>
                        {stores.map((store, index) => 
                            <div key={index}>
                                <div className="listeners-active">
                                    <a target='_blank' rel="noreferrer" href={stores[index].link}>{stores[index].name}</a><img className="path-B1fNjY" alt="" src="assets/img/desktop--game-showcase-path-1E4BF3EA-EE4B-4661-8E25-688789989909@2x.png"/>
                                </div>
                                <br/>
                            </div>
                        )}
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
                        { /* Need to work on types here - Web, VR, AR, Console */
                            isVR ? 
                            <div>
                                <img className="shape-tBF58u" alt="" src="assets/img/desktop--game-showcase-shape-B382B0A8-43A4-49F3-A7F0-63B7A5646875@2x.png"/>
                                <img className="path-tBF58u" alt="" src="assets/img/desktop--game-showcase-path-4DFBA9FD-1B74-4DBE-AFFD-EC6F67C6026E@2x.png"/>
                                <img className="path-9XKmEx" alt="" src="assets/img/desktop--game-showcase-path-742AA8C3-49D2-474C-851C-E9CBBC04BE61@2x.png"/>
                                <img className="path-QY56vo" alt="" src="assets/img/desktop--game-showcase-path-742AA8C3-49D2-474C-851C-E9CBBC04BE61@2x.png"/>
                            </div>
                            : ""
                        }
                    </div>
                    <div className="vr-enable-6Z6YmS">{isVR ? "VR Enable" : ""}</div>
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
                    <div className="x1-player-Rzrxl3">{players}</div>
                    </div>
                    </div>
                    </div>
                </aside>
        </div>
    );
};

export default GameShow;