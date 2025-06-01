import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

import data from '../data/constants.js';

class Game extends Component {
    static displayName = 'Game';

    // static propTypes = {
    //     name: PropTypes.string,
    //     index: PropTypes.number,
    //     dispatch: PropTypes.func.isRequired,
    // };

    constructor(props) {
        super(props);

        this.state = {
            logo: false,
            hoverEffect: false,
            title: 'Game',
        };
        console.log("-------------------------------------> ", data);

    }
    

    handleClick(gameName, e) {
    
        console.log('gameName', gameName);
        console.log('e', e);
        
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
        e.stopPropagation();
            // Pass Data here
        if($(window).innerWidth() <= 751) {
           $( '.rectangle_side-nav' ).css('margin-left','218%');
        } else {
           $( '.rectangle_side-nav' ).css('top','357px');
        }
        $( "#game_section" ).css('display','none');
        $( "#game_section_mobile" ).css('display','none');
        $( "#merch_section" ).css('display','none');
        $( "#other_section" ).css('display','block');
        $( ".bg-image-C61RwL" ).css('display','block');
        $( ".bg_grey" ).css('display','none');
        $( ".arrow_game_section" ).css('display','none');
    
    }

    renderGameBox(name) {
        if (name === `MuseumMultiverse`) {
            return (
                <a href="#" 
                    onClick={this.handleClick.bind(this, data[this.props.name])}
                >
                    <div className="group-card-horizontal smart_layers">
                    <img className="logo-oculus-store-horizontal" alt="" src={this.props.sideLogo}/>
                    <div className="main_container_horizontal">
                        <div className="logo_n-horizontal"></div>
                    </div>
                    </div>
                </a>
            );

        } else if (name === `DontLookAwayVR`) {
            return (
                <a href="#" 
                    onClick={this.handleClick.bind(this, data[this.props.name])}
                > 
                    <div className="group-copy-horizontal smart_layers">
                         <img className="logo-oculus-store-group" alt="" src={this.props.sideLogo} />
                         <div className="main_container_horizontal">
                             <div className="logo-group_horizontal"></div>
                        </div>
                    </div>
                </a>
            );
        } else {
            return (
                <a href="#" 
                    onClick={this.handleClick.bind(this, data[this.props.name])}
                >
                    <div className="group-card-horizontal smart_layers">
                    <img className="logo-oculus-store-horizontal" alt="" src={this.props.sideLogo}/>
                    <div className="main_container_horizontal">
                        <div className="logo_n-horizontal"></div>
                    </div>
                    </div>
                </a>
            );
        }
        return (
            <a href="#" 
                onClick={this.handleClick.bind(this, data[this.props.name])}
            >
                <div className="group-card-horizontal smart_layers">
                <img className="logo-oculus-store-horizontal" alt="" src={this.props.sideLogo}/>
                <div className="main_container_horizontal">
                    <div className="logo_n-horizontal"></div>
                </div>
                </div>
            </a>
        );
    }


    // motitagRemoveHighLight() {
    //     this.setState({
    //         hoverEffect: false,
    //     });
    // }

    // static handleName(tagName) {
    //     if (namesMotitags[tagName]) {
    //         return namesMotitags[tagName];
    //     }

    //     return tagName;
    // }

    // <a href="desktopgameshowcase.html">
    // <div className="group-copy-horizontal smart_layers">
    //     <img className="logo-oculus-store-group" alt="" src="assets/img/DLAV2.png" />
    //     <div className="main_container_horizontal">
    //     <div className="logo-group_horizontal"></div>
    //     </div>
    // </div>
    // </a>

    render() {
        const gameBox = this.renderGameBox(this.props.name);
        console.log("-------------------------------------> ", data[this.props.name]);
        return (
            <div>
                {gameBox}
            </div>
        );
    }
}

export default Game;