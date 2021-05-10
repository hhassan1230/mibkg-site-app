function Nav() {
  return (
    <section>
      <div className="desktop screen">
        <div className="nav-bar-final">
          <div className="burger" id="burger">
            <span className="burger-open" id="open_menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                <g fill="#FE8806" fill-rule="evenodd">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"></path>
                </g>
              </svg>
            </span>
            <span className="burger-close menu-hide" id="close_menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#FE8806" fill-rule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"></path>
              </svg>
            </span>
          </div>
          <div className="tabs-final menu" id="menu">
            <a href="#">
              <div className="home-footer normal_font_white">Home</div>
            </a>
            <a href="#platform-filter-box">
              <div className="games-footer normal_font_white">Games</div>
            </a>
            <a href="#">
              <div className="about-footer normal_font_white">About</div>
            </a>
            <a href="#">
              <div className="contact-footer normal_font_white">Contact</div>
            </a>
            <div className="social-media-icons-mobile" show-on-scroll="">
              <a href="https://www.linkedin.com/company/made-in-brooklyn-games/" target="_blank">
                <div className="linkedin animate-enter4" show-on-scroll="">
                <img className="shape-7mxTZx smart-layers-pointers" src="img/mobile-menu-overlay-shape-EAB77E60-DA83-4AFB-B070-A59CC88BDFC0@2x.png" /></div></a>
              <a href="#">
                <div className="twitter animate-enter4" show-on-scroll="">
                <img className="shape-7mxtwx smart-layers-pointers" src="img/mobile-menu-overlay-path-4738644C-66F0-49A4-BD66-1DCA299233A3@2x.png" /></div>
              </a>
              <a href="https://www.facebook.com/MiBKG" target="_blank">
                <div className="facebook animate-enter6" show-on-scroll="">
                <img className="path-kT5t8C smart-layers-pointers" src="img/mobile-menu-overlay-path-CA2DB456-2CEB-45BF-8D6E-2F41D27B334A@2x.png" /></div></a>
              <a href="https://www.instagram.com/madeinbkgames/" target="_blank">
                <div className="instagram animate-enter7 smart-layers-pointers" show-on-scroll="">
                <img className="shape-vRRNIw" src="img/mobile-menu-overlay-shape-988B7600-1D1B-4E4B-98B7-6882237994EB@2x.png" />
                <img className="path-vRRNIw" src="img/mobile-menu-overlay-path-5DE0C9A7-C246-4F6D-9890-24C641C4FCA0@2x.png" />
                </div>
              </a>
              </div>
          </div>
          <div className="main_container_horizontal">
            <div className="logo-footer"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
