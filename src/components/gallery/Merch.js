import React, { Component, PropTypes } from 'react';

// import { show } from './motitagsActions';

class Merch extends Component {
    static displayName = 'Merch';

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
            title: 'Merch',
            price: this.props.price, //'$15.00',
            productImg: this.props.img, //'assets/img/prodect-simple.png',
            productName: this.props.product, //'T-shirt'
        };
    }

    handleClick(MerchName, e) {

        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
        e.stopPropagation();
        alert("I am selecting " + this.props.name);
        //this.props.dispatch(show(MerchName));
    }

    renderMerchBox() {
        return (
            <div className="prodect_card">
                <img alt="" src={this.state.productImg} className="prodect_img"/>
                <div className="prodect_name">{this.state.productName}</div>
                <div className="proect_price">{this.state.price}</div>
            </div>
        );
    }

    render() {
        const merchBox = this.renderMerchBox();
        return (
            <div>
                {merchBox}
            </div>
        );
    }
}

export default Merch;