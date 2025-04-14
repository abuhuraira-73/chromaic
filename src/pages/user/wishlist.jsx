import React, { useState, useEffect } from "react";
import wishlistService from "../../services/wishlistService";
import { Link } from 'react-router-dom';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await wishlistService.getWishlist();
        setWishlistItems(data);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
        setError(err.response?.data?.message || "Failed to load wishlist. Please try logging in again.");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await wishlistService.removeFromWishlist(productId);
      setWishlistItems(currentItems => currentItems.filter(item => item._id !== productId));
      localStorage.setItem('wishlistUpdated', 'true');
    } catch (err) {
      console.error("Error removing from wishlist:", err);
      alert(err.response?.data?.message || "Failed to remove item. Please try again.");
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      {/* <!-- page-title --> */}
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Your Wishlist</div>
        </div>
      </div>
      {/* <!-- /page-title --> */}
      {/* <!-- Section Product --> */}
      <section className="flat-spacing-2">
        <div className="container">
          {loading && <p>Loading wishlist...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!loading && !error && (
            <div className="grid-layout wrapper-shop" data-grid="grid-4">
              {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
              ) : (
                wishlistItems.map((item) => (
                  <div key={item._id} className="card-product">
                    <div className="card-product-wrapper">
                      <Link to={`/product/${item._id}`} className="product-img">
                        <img
                          className="lazyload img-product"
                          src={item.images?.[0] || '/path/to/default-image.jpg'}
                          alt={item.name}
                        />
                        {item.images?.[1] && (
                          <img
                            className="lazyload img-hover"
                            src={item.images[1]}
                            alt={`${item.name} hover`}
                          />
                        )}
                      </Link>
                      <div className="list-product-btn type-wishlist">
                        <a
                          className="box-icon bg_white wishlist"
                          onClick={() => handleRemoveFromWishlist(item._id)}
                          style={{ cursor: 'pointer' }}
                        >
                          <span className="tooltip">Remove Wishlist</span>
                          <span className="icon icon-delete"></span>
                        </a>
                      </div>
                      <div className="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span className="icon icon-bag"></span>
                          <span className="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <span className="icon icon-compare"></span>
                          <span className="tooltip">Add to Compare</span>
                          <span className="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span className="icon icon-view"></span>
                          <span className="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div className="card-product-info">
                      <Link to={`/product/${item._id}`} className="title link">
                        {item.name}
                      </Link>
                      <span className="price">
                        ${item.salePrice ? item.salePrice.toFixed(2) : item.price.toFixed(2)}
                        {item.salePrice && item.price && <del style={{ marginLeft: '8px', color: '#aaa' }}>${item.price.toFixed(2)}</del>}
                      </span>
                      {item.colors && item.colors.length > 0 && (
                        <ul className="list-color-product">
                          {item.colors.map((color, index) => (
                            <li key={index} className="list-color-item color-swatch">
                              <span className="tooltip">{color.name || 'Color'}</span>
                              <span className={`swatch-value ${color.className || ''}`} style={{ backgroundColor: color.hexCode }}></span>
                              {color.image && <img className="lazyload" src={color.image} alt={`${color.name || 'Color'} swatch`} />}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>
      {/* <!-- /Section Product --> */}
    </>
  );
}

export default Wishlist;
