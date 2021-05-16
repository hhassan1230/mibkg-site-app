import React from 'react';

const Forms = () => {
    return (
        <div>
            
            <div id="contact" className="form-field-content bp2-animate-enter12" show-on-scroll>
                    <div className="checkboxinactive-content"></div>
                    <div className="topic-box-content">
                        <div className="whats-the-topic-content interv_semi_bold_white">What’s the topic?</div>
                    </div>
                    <div className="submit-btn-topic smart_layers">
                        <div className="submit-topic">Submit</div>
                    </div>
                    <div className="form-input-message-topic"></div>
                    <textarea className="text-tell-me-about-yourself-topic" name="texttellmeaboutyourself" placeholder="Tell me about yourself" type="text" required></textarea>
                    <div className="sign-up-to-upcoming-topic normal_white_font">Sign up to upcoming news and events.</div>
                    <div className="form-input-events">
                        <div className="overlap-group-events">
                        <div className="form-field-box-1-events border-2px-white"></div>
                        <input className="text-your-name-events interv-normal-white-16px-2" name="textyourname" placeholder="Your Name" type="text" required />
                        </div>
                        <div className="overlap-group1-events">
                        <div className="form-field-box-2-events border-2px-white"></div>
                        <input className="text-your-email-events interv-normal-white-16px-2" name="textyouremail" placeholder="Your Email" type="email" required />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Forms;