import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/pagination";

function Shopgram() {
  useEffect(() => {
    new Swiper(".tf-sw-shop-gallery", {
      slidesPerView: 5,
      spaceBetween: 7,
      loop: false,
      autoplay: false,
      pagination: {
        el: ".sw-pagination-gallery",
        clickable: true,
      },
      breakpoints: {
        1024: { slidesPerView: 5 },
        768: { slidesPerView: 3 },
        576: { slidesPerView: 2 },
      },
    });
  }, []);

  return (
    <>
      {/* <!-- Shop Gram -->  */}
      <section className="flat-spacing-7">
        <div className="container">
          <div className="flat-title wow fadeInUp" data-wow-delay="0s">
            <span className="title">Shop Gram</span>
            <p className="sub-title">
              Inspire and let yourself be inspired, from one unique fashion to another.
            </p>
          </div>
          <div className="wrap-carousel wrap-shop-gram">
            <div
              className="swiper tf-sw-shop-gallery"
              data-preview="5"
              data-tablet="3"
              data-mobile="2"
              data-space-lg="7"
              data-space-md="7"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".2s">
                    <div className="img-style">
                      <img
                        className="lazyload img-hover"
                        src="/assets/images/shop/gallery/gallery-7.jpg"
                        alt="image-gallery"
                      />
                    </div>
                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon">
                      <span className="icon icon-bag"></span> 
                      <span className="tooltip">Quick Add</span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".3s">
                    <div className="img-style">
                      <img
                        className="lazyload img-hover"
                        src="/assets/images/shop/gallery/gallery-3.jpg"
                        alt="image-gallery"
                      />
                    </div>
                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon">
                      <span className="icon icon-bag"></span> 
                      <span className="tooltip">Quick Add</span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="img-style">
                      <img
                        className="lazyload img-hover"
                        src="/assets/images/shop/gallery/gallery-5.jpg"
                        alt="image-gallery"
                      />
                    </div>
                    <a href="#quick_add" data-bs-toggle="modal" className="box-icon">
                      <span className="icon icon-bag"></span> 
                      <span className="tooltip">Quick Add</span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".5s">
                    <div className="img-style">
                      <img
                        className="lazyload img-hover"
                        src="/assets/images/shop/gallery/gallery-8.jpg"
                        alt="image-gallery"
                      />
                    </div>
                    <a href="product-detail.html" className="box-icon">
                      <span className="icon icon-bag"></span> 
                      <span className="tooltip">View product</span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".6s">
                    <div className="img-style">
                      <img
                        className="lazyload img-hover"
                        src="/assets/images/shop/gallery/gallery-6.jpg"
                        alt="image-gallery"
                      />
                    </div>
                    <a href="product-detail.html" className="box-icon">
                      <span className="icon icon-bag"></span> 
                      <span className="tooltip">View product</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sw-dots sw-pagination-gallery justify-content-center"></div>
          </div>
        </div>
      </section>
      {/* <!-- /Shop Gram --> */}
    </>
  );
}

export default Shopgram;
