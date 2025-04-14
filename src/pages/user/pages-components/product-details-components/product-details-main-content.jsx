import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CompareAskDileveryShare from "./compare-ask-delivery-share";
import BottomAddToCart from "./bottom-add-to-cart";

function ProductDetailsMainContent() {
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("beige");

  useEffect(() => {
    // Initialize the thumbs slider
    thumbsSwiperRef.current = new Swiper(".swiper.tf-product-media-thumbs", {
      direction: "vertical",
      slidesPerView: "auto",
      spaceBetween: 10,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    // Initialize the main slider and link it to the thumbs slider
    mainSwiperRef.current = new Swiper(".swiper.tf-product-media-main", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsSwiperRef.current,
      },
    });
  }, []);

  useEffect(() => {
    // When the selected color changes, slide to the first main slide with that data-color
    if (mainSwiperRef.current) {
      const slides = mainSwiperRef.current.slides;
      let targetIndex = 0;
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].getAttribute("data-color") === selectedColor) {
          targetIndex = i;
          break;
        }
      }
      mainSwiperRef.current.slideTo(targetIndex);
    }
  }, [selectedColor]);

  return (
    <>
      {/* default */}
      <section className="flat-spacing-4 pt_0">
        <div className="tf-main-product section-image-zoom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="tf-product-media-wrap sticky-top">
                  <div className="thumbs-slider">
                    <div dir="ltr" className="swiper tf-product-media-thumbs other-image-zoom" data-direction="vertical" >
                      <div className="swiper-wrapper stagger-wrap">
                        {/* beige */}
                        <div className="swiper-slide stagger-item" data-color="beige">
                          <div className="item">
                            <img
                              className="lazyload"
                              data-src="/assets/images/shop/products/hmgoepprod31.jpg"
                              src="/assets/images/shop/products/hmgoepprod31.jpg"
                              alt="img-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item" data-color="beige">
                          <div className="item">
                            <img
                              className="lazyload"
                              data-src="/assets/images/shop/products/hmgoepprod.jpg"
                              src="/assets/images/shop/products/hmgoepprod.jpg"
                              alt="img-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item" data-color="beige">
                          <div className="item">
                            <img
                              className="lazyload"
                              data-src="/assets/images/shop/products/hmgoepprod2.jpg"
                              src="/assets/images/shop/products/hmgoepprod2.jpg"
                              alt="img-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item" data-color="beige">
                          <div className="item">
                            <img
                              className="lazyload"
                              data-src="/assets/images/shop/products/hmgoepprod3.jpg"
                              src="/assets/images/shop/products/hmgoepprod3.jpg"
                              alt="img-product"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div dir="ltr" className="swiper tf-product-media-main" id="gallery-swiper-started" >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide" data-color="beige">
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="/assets/images/shop/products/hmgoepprod31.jpg"
                            data-src="/assets/images/shop/products/hmgoepprod31.jpg"
                            src="/assets/images/shop/products/hmgoepprod31.jpg"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide" data-color="beige">
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="/assets/images/shop/products/hmgoepprod.jpg"
                            data-src="/assets/images/shop/products/hmgoepprod.jpg"
                            src="/assets/images/shop/products/hmgoepprod.jpg"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide" data-color="beige">
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="/assets/images/shop/products/hmgoepprod2.jpg"
                            data-src="/assets/images/shop/products/hmgoepprod2.jpg"
                            src="/assets/images/shop/products/hmgoepprod2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="swiper-slide" data-color="beige">
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="/assets/images/shop/products/hmgoepprod3.jpg"
                            data-src="/assets/images/shop/products/hmgoepprod3.jpg"
                            src="/assets/images/shop/products/hmgoepprod3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-button-next button-style-arrow thumbs-next"></div>
                      <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tf-product-info-wrap position-relative">
                  <div className="tf-zoom-main"></div>
                  <div className="tf-product-info-list other-image-zoom">
                    <div className="tf-product-info-title">
                      <h5>Cotton jersey top</h5>
                    </div>
                    <div className="tf-product-info-badges">
                      <div className="badges">Best seller</div>
                      <div className="product-status-content">
                        <i className="icon-lightning"></i>
                        <p className="fw-6">
                          Selling fast! 56 people have  this in their carts.
                        </p>
                      </div>
                    </div>
                    <div className="tf-product-info-price">
                      <div className="price-on-sale">$8.00</div>
                      <div className="compare-at-price">$30.00</div>
                      <div className="badges-on-sale">
                        <span>20</span>% OFF
                      </div>
                    </div>
                    <div className="tf-product-info-liveview">
                      <div className="liveview-count">20</div>
                      <p className="fw-6">People are viewing this right now</p>
                    </div>
                    <div className="tf-product-info-countdown">
                      <div className="countdown-wrap">
                        <div className="countdown-title">
                          <i className="icon-time tf-ani-tada"></i>
                          <p>HURRY UP! SALE ENDS IN:</p>
                        </div>
                        <div className="tf-countdown style-1">
                          <div
                            className="js-countdown"
                            data-timer="1007500"
                            data-labels="Days :,Hours :,Mins :,Secs"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-info-variant-picker">
                      <div className="variant-picker-item">
                        <div className="variant-picker-label">
                          Color:{" "}
                          <span className="fw-6 variant-picker-label-value value-currentColor">
                            Beige
                          </span>
                        </div>
                        <div className="variant-picker-values">
                          <input
                            id="values-beige"
                            type="radio"
                            name="color1"
                            defaultChecked
                            onChange={() => setSelectedColor("beige")}
                          />
                          <label
                            className="hover-tooltip radius-60 color-btn"
                            htmlFor="values-beige"
                            data-color="beige"
                            data-value="Beige"
                          >
                            <span className="btn-checkbox bg-color-beige"></span>
                            <span className="tooltip">Beige</span>
                          </label>
                          <input
                            id="values-black"
                            type="radio"
                            name="color1"
                            onChange={() => setSelectedColor("black")}
                          />
                          <label
                            className="hover-tooltip radius-60 color-btn"
                            data-price="9"
                            htmlFor="values-black"
                            data-color="black"
                            data-value="Black"
                          >
                            <span className="btn-checkbox bg-color-black"></span>
                            <span className="tooltip">Black</span>
                          </label>
                          <input
                            id="values-blue"
                            type="radio"
                            name="color1"
                            onChange={() => setSelectedColor("blue")}
                          />
                          <label
                            className="hover-tooltip radius-60 color-btn"
                            data-price="10"
                            htmlFor="values-blue"
                            data-color="blue"
                            data-value="Blue"
                          >
                            <span className="btn-checkbox bg-color-blue"></span>
                            <span className="tooltip">Blue</span>
                          </label>
                          <input
                            id="values-white"
                            type="radio"
                            name="color1"
                            onChange={() => setSelectedColor("white")}
                          />
                          <label
                            className="hover-tooltip radius-60 color-btn"
                            data-price="12"
                            htmlFor="values-white"
                            data-color="white"
                            data-value="White"
                          >
                            <span className="btn-checkbox bg-color-white"></span>
                            <span className="tooltip">White</span>
                          </label>
                        </div>
                      </div>
                      <div className="variant-picker-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="variant-picker-label">
                            Size:{" "}
                            <span className="fw-6 variant-picker-label-value">S</span>
                          </div>
                          <a href="#find_size" data-bs-toggle="modal" className="find-size fw-6">
                            Find your size
                          </a>
                        </div>
                        <div className="variant-picker-values">
                          <input type="radio" name="size1" id="values-s" defaultChecked />
                          <label className="style-text size-btn" htmlFor="values-s" data-value="S">
                            <p>S</p>
                          </label>
                          <input type="radio" name="size1" id="values-m" />
                          <label className="style-text size-btn" data-price="9" htmlFor="values-m" data-value="M">
                            <p>M</p>
                          </label>
                          <input type="radio" name="size1" id="values-l" />
                          <label className="style-text size-btn" data-price="10" htmlFor="values-l" data-value="L">
                            <p>L</p>
                          </label>
                          <input type="radio" name="size1" id="values-xl" />
                          <label className="style-text size-btn" data-price="12" htmlFor="values-xl" data-value="XL">
                            <p>XL</p>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-info-quantity">
                      <div className="quantity-title fw-6">Quantity</div>
                      <div className="wg-quantity">
                        <span className="btn-quantity btn-decrease">-</span>
                        <input
                          type="text"
                          className="quantity-product"
                          name="number"
                          defaultValue="1"
                        />
                        <span className="btn-quantity btn-increase">+</span>
                      </div>
                    </div>
                    <div className="tf-product-info-buy-button">
                      <form className="">
                        <a
                          href="javascript:void(0);"
                          className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                        >
                          <span>Add to cart - </span>
                          <span className="tf-qty-price total-price">$8.00</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                        >
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Add to Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                        >
                          <span className="icon icon-compare"></span>
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </a>
                        <div className="w-100">
                          <a href="#" className="btns-full">
                            Buy with <img src="/assets/images/payments/paypal.png" alt="" />
                          </a>
                          <a href="#" className="payment-more-option">
                            More payment options
                          </a>
                        </div>
                      </form>
                    </div>
                    <CompareAskDileveryShare/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomAddToCart/>
      </section>
      {/* /default */}
    </>
  );
}

export default ProductDetailsMainContent;
