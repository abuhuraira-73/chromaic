import React from "react";
function Iconbox() {

    return (
        <>
            <section className="flat-spacing-7 flat-iconbox wow fadeInUp" data-wow-delay="0s">
                <div className="container">
                    <div className="wrap-carousel wrap-mobile">
                        <div className="swiper tf-sw-mobile" data-preview="1" data-space="15">
                            <div className="swiper-wrapper wrap-iconbox">
                                <div className="swiper-slide">
                                    <div className="tf-icon-box style-border-line text-center">
                                        <div className="icon">
                                            <i className="icon-shipping"></i>
                                        </div>
                                        <div className="content">
                                            <div className="title">Free Shipping</div>
                                            <p>Free shipping over order $120</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="tf-icon-box style-border-line text-center">
                                        <div className="icon">
                                            <i className="icon-payment fs-22"></i>
                                        </div>
                                        <div className="content">
                                            <div className="title">Flexible Payment</div>
                                            <p>Pay with Multiple Credit Cards</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="tf-icon-box style-border-line text-center">
                                        <div className="icon">
                                            <i className="icon-return fs-22"></i>
                                        </div>
                                        <div className="content">
                                            <div className="title">14 Day Returns</div>
                                            <p>Within 30 days for an exchange</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="tf-icon-box style-border-line text-center">
                                        <div className="icon">
                                            <i className="icon-suport"></i>
                                        </div>
                                        <div className="content">
                                            <div className="title">Premium Support</div>
                                            <p>Outstanding premium support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="sw-dots style-2 sw-pagination-mb justify-content-center"></div>
                    </div>
                </div>
            </section>
            {/* <!-- /Icon box --> */}

        </>
    )

}
export default Iconbox;