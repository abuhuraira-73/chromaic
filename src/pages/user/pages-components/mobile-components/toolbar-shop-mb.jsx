import React from "react";

const ToolbarShopmb = () => {
  return (
    <div className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile" id="toolbarShopmb">
      <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            <li className="nav-mb-item">
              <a href="shop-default.html" className="tf-category-link mb-menu-link">
                <div className="image">
                  <img src="assets/images/shop/cate/cate1.jpg" alt="" />
                </div>
                <span>Accessories</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="shop-default.html" className="tf-category-link mb-menu-link">
                <div className="image">
                  <img src="assets/images/shop/cate/cate2.jpg" alt="" />
                </div>
                <span>Dog</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="shop-default.html" className="tf-category-link mb-menu-link">
                <div className="image">
                  <img src="assets/images/shop/cate/cate3.jpg" alt="" />
                </div>
                <span>Grocery</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="shop-default.html" className="tf-category-link mb-menu-link">
                <div className="image">
                  <img src="assets/images/shop/cate/cate4.png" alt="" />
                </div>
                <span>Handbag</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="#cate-menu-two"
                className="tf-category-link has-children collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="cate-menu-two"
              >
                <div className="image">
                  <img src="assets/images/shop/cate/cate6.jpg" alt="" />
                </div>
                <span>Men</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="cate-menu-two" className="collapse list-cate">
                <ul className="sub-nav-menu" id="cate-menu-navigation1">
                  <li>
                    <a href="shop-default.html" className="tf-category-link sub-nav-link">
                      <div className="image">
                        <img src="assets/images/shop/cate/cate1.jpg" alt="" />
                      </div>
                      <span>Accessories</span>
                    </a>
                  </li>
                  <li>
                    <a href="shop-default.html" className="tf-category-link sub-nav-link">
                      <div className="image">
                        <img src="assets/images/shop/cate/cate8.jpg" alt="" />
                      </div>
                      <span>Shoes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <a href="shop-default.html" className="tf-category-link mb-menu-link">
                <div className="image">
                  <img src="assets/images/shop/cate/cate7.jpg" alt="" />
                </div>
                <span>Tee</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="shop-default.html" className="tf-category-link mb-menu-link">
                <div className="image">
                  <img src="assets/images/shop/cate/cate8.jpg" alt="" />
                </div>
                <span>Shoes</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a
                href="#cate-menu-three"
                className="tf-category-link has-children collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="cate-menu-three"
              >
                <div className="image">
                  <img src="assets/images/shop/cate/cate9.jpg" alt="" />
                </div>
                <span>Women</span>
                <span className="btn-open-sub"></span>
              </a>
              <div id="cate-menu-three" className="collapse list-cate">
                <ul className="sub-nav-menu" id="cate-menu-navigation2">
                  <li>
                    <a href="shop-default.html" className="tf-category-link sub-nav-link">
                      <div className="image">
                        <img src="assets/images/shop/cate/cate4.png" alt="" />
                      </div>
                      <span>Handbag</span>
                    </a>
                  </li>
                  <li>
                    <a href="shop-default.html" className="tf-category-link sub-nav-link">
                      <div className="image">
                        <img src="assets/images/shop/cate/cate7.jpg" alt="" />
                      </div>
                      <span>Tee</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-bottom">
          <a href="shop-default.html" className="tf-btn fw-5 btn-line">
            View all collection
            <i className="icon icon-arrow1-top-left"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolbarShopmb;
