import React, { Component, PropTypes } from 'react';

// import { show } from './motitagsActions';

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
    }

    handleClick(gameName, e) {

        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
        e.stopPropagation();
        alert("I am selecting " + this.props.name);
        //this.props.dispatch(show(gameName));
    }

    renderGameBox(name) {
        if (name == `MusuemMultiverse`) {
            return (
                <a href="#" 
                    onClick={this.handleClick.bind(this, this.props.name)}
                >
                    <div className="group-card-horizontal smart_layers">
                    <img className="logo-oculus-store-horizontal" alt="" src={this.props.sideLogo}/>
                    <div className="main_container_horizontal">
                        <div className="logo_n-horizontal"></div>
                    </div>
                    </div>
                </a>
            );
        } else if (name == `DontLookAwayVR`) {
            return (
                <a href="#" 
                    onClick={this.handleClick.bind(this, this.props.name)}
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
                    onClick={this.handleClick.bind(this, this.props.name)}
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
                onClick={this.handleClick.bind(this, this.props.name)}
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
        return (
            <div>
                {gameBox}
            </div>
        );
    }
}

export default Game;