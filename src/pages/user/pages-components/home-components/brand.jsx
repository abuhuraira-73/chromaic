import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/pagination";

function Brand() {
  useEffect(() => {
    new Swiper(".tf-sw-brand", {
      slidesPerView: 6,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: ".sw-pagination-brand",
        clickable: true,
      },
      breakpoints: {
        1024: { slidesPerView: 6 },
        768: { slidesPerView: 3 },
        576: { slidesPerView: 2 },
      },
    });
  }, []);

  return (
    <>
      {/* <!-- brand --> */}
      <section className="flat-spacing-5 pt_0">
        <div className="container">
          <div
            className="swiper tf-sw-brand"
            data-loop="false"
            data-play="false"
            data-preview="6"
            data-tablet="3"
            data-mobile="2"
            data-space-lg="0"
            data-space-md="0"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-item">
                  <img
                    className="lazyload"
                    src="/assets/images/brand/brand-01.png"
                    alt="image-brand"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-item">
                  <img
                    className="lazyload"
                    src="/assets/images/brand/brand-02.png"
                    alt="image-brand"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-item">
                  <img
                    className="lazyload"
                    src="/assets/images/brand/brand-03.png"
                    alt="image-brand"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-item">
                  <img
                    className="lazyload"
                    src="/assets/images/brand/brand-04.png"
                    alt="image-brand"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-item">
                  <img
                    className="lazyload"
                    src="/assets/images/brand/brand-05.png"
                    alt="image-brand"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-item">
                  <img
                    className="lazyload"
                    src="/assets/images/brand/brand-06.png"
                    alt="image-brand"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sw-dots style-2 sw-pagination-brand justify-content-center"></div>
        </div>
      </section>
      {/* <!-- /brand --> */}
    </>
  );
}

export default Brand;
