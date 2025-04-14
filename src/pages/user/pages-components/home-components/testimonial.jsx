import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
    useEffect(() => {
        new Swiper(".tf-sw-testimonial", {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                prevEl: ".nav-prev-testimonial",
                nextEl: ".nav-next-testimonial",
            },
            pagination: {
                el: ".sw-pagination-testimonial",
                clickable: true,
            },
            breakpoints: {
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
            },
        });
    }, []);

    return (
        <>
            {/* <!-- Testimonial -->  */}
            <section className="flat-spacing-5 pt_0 flat-testimonial">
                <div className="container">
                    <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                        <span className="title">Happy Clients</span>
                        <p className="sub-title">Hear what they say about us</p>
                    </div>
                    <div className="wrap-carousel">
                        <div className="swiper tf-sw-testimonial" data-preview="3" data-tablet="2" data-mobile="1" data-space-lg="30" data-space-md="15">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item style-column wow fadeInUp" data-wow-delay="0s">
                                        <div className="rating">
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                        </div>
                                        <div className="heading">Best Online Fashion Site</div>
                                        <div className="text">
                                            “ I always find something stylish and affordable on this web fashion site ”
                                        </div>
                                        <div className="author">
                                            <div className="name">Robert smith</div>
                                            <div className="metas">Customer from USA</div>
                                        </div>
                                        <div className="product">
                                            <div className="image">
                                                <a href="product-detail.html">
                                                    <img className="lazyload" src="/assets/images/shop/products/img-p2.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="content-wrap">
                                                <div className="product-title">
                                                    <a href="product-detail.html">Jersey thong body</a>
                                                </div>
                                                <div className="price">$105.95</div>
                                            </div>
                                            <a href="product-detail.html"><i className="icon-arrow1-top-left"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item style-column wow fadeInUp" data-wow-delay=".1s">
                                        <div className="rating">
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                        </div>
                                        <div className="heading">Great Selection and Quality</div>
                                        <div className="text">
                                            "I love the variety of styles and the high-quality clothing on this web fashion site."
                                        </div>
                                        <div className="author">
                                            <div className="name">Allen Lyn</div>
                                            <div className="metas">Customer from France<span></span></div>
                                        </div>
                                        <div className="product">
                                            <div className="image">
                                                <a href="product-detail.html">
                                                    <img className="lazyload" src="/assets/images/shop/products/img-p3.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="content-wrap">
                                                <div className="product-title">
                                                    <a href="product-detail.html">Cotton jersey top</a>
                                                </div>
                                                <div className="price">$7.95</div>
                                            </div>
                                            <a href="product-detail.html"><i className="icon-arrow1-top-left"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item style-column wow fadeInUp" data-wow-delay=".2s">
                                        <div className="rating">
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                        </div>
                                        <div className="heading">Best Customer Service</div>
                                        <div className="text">
                                            "I finally found a web fashion site with stylish and flattering options in my size."
                                        </div>
                                        <div className="author">
                                            <div className="name">Peter Rope</div>
                                            <div className="metas">Customer from USA</div>
                                        </div>
                                        <div className="product">
                                            <div className="image">
                                                <a href="product-detail.html">
                                                    <img className="lazyload" src="/assets/images/shop/products/img-p4.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="content-wrap">
                                                <div className="product-title">
                                                    <a href="product-detail.html">Ribbed modal T-shirt</a>
                                                </div>
                                                <div className="price">From $18.95</div>
                                            </div>
                                            <a href="product-detail.html"><i className="icon-arrow1-top-left"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons with temporary inline styles for debugging */}
                        <div className="nav-sw nav-prev-slider nav-prev-testimonial lg" style={{ background: "red", padding: "10px", zIndex: 9999 }}>
                            <span className="icon icon-arrow-left"></span>
                        </div>
                        <div className="nav-sw nav-next-slider nav-next-testimonial lg" style={{ background: "red", padding: "10px", zIndex: 9999 }}>
                            <span className="icon icon-arrow-right"></span>
                        </div>
                        <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center"></div>
                    </div>
                </div>
            </section>
            {/* <!-- /Testimonial --> */}
        </>
    );
}

export default Testimonial;
