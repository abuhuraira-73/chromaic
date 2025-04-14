import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";

function Categories() {
  useEffect(() => {
    const swiper = new Swiper(".swiper.tf-sw-collection", {
      slidesPerView: 3,
      spaceBetween: 15,
      loop: false,
      navigation: {
        nextEl: ".nav-prev-slider.nav-prev-collection",
        prevEl: ".nav-next-slider.nav-next-collection ",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      {/* <!-- Categories --> */}
      <section className="flat-spacing-4 flat-categorie">
        <div className="container-full">
          <div className="flat-title-v2">
            <div className="box-sw-navigation">
              <div className="nav-sw nav-next-slider nav-next-collection">
                <span className="icon icon-arrow-left"></span>
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-collection">
                <span className="icon icon-arrow-right"></span>
              </div>
            </div>
            <span className="text-3 fw-7 text-uppercase title wow fadeInUp" data-wow-delay="0s">
              SHOP BY CATEGORIES
            </span>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-8">
              <div
                className="swiper tf-sw-collection"
                data-preview="3"
                data-tablet="2"
                data-mobile="2"
                data-space-lg="30"
                data-space-md="30"
                data-space="15"
                data-loop="false"
                data-auto-play="false"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide" lazy="true">
                    <div className="collection-item style-left hover-img">
                      <div className="collection-inner">
                        <a href="shop-default.html" className="collection-image img-style">
                          <img className="lazyload" src="/assets/images/collections/collection-17.jpg" alt="collection-img" />
                        </a>
                        <div className="collection-content">
                          <a href="shop-default.html" className="tf-btn collection-title hover-icon fs-15">
                            <span>Clothing</span>
                            <i className="icon icon-arrow1-top-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="collection-item style-left hover-img">
                      <div className="collection-inner">
                        <a href="shop-default.html" className="collection-image img-style">
                          <img className="lazyload" src="/assets/images/collections/collection-14.jpg" alt="collection-img" />
                        </a>
                        <div className="collection-content">
                          <a href="shop-default.html" className="tf-btn collection-title hover-icon fs-15">
                            <span>Sunglasses</span>
                            <i className="icon icon-arrow1-top-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="collection-item style-left hover-img">
                      <div className="collection-inner">
                        <a href="shop-default.html" className="collection-image img-style">
                          <img className="lazyload" src="/assets/images/collections/collection-18.jpg" alt="collection-demo-1" />
                        </a>
                        <div className="collection-content">
                          <a href="shop-default.html" className="tf-btn collection-title hover-icon fs-15">
                            <span>Bags</span>
                            <i className="icon icon-arrow1-top-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="collection-item style-left hover-img">
                      <div className="collection-inner">
                        <a href="shop-default.html" className="collection-image img-style">
                          <img className="lazyload" src="/assets/images/collections/collection-15.jpg" alt="collection-demo-1" />
                        </a>
                        <div className="collection-content">
                          <a href="shop-default.html" className="tf-btn collection-title hover-icon fs-15">
                            <span>Fashion</span>
                            <i className="icon icon-arrow1-top-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="collection-item style-left hover-img">
                      <div className="collection-inner">
                        <a href="shop-default.html" className="collection-image img-style">
                          <img className="lazyload" src="/assets/images/collections/collection-20.jpg" alt="collection-demo-1" />
                        </a>
                        <div className="collection-content">
                          <a href="shop-default.html" className="tf-btn collection-title hover-icon fs-15">
                            <span>Accessories</span>
                            <i className="icon icon-arrow1-top-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="discovery-new-item">
                <h5>Discovery all new items</h5>
                <a href="shop-collection-list.html">
                  <i className="icon-arrow1-top-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Categories --> */}
    </>
  );
}

export default Categories;
