import React from 'react';
import Merch from './Merch';

const MerchGallery = () => {
    return (
        <div>
             <aside id="merch_section">
                    <div className="main_merch_section">
                        
                        <div className="title-main">
                        <h2 className="bp1-animate-enter5">Featured Products</h2>
                        <img className="title_border " alt="" src="assets/img/desktop--merch-line-2-2107EC14-7152-41FF-8DA2-EA774F1D5CDD@2x.png"/>
                        <img className="title_border " show-on-scroll="" alt="" src="assets/img/desktop--merch-line-2-copy-2DDCCE33-3D3B-4187-81AD-5D9A7B457D1E@2x.png" />
                        <img className="title_border " alt="" src="assets/img/desktop--merch-line-2-copy-2-A7B9F052-87D3-4540-A044-0FEB2708992C@2x.png"/>
                        <img className="title_border " alt="" src="assets/img/desktop--merch-line-2-copy-3-745DFCBE-72FC-4DC5-B707-076A46B860A3@2x.png"/>
                        </div>
                        
                        <div className="four_prodect">
                        <Merch
                            price='$35.00'
                            img='assets/img/t-shirt-v4.png'
                            product='T-shirt'
                        />
                        <Merch
                            price='$35.00'
                            img='assets/img/t-shirt-1-tiny.png'
                            product='T-shirt'
                        />
                        <Merch
                            price='$35.00'
                            img='assets/img/t-shirt-v6.png'
                            product='T-shirt'
                        />
                        <Merch
                            price='$35.00'
                            img='assets/img/t-shirt-v7.png'
                            product='T-shirt'
                        />
                        <Merch
                            price='$530.00'
                            img='assets/img/Kracelet.jpeg'
                            product='Watch'
                        />
                        <Merch
                            price='$250.00'
                            img='assets/img/IMG-WA0001.jpeg'
                            product='Sneakers'
                        />
                        <Merch
                            price='$250.00'
                            img='assets/img/IMG-WA0002.jpeg'
                            product='Sneakers'
                        />
                        <Merch
                            price='$250.00'
                            img='assets/img/IMG-WA0003.jpeg'
                            product='Sneakers'
                        />
                        </div>
                    </div>
            </aside>
        </div>
    );
};

export default MerchGallery;