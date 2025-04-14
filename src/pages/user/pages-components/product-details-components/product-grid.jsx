import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductGrid() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            new Swiper(swiperRef.current, {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: ".nav-next-product",
                    prevEl: ".nav-prev-product",
                },
                pagination: {
                    el: ".sw-pagination-product",
                    clickable: true,
                },
                breakpoints: {
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },
                    480: { slidesPerView: 2 },
                },
            });
        }
    }, []);

    return (
        <>
            {/* <!-- product --> */}
            <section className="flat-spacing-1 pt_0">
                <div className="container">
                    <div className="flat-title">
                        <span className="title">People Also Bought</span>
                    </div>
                    <div className="hover-sw-nav hover-sw-2">
                        <div
                            dir="ltr"
                            className="swiper tf-sw-product-sell wrap-sw-over"
                            ref={swiperRef}
                        >
                            <div className="swiper-wrapper">
                                {/* Repeat Product 4 times */}
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="swiper-slide" lazy="true">
                                        <div className="card-product">
                                            <div className="card-product-wrapper">
                                                <a href="product-detail.html" className="product-img">
                                                    <img
                                                        className="lazyload img-product"
                                                        data-src="/assets/images/products/orange-1.jpg"
                                                        src="/assets/images/products/orange-1.jpg"
                                                        alt="image-product"
                                                    />
                                                    <img
                                                        className="lazyload img-hover"
                                                        data-src="/assets/images/products/white-1.jpg"
                                                        src="/assets/images/products/white-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </a>
                                                <div className="list-product-btn">
                                                    <a
                                                        href="#quick_add"
                                                        data-bs-toggle="modal"
                                                        className="box-icon bg_white quick-add tf-btn-loading"
                                                    >
                                                        <span className="icon icon-bag"></span>
                                                        <span className="tooltip">Quick Add</span>
                                                    </a>
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="box-icon bg_white wishlist btn-icon-action"
                                                    >
                                                        <span className="icon icon-heart"></span>
                                                        <span className="tooltip">Add to Wishlist</span>
                                                        <span className="icon icon-delete"></span>
                                                    </a>
                                                    <a
                                                        href="#compare"
                                                        data-bs-toggle="offcanvas"
                                                        aria-controls="offcanvasLeft"
                                                        className="box-icon bg_white compare btn-icon-action"
                                                    >
                                                        <span className="icon icon-compare"></span>
                                                        <span className="tooltip">Add to Compare</span>
                                                        <span className="icon icon-check"></span>
                                                    </a>
                                                    <a
                                                        href="#quick_view"
                                                        data-bs-toggle="modal"
                                                        className="box-icon bg_white quickview tf-btn-loading"
                                                    >
                                                        <span className="icon icon-view"></span>
                                                        <span className="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                                <div className="size-list">
                                                    <span>S</span>
                                                    <span>M</span>
                                                    <span>L</span>
                                                    <span>XL</span>
                                                </div>
                                            </div>
                                            <div className="card-product-info">
                                                <a href="product-detail.html" className="title link">
                                                    Ribbed Tank Top
                                                </a>
                                                <span className="price">$16.95</span>
                                                <ul className="list-color-product">
                                                    <li className="list-color-item color-swatch active">
                                                        <span className="tooltip">Orange</span>
                                                        <span className="swatch-value bg_orange-3"></span>
                                                        <img
                                                            className="lazyload"
                                                            data-src="/assets/images/products/orange-1.jpg"
                                                            src="/assets/images/products/orange-1.jpg"
                                                            alt="image-product"
                                                        />
                                                    </li>
                                                    <li className="list-color-item color-swatch">
                                                        <span className="tooltip">Black</span>
                                                        <span className="swatch-value bg_dark"></span>
                                                        <img
                                                            className="lazyload"
                                                            data-src="/assets/images/products/black-1.jpg"
                                                            src="/assets/images/products/black-1.jpg"
                                                            alt="image-product"
                                                        />
                                                    </li>
                                                    <li className="list-color-item color-swatch">
                                                        <span className="tooltip">White</span>
                                                        <span className="swatch-value bg_white"></span>
                                                        <img
                                                            className="lazyload"
                                                            data-src="/assets/images/products/white-1.jpg"
                                                            src="/assets/images/products/white-1.jpg"
                                                            alt="image-product"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round">
                            <span className="icon icon-arrow-left"></span>
                        </div>
                        <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round">
                            <span className="icon icon-arrow-right"></span>
                        </div>
                        <div className="sw-dots style-2 sw-pagination-product justify-content-center"></div>
                    </div>
                </div>
            </section>
            {/* <!-- /product --> */}
        </>
    );
}

export default ProductGrid;
