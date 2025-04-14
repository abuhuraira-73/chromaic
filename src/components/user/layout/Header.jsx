import React, { useEffect, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import { Link, useNavigate } from "react-router-dom";
import wishlistService from "../../../services/wishlistService";
import cartService from "../../../services/cartService";

function Header() {
  const navigate = useNavigate();

  // Track login status
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("userToken"))
  );

  // Track wishlist count
  const [wishlistCount, setWishlistCount] = useState(0);
  
  // Track cart count
  const [cartCount, setCartCount] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/");
    setTimeout(() => {
      const modalEl = document.getElementById("login");
      if (modalEl && window.bootstrap) {
        let modalInstance = window.bootstrap.Modal.getInstance(modalEl);
        if (!modalInstance) {
          modalInstance = new window.bootstrap.Modal(modalEl);
        }
        modalInstance.show();
      }
    }, 300);
  };

  // Fetch wishlist count from backend if logged in
  useEffect(() => {
    const fetchWishlistCount = async () => {
      if (isLoggedIn) {
        try {
          const wishlist = await wishlistService.getWishlist();
          setWishlistCount(wishlist.length);
        } catch (error) {
          console.error("Failed to fetch wishlist count:", error);
          setWishlistCount(0); // Reset count on error
        }
      }
    };

    fetchWishlistCount();

    // Update count when login status changes
  }, [isLoggedIn]);

  // Fetch cart count from backend if logged in
  useEffect(() => {
    const fetchCartCount = async () => {
      if (isLoggedIn) {
        try {
          const cart = await cartService.getCart();
          setCartCount(cart.length);
        } catch (error) {
          console.error("Failed to fetch cart count:", error);
          setCartCount(0); // Reset count on error
        }
      } else {
        setCartCount(0);
      }
    };

    fetchCartCount();
  }, [isLoggedIn]);

  // Re-fetch wishlist count when storage changes (e.g., item added/removed on another page)
  useEffect(() => {
    const handleStorageChange = async () => {
        if (localStorage.getItem('wishlistUpdated') === 'true') {
            localStorage.removeItem('wishlistUpdated'); // Reset flag
            if (isLoggedIn) {
                try {
                    const wishlist = await wishlistService.getWishlist();
                    setWishlistCount(wishlist.length);
                } catch (error) {
                    console.error("Failed to re-fetch wishlist count:", error);
                }
            }
        }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isLoggedIn]); // Dependency on isLoggedIn ensures it re-runs if user logs in/out

  // Re-fetch cart count when storage changes (e.g., item added/removed on another page)
  useEffect(() => {
    const handleStorageChange = async () => {
        if (localStorage.getItem('cartUpdated') === 'true') {
            localStorage.removeItem('cartUpdated'); // Reset flag
            if (isLoggedIn) {
                try {
                    const cart = await cartService.getCart();
                    setCartCount(cart.length);
                } catch (error) {
                    console.error("Failed to re-fetch cart count:", error);
                }
            }
        }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isLoggedIn]);

  // Listen for custom logout event from sidebar
  useEffect(() => {
    const handleUserLogout = () => {
      setIsLoggedIn(false);
    };

    window.addEventListener('user-logout', handleUserLogout);
    return () => window.removeEventListener('user-logout', handleUserLogout);
  }, []);

  // Check login/logout events from other components
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("userToken")));
    };
    
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  useEffect(() => {
    // Initialize the top bar slider
    new Swiper(".tf-sw-top_bar", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  }, []);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const headerEl = document.getElementById("header");
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < prevScrollPos) {
        headerEl.style.top = "0";
      } else {
        headerEl.style.top = "-100px";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="wrapper">
      <style>
        {`
          .logout-btn {
            background-color: transparent;
            border: 2px solid red;
            border-radius: 50px;
            color: black;
            padding: 10px 20px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .logout-btn:hover {
            background-color: red;
            color: white;
          }
        `}
      </style>

      {/* Top Bar */}
      <div className="tf-top-bar bg_white line">
        <div className="px_15 lg-px_40">
          <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
            <ul className="tf-top-bar_item tf-social-icon d-flex gap-10">
              <li>
                <a href="#" className="box-icon w_28 round social-facebook bg_line">
                  <i className="icon fs-12 icon-fb"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box-icon w_28 round social-twiter bg_line">
                  <i className="icon fs-10 icon-Icon-x"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box-icon w_28 round social-instagram bg_line">
                  <i className="icon fs-12 icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box-icon w_28 round social-tiktok bg_line">
                  <i className="icon fs-12 icon-tiktok"></i>
                </a>
              </li>
              <li>
                <a href="#" className="box-icon w_28 round social-pinterest bg_line">
                  <i className="icon fs-12 icon-pinterest-1"></i>
                </a>
              </li>
            </ul>
            <div className="text-center overflow-hidden">
              <div
                className="swiper tf-sw-top_bar"
                data-preview="1"
                data-space="0"
                data-loop="true"
                data-speed="1000"
                data-delay="2000"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <p className="top-bar-text fw-5">
                      Spring Fashion Sale{" "}
                      <a
                        href="shop-default.html"
                        title="all collection"
                        className="tf-btn btn-line"
                      >
                        Shop now
                        <i className="icon icon-arrow1-top-left"></i>
                      </a>
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <p className="top-bar-text fw-5">
                      Summer sale discount off 70%
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <p className="top-bar-text fw-5">
                      Time to refresh your wardrobe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-bar-language tf-cur justify-content-end"></div>
          </div>
        </div>
      </div>
      {/* /Top Bar */}

      {/* Header */}
      <header
        id="header"
        className="header-default header-absolute"
        style={{ transition: "top 0.3s" }}
      >
        <div className="px_15 lg-px_40">
          <div className="row wrapper-header align-items-center">
            <div className="col-md-4 col-3 tf-lg-hidden">
              <a
                href="#mobileMenu"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="col-xl-3 col-md-4 col-6">
              <a href="index.html" className="logo-header">
                <img
                  src="/assets/images/logo/chromaic-logo-2.png"
                  alt="logo"
                  className="logo"
                />
              </a>
            </div>
            <div className="col-xl-6 tf-md-hidden">
              <nav className="box-navigation text-center">
                <ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">
                  <li className="menu-item">
                    <Link to="/" className="item-link">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/shop" className="item-link">
                      Shop
                    </Link>
                  </li>
                  <li className="menu-item position-relative">
                    <a href="#" className="item-link">
                      About us <i className="icon icon-arrow-down"></i>
                    </a>
                    <div className="sub-menu submenu-default">
                      <ul className="menu-list">
                        <li>
                          <Link to="/aboutus" className="menu-link-text link text_black-2">
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link to="/ourstore" className="menu-link-text link text_black-2">
                            Our Store
                          </Link>
                        </li>
                        <li>
                          <Link to="/timeline" className="menu-link-text link text_black-2">
                            Timeline
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <Link to="/bloggrid" className="item-link">
                      Blog
                    </Link>
                  </li>
                  <li className="menu-item position-relative">
                    <Link to="/contactus" className="item-link">
                      Contact us
                    </Link>
                  </li>
                  <li className="menu-item position-relative">
                    <Link to="/faq" className="item-link">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-3 col-md-4 col-3">
              <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
                <li className="nav-search">
                  <a
                    href="#canvasSearch"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-search"></i>
                  </a>
                </li>
                {isLoggedIn && (
                  <li className="nav-wishlist">
                    <Link to="/wishlist" className="nav-icon-item">
                      <i className="icon icon-heart"></i>
                      <span className="count-box">{wishlistCount}</span>
                    </Link>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-cart">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="nav-icon-item"
                    >
                      <i className="icon icon-bag"></i>
                      <span className="count-box">{cartCount}</span>
                    </a>
                  </li>
                )}
                <li className="nav-account">
                  {isLoggedIn ? (
                    <Link to="/myaccount" className="nav-icon-item">
                      <i className="icon icon-account"></i>
                    </Link>
                  ) : (
                    <a href="#login" data-bs-toggle="modal" className="nav-icon-item">
                      <i className="icon icon-account"></i>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* /Header */}
    </div>
  );
}

export default Header;
