import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Lookbook() {
    useEffect(() => {
        // Any additional Swiper settings if needed
    }, []);

    return (
        <>
            {/* <!-- Lookbook --> */}
            <section className="flat-spacing-6">
                <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <span className="title">Shop the look</span>
                    <p className="sub-title">
                        Inspire and let yourself be inspired, from one unique fashion to another.
                    </p>
                    <br/>
                </div>

                {/* Swiper Wrapper */}
                <Swiper
                    className="tf-sw-lookbook"
                    spaceBetween={0}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        480: { slidesPerView: 1 },
                    }}
                >
                    <SwiperSlide>
                        <div className="wrap-lookbook lookbook-1">
                            <div className="image">
                                <img className="lazyload" src="/assets/images/shop/file/lookbook-3.jpg" alt="image-lookbook" />
                            </div>
                            <div className="lookbook-item item-1">
                                <div className="inner">
                                    <div className="btn-group dropdown dropup dropdown-center">
                                        <button className="tf-pin-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span></span>
                                        </button>
                                        <ul className="dropdown-menu p-0 border-0">
                                            <li>
                                                <div className="lookbook-product">
                                                    <a href="product-detail.html" className="image">
                                                        <img className="lazyload" src="/assets/images/shop/products/img-p2.png" alt="lookbook-item" />
                                                    </a>
                                                    <div className="content-wrap">
                                                        <div className="product-title">
                                                            <a href="#">Jersey thong body</a>
                                                        </div>
                                                        <div className="price">$112.00</div>
                                                    </div>
                                                    <a href="#quick_view" data-bs-toggle="modal" className="">
                                                        <i className="icon-view"></i>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="lookbook-item item-2">
                                <div className="inner">
                                    <div className="btn-group dropdown dropup dropdown-center">
                                        <button className="tf-pin-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span></span>
                                        </button>
                                        <ul className="dropdown-menu p-0 border-0">
                                            <li>
                                                <div className="lookbook-product">
                                                    <a href="product-detail.html" className="image">
                                                        <img className="lazyload" src="/assets/images/shop/products/img-p4.png" alt="" />
                                                    </a>
                                                    <div className="content-wrap">
                                                        <div className="product-title">
                                                            <a href="#">Ribbed modal T-shirt</a>
                                                        </div>
                                                        <div className="price">$20.00</div>
                                                    </div>
                                                    <a href="#quick_view" data-bs-toggle="modal" className="">
                                                        <i className="icon-view"></i>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="wrap-lookbook lookbook-2">
                            <div className="image">
                                <img className="lazyload" src="/assets/images/shop/file/lookbook-4.jpg" alt="image-lookbook" />
                            </div>
                            <div className="lookbook-item item-1">
                                <div className="inner">
                                    <div className="btn-group dropdown dropup dropdown-center">
                                        <button className="tf-pin-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span></span>
                                        </button>
                                        <ul className="dropdown-menu p-0 border-0">
                                            <li>
                                                <div className="lookbook-product">
                                                    <a href="product-detail.html" className="image">
                                                        <img className="lazyload" src="/assets/images/shop/products/img-p5.png" alt="" />
                                                    </a>
                                                    <div className="content-wrap">
                                                        <div className="product-title">
                                                            <a href="#">Ribbed Tank Top</a>
                                                        </div>
                                                        <div className="price">$20.00</div>
                                                    </div>
                                                    <a href="#quick_view" data-bs-toggle="modal" className="">
                                                        <i className="icon-view"></i>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="wrap-pagination">
                    <div className="container-full">
                        <div className="sw-dots sw-pagination-lookbook justify-content-center"></div>
                    </div>
                </div>
            </section>
            {/* <!-- /Lookbook --> */}
        </>
    );
}

export default Lookbook;
