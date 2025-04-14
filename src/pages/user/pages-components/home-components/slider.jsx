import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css"; // Imports default Swiper styles

function Slider() {
  useEffect(() => {
    const swiper = new Swiper(".swiper.tf-sw-slideshow", {
      slidesPerView: 1,
      loop: true,
      autoplay: { delay: 3000 },
      pagination: {
        el: ".sw-pagination-slider",
        clickable: true,
      },
      effect: "fade",
      speed: 1000,
    });
    // Clean up on unmount
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="tf-slideshow slider-effect-fade position-relative">
      <div
        className="swiper tf-sw-slideshow"
        data-preview="1"
        data-tablet="1"
        data-mobile="1"
        data-centered="false"
        data-space="0"
        data-loop="true"
        data-auto-play="false"
        data-delay="0"
        data-speed="1000"
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="wrap-slider">
              <img
                src="/assets/images/slider/fashion-slideshow-01.jpg"
                alt="fashion-slideshow"
              />
              <div className="box-content">
                <div className="container">
                  <h1 className="fade-item fade-item-1">
                    Glamorous<br />Glam
                  </h1>
                  <p className="fade-item fade-item-2">
                    From casual to formal, we've got you covered
                  </p>
                  <a
                    href="shop-default.html"
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                  >
                    <span>Shop collection</span>
                    <i className="icon icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="wrap-slider">
              <img
                src="/assets/images/slider/fashion-slideshow-02.jpg"
                alt="fashion-slideshow"
              />
              <div className="box-content">
                <div className="container">
                  <h1 className="fade-item fade-item-1">
                    Simple <br className="md-hidden" />Style
                  </h1>
                  <p className="fade-item fade-item-2">
                    From casual to formal, we've got you covered
                  </p>
                  <a
                    href="shop-default.html"
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                  >
                    <span>Shop collection</span>
                    <i className="icon icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="wrap-slider">
              <img
                src="/assets/images/slider/fashion-slideshow-03.jpg"
                alt="fashion-slideshow"
              />
              <div className="box-content">
                <div className="container">
                  <h1 className="fade-item fade-item-1">
                    Glamorous<br />Glam
                  </h1>
                  <p className="fade-item fade-item-2">
                    From casual to formal, we've got you covered
                  </p>
                  <a
                    href="shop-default.html"
                    className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                  >
                    <span>Shop collection</span>
                    <i className="icon icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider justify-content-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
