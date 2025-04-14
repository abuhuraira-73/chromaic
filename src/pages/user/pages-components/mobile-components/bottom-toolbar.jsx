import React from "react";

function BottomToolbar() {
  return (
    <>
    <div className="tf-toolbar-bottom type-1150">
      <div className="toolbar-item">
        <a href="#toolbarShopmb" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
          <div className="toolbar-icon">
            <i className="icon-shop"></i>
          </div>
          <div className="toolbar-label">Shop</div>
        </a>
      </div>

      <div className="toolbar-item">
        <a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
          <div className="toolbar-icon">
            <i className="icon-search"></i>
          </div>
          <div className="toolbar-label">Search</div>
        </a>
      </div>

      <div className="toolbar-item">
        <a href="#login" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <i className="icon-account"></i>
          </div>
          <div className="toolbar-label">Account</div>
        </a>
      </div>

      <div className="toolbar-item">
        <a href="wishlist.html">
          <div className="toolbar-icon">
            <i className="icon-heart"></i>
            <div className="toolbar-count">0</div>
          </div>
          <div className="toolbar-label">Wishlist</div>
        </a>
      </div>

      <div className="toolbar-item">
        <a href="#shoppingCart" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <i className="icon-bag"></i>
            <div className="toolbar-count">1</div>
          </div>
          <div className="toolbar-label">Cart</div>
        </a>
      </div>
    </div>
            {/* // <!-- auto popup  --> */}
            <div class="modal modalCentered fade auto-popup modal-newleter">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-top">
                            <img class="lazyload" data-src="assets/images/item/banner-newleter.jpg" src="assets/images/item/banner-newleter.jpg" alt="home-01" />
                            <span class="icon icon-close btn-hide-popup" data-bs-dismiss="modal"></span>
                        </div>
                        <div class="modal-bottom">
                            <h4 class="text-center">Don’t mis out</h4>
                            <h6 class="text-center">
                                Be the first one to get the new product at early bird prices.
                            </h6>
                            <form id="subscribe-form" action="#" class="form-newsletter" method="post" accept-charset="utf-8" data-mailchimp="true">
                                <div id="subscribe-content">
                                    <input type="email" name="email-form" id="subscribe-email" placeholder="Email *" />
                                    <button type="button" id="subscribe-button" class="tf-btn btn-fill radius-3 animate-hover-btn w-100 justify-content-center">
                                        Keep me updated
                                    </button>
                                </div>
                                <div id="subscribe-msg"></div>
                            </form>
                            <div class="text-center">
                                <a href="#" data-bs-dismiss="modal" class="tf-btn btn-line fw-6 btn-hide-popup">Not interested</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</>    
  );
}

export default BottomToolbar;
