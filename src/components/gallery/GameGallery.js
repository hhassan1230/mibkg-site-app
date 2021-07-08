import React from 'react';

const GameGallery = () => {
    return (
        <div>
             <aside id="game_section">
                    <span className="desktop_drop">
                        <div className="main_container_horizontal">
                        <div className="sort_filter_box_main bp2-animate-enter2" show-on-scroll>
                            <div className="sort_filter_box">Sort</div>
                            <div className="newest-filter_box">Newest</div>
                            <img className="arrow-copy_filter_box" alt="" src="assets/img/desktop--arrow-copy-2-30ABFF72-2AED-429A-AD49-598508D3AF52@2x.png" />
                        </div>
                        </div>
                        <div className="main_container_horizontal">
                        <div className="platform-filter_box-main bp2-animate-enter3" id="platform-filter-box" show-on-scroll>
                            <div className="platform-box-main">Platform</div>
                            <div className="all-box-main">All</div>
                            <img className="arrow-copy-box-main" alt="" src="assets/img/desktop--arrow-copy-091F8ABB-0257-46D5-A617-5C871F3FFBFF@2x.png" />
                        </div>
                        </div>
                    </span>
                    <div className="rectangle bp2-animate-enter4" show-on-scroll></div>
                    <div className="main_container_horizontal">
                        <div className="game-card-horizontal bp2-animate-enter5" show-on-scroll>
                        <a href="desktopgameshowcase.html">
                            <div className="group-card-horizontal smart_layers">
                            <img className="logo-oculus-store-horizontal" alt="" src="assets/img/desktop--mmlogo-oculusstore-1900F860-0654-4595-8AF5-6DD53DDDAE84@2x.png" />
                            <div className="main_container_horizontal">
                                <div className="logo_n-horizontal"></div>
                            </div>
                            </div>
                        </a>
                        <a href="desktopgameshowcase.html">
                        <div className="group-copy-horizontal smart_layers">
                            <img className="logo-oculus-store-group" alt="" src="assets/img/DLAV2.png" />
                            <div className="main_container_horizontal">
                            <div className="logo-group_horizontal"></div>
                            </div>
                        </div>
                        </a>
                        <div className="group-copy-2-horizontal smart_layers">
                            <img className="logo-oculus_store_copy-2" alt="" src="assets/img/KanyeNestV1.png" />
                            <div className="main_container_horizontal">
                            <div className="logo_copy-2"></div>
                            </div>
                        </div>
                        <div className="group-copy-3-horizontal smart_layers">
                            <img className="logo-oculus_store-copy-3" alt="" src="assets/img/potionpanic.png" />
                            <div className="main_container_horizontal">
                            <div className="logo-copy-3"></div>
                            </div>
                        </div>
                        </div>
                    </div>                  

                 </aside>
        </div>
    );
};

export default GameGallery;