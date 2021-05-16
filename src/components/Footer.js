import React from 'react';

const Footer = () => {
    return (
        <div>
         <section className="footer">
            <div className="desktop screen">
                <div className="footer-final">
                <div className="madein-brooklyn-games-final">©MadeinBrooklynGames</div>
                <div className="main_container_horizontal">
                    <div className="logo-final"></div>
                </div>
                <div className="links-final" id="menu">
                    <div className="home-final normal_font_white">Home</div>
                    <div className="games-final normal_font_white">Games</div>
                    <div className="about-final normal_font_white">About</div>
                    <div className="contact-final normal_font_white">Contact</div>
                </div>
                <div className="privacy-policy-final interv-extra-light-white-12px">Privacy Policy</div>
                <div className="terms-conditions-final interv-extra-light-white-12px">Terms &amp; Conditions</div>
                </div>
            </div>
            <div className="mobile screen">
                <div className="mobile_background_footer"></div>
                <div className="main_container_horizontal">
                <div className="mobile_all_rights normal_white_12px">All rights reserved.</div>
                </div>
                <div className="main_container_horizontal">
                <div className="mobile_privacy_policy normal_white_12px">Privacy Policy</div>
                </div>
                <div className="main_container_horizontal">
                <div className="mobile_terms_condition normal_white_12px">Terms &amp; Condition</div>
                </div>
                <div className="main_container_horizontal">
                <div className="mobile_legal normal_white_12px">Legal</div>
                </div>
                <div className="main_container_horizontal">
                <div className="mobile_madein_brooklyn normal_white_12px">©2021 MadeinBrooklynGames</div>
                </div>
            </div>
            </section>
 
 
        </div>
    );
};

export default Footer;