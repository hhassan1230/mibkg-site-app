import React from 'react';

const Social = () => {
    return (
        <div>
               <div className="text_get_in_touch h2colorblack h2colorwhite bp2-animate-enter14" show-on-scroll>Get in touch</div>
                    <div className="social_media_icons" show-on-scroll>
                    <a href="https://www.linkedin.com/company/made-in-brooklyn-games/" target="_blank">
                        <div className="linkedin_social bp2-animate-enter15" show-on-scroll>
                        <img className="shape_social smart_layers" alt="" src="assets/img/desktop--shape-2AD9A0D5-12A2-4765-8657-E5DC47012802@2x.png" />
                        </div>
                    </a>
                    <div className="twitter_social bp2-animate-enter16" show-on-scroll></div>
                    <a href="https://www.facebook.com/MiBKG" target="_blank">
                        <div className="facebook_twitter_social bp2-animate-enter17" show-on-scroll>
                        <img className="path_twitter_social smart_layers" alt="" src="assets/img/desktop--path-8E71586B-EB5D-4378-A93F-C76DA75A305B@2x.png" />
                        </div>
                    </a>
                </div>
        </div>
    );
};

export default Social;