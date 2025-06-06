import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const QuickViewModal = ({ product }) => {
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("QuickViewModal received product:", product);
    if (product) {
      const productId = product.id || product._id;
      if (productId) {
        setLoading(true);
        axios
          .get(`http://localhost:5000/api/products/${productId}`)
          .then((response) => {
            console.log("API response data:", response.data);
            setProductDetail(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching product details:", error);
            setLoading(false);
          });
      }
    }
  }, [product]);

  if (!product || loading || !productDetail) {
    return (
      <div className="modal fade modalDemo" id="quick_view">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
            </div>
            <div className="wrap">
              <p>Loading product details heheheeh...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const displayProduct = productDetail;

  return (
    <div className="modal fade modalDemo" id="quick_view">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
          </div>
          <div className="wrap">
            <div className="tf-product-media-wrap">
              <Swiper modules={[Navigation]} navigation={{ clickable: true }} className="swiper tf-single-slide">
                {displayProduct.images && displayProduct.images.length > 0 ? (
                  displayProduct.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="item">
                        <img src={img} alt={displayProduct.title} />
                      </div>
                    </SwiperSlide>
                  ))
                ) : null}
              </Swiper>
            </div>
            <div className="tf-product-info-wrap position-relative">
              <div className="tf-product-info-list">
                <div className="tf-product-info-title">
                  <h5>
                    <a className="link" href="product-detail.html">
                      {displayProduct.title}
                    </a>
                  </h5>
                </div>
                <div className="tf-product-info-badges">
                  <div className="badges text-uppercase">Best seller</div>
                  <div className="product-status-content">
                    <i className="icon-lightning"></i>
                    <p className="fw-6">Selling fast! 48 people have this in their carts.</p>
                  </div>
                </div>
                <div className="tf-product-info-price">
                  <div className="price">
                    {displayProduct.salePrice
                      ? `$${parseFloat(displayProduct.salePrice).toFixed(2)}`
                      : "$0.00"}
                  </div>
                </div>
                <div className="tf-product-description">
                  <p>{displayProduct.description}</p>
                </div>
                <div className="tf-product-info-variant-picker">
                  <div className="variant-picker-item">
                    <div className="variant-picker-label">
                      Color:{" "}
                      <span className="fw-6 variant-picker-label-value">
                        {displayProduct.colors && displayProduct.colors.length > 0
                          ? displayProduct.colors[0].name
                          : "N/A"}
                      </span>
                    </div>
                    <div className="variant-picker-values">
                      {displayProduct.colors &&
                        displayProduct.colors.length > 0 &&
                        displayProduct.colors.map((color, index) => (
                          <React.Fragment key={index}>
                            <input
                              id={`color-${index}`}
                              type="radio"
                              name="color-1"
                              defaultChecked={index === 0}
                            />
                            <label
                              className="hover-tooltip radius-60"
                              htmlFor={`color-${index}`}
                              data-value={color.name}
                            >
                              <span className={`btn-checkbox ${color.className}`}></span>
                              <span className="tooltip">{color.name}</span>
                            </label>
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                  <div className="variant-picker-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="variant-picker-label">
                        Size:{" "}
                        <span className="fw-6 variant-picker-label-value">
                          {displayProduct.sizes && displayProduct.sizes.length > 0
                            ? displayProduct.sizes[0]
                            : "N/A"}
                        </span>
                      </div>
                      <div className="find-size btn-choose-size fw-6">Find your size</div>
                    </div>
                    <div className="variant-picker-values">
                      {displayProduct.sizes &&
                        displayProduct.sizes.length > 0 &&
                        displayProduct.sizes.map((size, index) => (
                          <React.Fragment key={index}>
                            <input
                              type="radio"
                              name="size-1"
                              id={`size-${index}`}
                              defaultChecked={index === 0}
                            />
                            <label className="style-text" htmlFor={`size-${index}`} data-value={size}>
                              <p>{size}</p>
                            </label>
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="tf-product-info-quantity">
                  <div className="quantity-title fw-6">Quantity</div>
                  <div className="wg-quantity">
                    <span className="btn-quantity minus-btn">-</span>
                    <input type="text" name="number" defaultValue="1" />
                    <span className="btn-quantity plus-btn">+</span>
                  </div>
                </div>
                <div className="tf-product-info-buy-button">
                  <form className="">
                    <a
                      href="javascript:void(0);"
                      className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                    >
                      <span>Add to cart -&nbsp;</span>
                      <span className="tf-qty-price">
                        {displayProduct.salePrice
                          ? `$${parseFloat(displayProduct.salePrice).toFixed(2)}`
                          : "$0.00"}
                      </span>
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
                        Buy with <img src="assets/images/payments/paypal.png" alt="" />
                      </a>
                      <a href="#" className="payment-more-option">
                        More payment options
                      </a>
                    </div>
                  </form>
                </div>
                <div>
                  <a href="product-detail.html" className="tf-btn fw-6 btn-line">
                    View full details
                    <i className="icon icon-arrow1-top-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
