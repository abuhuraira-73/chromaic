import React from "react";
function BottomAddToCart() {
    return (
        <>
            <div className="tf-sticky-btn-atc">
                <div className="container">
                    <div className="tf-height-observer w-100 d-flex align-items-center">
                        <div className="tf-sticky-atc-product d-flex align-items-center">
                            <div className="tf-sticky-atc-img">
                                <img
                                    className="lazyloaded"
                                    data-src="/assets/images/shop/products/p-d1.png"
                                    alt=""
                                    src="/assets/images/shop/products/p-d1.png"
                                />
                            </div>
                            <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">
                                Cotton jersey top
                            </div>
                        </div>
                        <div className="tf-sticky-atc-infos">
                            <form className="">
                                <div className="tf-sticky-atc-variant-price text-center">
                                    <select className="tf-select">
                                        <option selected="selected">Beige / S - $8.00</option>
                                        <option>Beige / M - $8.00</option>
                                        <option>Beige / L - $8.00</option>
                                        <option>Beige / XL - $8.00</option>
                                        <option>Black / S - $8.00</option>
                                        <option>Black / M - $8.00</option>
                                        <option>Black / L - $8.00</option>
                                        <option>Black / XL - $8.00</option>
                                        <option>Blue / S - $8.00</option>
                                        <option>Blue / M - $8.00</option>
                                        <option>Blue / L - $8.00</option>
                                        <option>Blue / XL - $8.00</option>
                                        <option>White / S - $8.00</option>
                                        <option>White / M - $8.00</option>
                                        <option>White / L - $8.00</option>
                                        <option>White / XL - $8.00</option>
                                    </select>
                                </div>
                                <div className="tf-sticky-atc-btns">
                                    <div className="tf-product-info-quantity">
                                        <div className="wg-quantity">
                                            <span className="btn-quantity minus-btn">-</span>
                                            <input type="text" name="number" defaultValue="1" />
                                            <span className="btn-quantity plus-btn">+</span>
                                        </div>
                                    </div>
                                    <a
                                        href="javascript:void(0);"
                                        className="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn btn-add-to-cart"
                                    >
                                        <span>Add to cart</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default BottomAddToCart;