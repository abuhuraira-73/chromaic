import React from "react";
import { Link } from "react-router-dom";


function Seller() {
    return (
        <>
            {/* <!-- Seller --> */}
            <section className="flat-spacing-5 pt_0 flat-seller">
                <div className="container">
                    <div className="flat-title">
                        <span className="title wow fadeInUp" data-wow-delay="0s">Best Seller</span>
                        <p className="sub-title wow fadeInUp" data-wow-delay="0s">Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
                    </div>
                    <div className="grid-layout loadmore-item wow fadeInUp" data-wow-delay="0s" data-grid="grid-4">

                        {/* <!-- card product 1 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                                <Link to="/productdetails" className="product-img">
                                    <img className="lazyload img-product" src="/assets/images/products/orange-1.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/white-1.jpg" alt="image-product" />
                                </Link>

                                <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
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
                                <Link to="/productdetails" className="title link">Ribbed Tank Top</Link>
                                <span className="price">$16.95</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">Orange</span>
                                        <span className="swatch-value bg_orange-3"></span>
                                        <img className="lazyload" src="/assets/images/products/orange-1.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Black</span>
                                        <span className="swatch-value bg_dark"></span>
                                        <img className="lazyload" src="/assets/images/products/black-1.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">White</span>
                                        <span className="swatch-value bg_white"></span>
                                        <img className="lazyload" src="/assets/images/products/white-1.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 2 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/brown.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/purple.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                                <div className="size-list">
                                    <span>M</span>
                                    <span>L</span>
                                    <span>XL</span>
                                </div>
                                <div className="countdown-box">
                                    <div className="js-countdown" data-timer="1007500" data-labels="d :,h :,m :,s"></div>
                                </div>
                            </div>
                            <div className="card-product-info">
                                <Link to="/productdetails" className="title link">Ribbed modal T-shirt</Link>
                                <span className="price">From $18.95</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">Brown</span>
                                        <span className="swatch-value bg_brown"></span>
                                        <img className="lazyload" src="/assets/images/products/brown.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Light Purple</span>
                                        <span className="swatch-value bg_purple"></span>
                                        <img className="lazyload" src="/assets/images/products/purple.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Light Green</span>
                                        <span className="swatch-value bg_light-green"></span>
                                        <img className="lazyload" src="/assets/images/products/green.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 3 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/white-3.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/white-4.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn absolute-2">
                                    <a href="#shoppingCart" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Add to cart</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">Oversized Printed T-shirt</Link>

                                <span className="price">$10.00</span>
                            </div>
                        </div>
                        {/* <!-- card product 4 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/white-2.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/pink-1.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
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
                            <Link to="/productdetails" className="title link">Oversized Printed T-shirt</Link>

                                <span className="price">$16.95</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">White</span>
                                        <span className="swatch-value bg_white"></span>
                                        <img className="lazyload" src="/assets/images/products/white-2.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Pink</span>
                                        <span className="swatch-value bg_purple"></span>
                                        <img className="lazyload" src="/assets/images/products/pink-1.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Black</span>
                                        <span className="swatch-value bg_dark"></span>
                                        <img className="lazyload" src="/assets/images/products/black-2.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 5 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/brown-2.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/brown-3.jpg" alt="image-product" />
                                    </Link>
                                    <div className="size-list">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                    <span>XL</span>
                                </div>
                                <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">V-neck linen T-shirt</Link>

                                <span className="price">$114.95</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">Brown</span>
                                        <span className="swatch-value bg_brown"></span>
                                        <img className="lazyload" src="/assets/images/products/brown-2.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">White</span>
                                        <span className="swatch-value bg_white"></span>
                                        <img className="lazyload" src="/assets/images/products/white-5.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 6 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/light-green-1.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/light-green-2.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn absolute-2">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">Loose Fit Sweatshirt</Link>

                                <span className="price">$10.00</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">Light Green</span>
                                        <span className="swatch-value bg_light-green"></span>
                                        <img className="lazyload" src="/assets/images/products/light-green-1.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Black</span>
                                        <span className="swatch-value bg_dark"></span>
                                        <img className="lazyload" src="/assets/images/products/black-3.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Blue</span>
                                        <span className="swatch-value bg_blue-2"></span>
                                        <img className="lazyload" src="/assets/images/products/blue.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Dark Blue</span>
                                        <span className="swatch-value bg_dark-blue"></span>
                                        <img className="lazyload" src="/assets/images/products/dark-blue.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">White</span>
                                        <span className="swatch-value bg_white"></span>
                                        <img className="lazyload" src="/assets/images/products/white-6.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Light Grey</span>
                                        <span className="swatch-value bg_light-grey"></span>
                                        <img className="lazyload" src="/assets/images/products/light-grey.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 7 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/black-4.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/black-5.jpg" alt="image-product" />
                                    </Link>
                                    <div className="size-list">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                </div>
                                <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">Regular Fit Oxford Shirt</Link>

                                <span className="price">$10.00</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">Black</span>
                                        <span className="swatch-value bg_dark"></span>
                                        <img className="lazyload" src="/assets/images/products/black-4.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Dark Blue</span>
                                        <span className="swatch-value bg_dark-blue"></span>
                                        <img className="lazyload" src="/assets/images/products/dark-blue-2.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Beige</span>
                                        <span className="swatch-value bg_beige"></span>
                                        <img className="lazyload" src="/assets/images/products/beige.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Light Blue</span>
                                        <span className="swatch-value bg_light-blue"></span>
                                        <img className="lazyload" src="/assets/images/products/light-blue.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">White</span>
                                        <span className="swatch-value bg_white"></span>
                                        <img className="lazyload" src="/assets/images/products/white-7.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 8 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/white-8.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/black-6.jpg" alt="image-product" />
                                    </Link>
                                    <div className="size-list">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                    <span>XL</span>
                                </div>
                                <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">Loose Fit Hoodie</Link>

                                <span className="price">$9.95</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">White</span>
                                        <span className="swatch-value bg_white"></span>
                                        <img className="lazyload" src="/assets/images/products/white-8.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Black</span>
                                        <span className="swatch-value bg_dark"></span>
                                        <img className="lazyload" src="/assets/images/products/black-7.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Blue</span>
                                        <span className="swatch-value bg_blue-2"></span>
                                        <img className="lazyload" src="/assets/images/products/blue-2.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 9 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/brown-4.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/black-8.jpg" alt="image-product" />
                                    </Link>
                                    <div className="size-list">
                                    <span>M</span>
                                    <span>L</span>
                                    <span>XL</span>
                                </div>
                                <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">Patterned scarf</Link>

                                <span className="price">$14.95</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">Brown</span>
                                        <span className="swatch-value bg_brown"></span>
                                        <img className="lazyload" src="/assets/images/products/brown-4.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Black</span>
                                        <span className="swatch-value bg_dark"></span>
                                        <img className="lazyload" src="/assets/images/products/black-8.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 10 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/black-9.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/black-10.jpg" alt="image-product" />
                                    </Link>
                                    <div className="size-list">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                </div>
                                <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">Slim Fit Fine-knit Turtleneck Sweater</Link>

                                <span className="price">$18.95</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">Black</span>
                                        <span className="swatch-value bg_dark"></span>
                                        <img className="lazyload" src="/assets/images/products/black-9.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Black</span>
                                        <span className="swatch-value bg_white"></span>
                                        <img className="lazyload" src="/assets/images/products/white-9.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 11 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/grey-2.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/grey.jpg" alt="image-product" />
                                    </Link>
                                    <div className="size-list">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                </div>
                                <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">Slim Fit Fine-knit Turtleneck Sweater</Link>

                                <span className="price">$18.95</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="tooltip">Grey</span>
                                        <span className="swatch-value bg_grey"></span>
                                        <img className="lazyload" src="/assets/images/products/grey-2.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Pink</span>
                                        <span className="swatch-value bg_pink"></span>
                                        <img className="lazyload" src="/assets/images/products/pink-2.jpg" alt="image-product" />
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="tooltip">Light Pink</span>
                                        <span className="swatch-value bg_light-pink"></span>
                                        <img className="lazyload" src="/assets/images/products/light-pink.jpg" alt="image-product" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- card product 12 --> */}
                        <div className="card-product fl-item">
                            <div className="card-product-wrapper">
                            <Link to="/productdetails" className="product-img">
                            <img className="lazyload img-product" src="/assets/images/products/black-11.jpg" alt="image-product" />
                                    <img className="lazyload img-hover" src="/assets/images/products/black-12.jpg" alt="image-product" />
                                    </Link>
                                    <div className="size-list">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                </div>
                                <div className="list-product-btn">
                                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                        <span className="icon icon-bag"></span>
                                        <span className="tooltip">Quick Add</span>
                                    </a>
                                    <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                        <span className="icon icon-heart"></span>
                                        <span className="tooltip">Add to Wishlist</span>
                                        <span className="icon icon-delete"></span>
                                    </a>
                                    <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                        <span className="icon icon-compare"></span>
                                        <span className="tooltip">Add to Compare</span>
                                        <span className="icon icon-check"></span>
                                    </a>
                                    <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                        <span className="icon icon-view"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-product-info">
                            <Link to="/productdetails" className="title link">Slim Fit Fine-knit Turtleneck Sweater</Link>
                                <span className="price">$18.95</span>

                            </div>
                        </div>
                    </div>
                    <div className="tf-pagination-wrap view-more-button text-center">
                        <button className="tf-btn-loading tf-loading-default style-2 btn-loadmore "><span className="text">Load more</span></button>
                    </div>
                </div>
            </section>
            {/* <!-- /Seller --> */}

        </>
    )
}
export default Seller;