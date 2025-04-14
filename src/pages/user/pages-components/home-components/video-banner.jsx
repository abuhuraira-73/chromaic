import React from "react";

function Videobanner() {
    return (
        <>
            {/* <!-- Banner Collection --> */}
            <section className="tf-slideshow slider-video position-relative">
                <div className="banner-wrapper">
                    <video
                        src="/assets/images/slider/slider-video-2.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                    ></video>
                    <div className="box-content text-center">
                        <div className="container wow fadeInUp" data-wow-delay="0s">
                            <p className="subheading text-white fw-7">
                                FREE SHIPPING OVER ORDER $120
                            </p>
                            <h1 className="heading text-white">Spring Collection</h1>
                            <p className="description text-white">
                                Here is your chance to upgrade your wardrobe with a variation of styles
                            </p>
                            <a
                                href="shop-women.html"
                                className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn"
                            >
                                <span>Shop now</span>
                                <i className="icon icon-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Banner collection --> */}
            <br/>
            <br/>
        </>
    );
}

export default Videobanner;
