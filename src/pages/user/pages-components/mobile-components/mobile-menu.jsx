import React from "react";

function MobileMenu() {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span>Shop</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span>About us</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span>Store</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span>Blog</span>
              </a>
            </li>
            <li className="nav-mb-item">
              <a href="#" className="mb-menu-link">
                <span>FAQs</span>
              </a>
            </li>
          </ul>
          <div className="mb-other-content">
            <div className="d-flex group-icon">
              <a href="wishlist.html" className="site-nav-icon">
                <i className="icon icon-heart"></i>Wishlist
              </a>
              <a href="home-search.html" className="site-nav-icon">
                <i className="icon icon-search"></i>Search
              </a>
            </div>
            <div className="mb-notice">
              <a href="contact-1.html" className="text-need">Need help? Contact us.</a>
            </div>
            <ul className="mb-info">
              <li>
                Address: 1234 Fashion Street, Suite 567, <br />
                New York, NY 10001
              </li>
              <li>
                Email: <b>info@fashionshop.com</b>
              </li>
              <li>
                Phone: <b>(212) 555-1234</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <a href="login.html" className="site-nav-icon">
            <i className="icon icon-account"></i>Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
