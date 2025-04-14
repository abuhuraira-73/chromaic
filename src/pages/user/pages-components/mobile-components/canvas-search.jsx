import React from "react";

function CanvasSearch() {
  return (
    <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
      <div className="canvas-wrapper">
        {/* Header */}
        <header className="tf-search-head">
          <div className="title fw-5">
            Search our site
            <div className="close">
              <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
            </div>
          </div>
          <div className="tf-search-sticky">
            <form className="tf-mini-search-frm">
              <fieldset className="text">
                <input
                  type="text"
                  placeholder="Search"
                  name="text"
                  required
                />
              </fieldset>
              <button type="submit">
                <i className="icon-search"></i>
              </button>
            </form>
          </div>
        </header>

        {/* Body */}
        <div className="canvas-body p-0">
          <div className="tf-search-content">
            <div className="tf-cart-hide-has-results">
              {/* Quick Links */}
              <div className="tf-col-quicklink">
                <div className="tf-search-content-title fw-5">Quick link</div>
                <ul className="tf-quicklink-list">
                  <li className="tf-quicklink-item">
                    <a href="shop-default.html">Fashion</a>
                  </li>
                  <li className="tf-quicklink-item">
                    <a href="shop-default.html">Men</a>
                  </li>
                  <li className="tf-quicklink-item">
                    <a href="shop-default.html">Women</a>
                  </li>
                  <li className="tf-quicklink-item">
                    <a href="shop-default.html">Accessories</a>
                  </li>
                </ul>
              </div>

              {/* Inspiration Section */}
              <div className="tf-col-content">
                <div className="tf-search-content-title fw-5">Need some inspiration?</div>
                <div className="tf-search-hidden-inner">
                  {/* Product 1 */}
                  <div className="tf-loop-item">
                    <div className="image">
                      <a href="product-detail.html">
                        <img src="assets/images/products/white-3.jpg" alt="Cotton jersey top" />
                      </a>
                    </div>
                    <div className="content">
                      <a href="product-detail.html">Cotton jersey top</a>
                      <div className="tf-product-info-price">
                        <div className="compare-at-price">$10.00</div>
                        <div className="price-on-sale fw-6">$8.00</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product 2 */}
                  <div className="tf-loop-item">
                    <div className="image">
                      <a href="product-detail.html">
                        <img src="assets/images/products/white-2.jpg" alt="Mini crossbody bag" />
                      </a>
                    </div>
                    <div className="content">
                      <a href="product-detail.html">Mini crossbody bag</a>
                      <div className="tf-product-info-price">
                        <div className="price fw-6">$18.00</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product 3 */}
                  <div className="tf-loop-item">
                    <div className="image">
                      <a href="product-detail.html">
                        <img src="assets/images/products/white-1.jpg" alt="Oversized Printed T-shirt" />
                      </a>
                    </div>
                    <div className="content">
                      <a href="product-detail.html">Oversized Printed T-shirt</a>
                      <div className="tf-product-info-price">
                        <div className="price fw-6">$18.00</div>
                      </div>
                    </div>
                  </div>

                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  );
}

export default CanvasSearch;
