import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import cartService from "../../../../services/cartService";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  
  // Fetch cart items
  const fetchCart = async () => {
    try {
      setLoading(true);
      const data = await cartService.getCart();
      setCartItems(data);
      calculateSubtotal(data);
    } catch (err) {
      console.error("Error fetching cart items:", err);
      setError(err.response?.data?.message || "Failed to load cart. Please try logging in again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchCart();

    // Listen for cart updates via localStorage
    const handleStorageChange = () => {
      if (localStorage.getItem('cartUpdated') === 'true') {
        localStorage.removeItem('cartUpdated');
        fetchCart();
      }
    };

    // Listen for cart modal being shown
    const handleCartModalShown = () => {
      fetchCart();
    };

    // Set up event listeners
    window.addEventListener('storage', handleStorageChange);
    const shoppingCartModal = document.getElementById('shoppingCart');
    
    if (shoppingCartModal) {
      shoppingCartModal.addEventListener('shown.bs.modal', handleCartModalShown);
    }
    
    // Check directly in this component
    if (localStorage.getItem('cartUpdated') === 'true') {
      localStorage.removeItem('cartUpdated');
      fetchCart();
    }

    // Clean up event listeners
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      if (shoppingCartModal) {
        shoppingCartModal.removeEventListener('shown.bs.modal', handleCartModalShown);
      }
    };
  }, []);

  // Calculate subtotal
  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => {
      const price = item.salePrice || item.price;
      return sum + (price * item.quantity);
    }, 0);
    setSubtotal(total);
  };

  // Update quantity
  const handleQuantityChange = async (itemId, change) => {
    const item = cartItems.find(item => item.id === itemId);
    if (!item) return;
    
    const newQuantity = Math.max(1, item.quantity + change);
    if (newQuantity === item.quantity) return;
    
    try {
      await cartService.updateCartItem(itemId, newQuantity);
      const updatedItems = cartItems.map(item => 
        item.id === itemId ? {...item, quantity: newQuantity} : item
      );
      setCartItems(updatedItems);
      calculateSubtotal(updatedItems);
    } catch (err) {
      console.error("Error updating cart item:", err);
      alert("Failed to update quantity. Please try again.");
    }
  };

  // Remove item from cart
  const handleRemoveItem = async (itemId) => {
    try {
      await cartService.removeFromCart(itemId);
      const updatedItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedItems);
      calculateSubtotal(updatedItems);
    } catch (err) {
      console.error("Error removing cart item:", err);
      alert("Failed to remove item. Please try again.");
    }
  };

  return (
    <div className="modal fullRight fade modal-shopping-cart" id="shoppingCart">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="header">
            <div className="title fw-5">Shopping cart</div>
            <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
          </div>
          <div className="wrap">
            <div className="tf-mini-cart-threshold">
              <div className="tf-progress-bar">
                <span style={{ width: subtotal >= 300 ? "100%" : `${(subtotal / 300) * 100}%` }}>
                  <div className="progress-car">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="14"
                      viewBox="0 0 21 14"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z"></path>
                    </svg>
                  </div>
                </span>
              </div>
              <div className="tf-progress-msg">
                {subtotal >= 300 ? (
                  <span className="fw-6">You've got free shipping!</span>
                ) : (
                  <>
                    Buy <span className="price fw-6">${(300 - subtotal).toFixed(2)}</span> more to enjoy{" "}
                    <span className="fw-6">Free Shipping</span>
                  </>
                )}
              </div>
            </div>
            <div className="tf-mini-cart-wrap">
              <div className="tf-mini-cart-main">
                <div className="tf-mini-cart-sroll">
                  {loading ? (
                    <div className="tf-mini-cart-items text-center py-4">
                      Loading cart items...
                    </div>
                  ) : error ? (
                    <div className="tf-mini-cart-items text-center py-4">
                      Error: {error}
                    </div>
                  ) : cartItems.length === 0 ? (
                    <div className="tf-mini-cart-items text-center py-4">
                      Your cart is empty
                    </div>
                  ) : (
                    <div className="tf-mini-cart-items">
                      {cartItems.map((item) => (
                        <div className="tf-mini-cart-item" key={item.id}>
                          <div className="tf-mini-cart-image">
                            <Link to={`/product/${item.id}`}>
                              <img src={item.images[0] || "assets/images/products/default.jpg"} alt={item.name} />
                            </Link>
                          </div>
                          <div className="tf-mini-cart-info">
                            <Link className="title link" to={`/product/${item.id}`}>
                              {item.name}
                            </Link>
                            {item.color && <div className="meta-variant">{item.color}</div>}
                            {item.size && <div className="meta-variant">Size: {item.size}</div>}
                            <div className="price fw-6">
                              ${(item.salePrice || item.price).toFixed(2)}
                            </div>
                            <div className="tf-mini-cart-btns">
                              <div className="wg-quantity small">
                                <span className="btn-quantity minus-btn" onClick={() => handleQuantityChange(item.id, -1)}>-</span>
                                <input type="text" name="number" value={item.quantity} readOnly />
                                <span className="btn-quantity plus-btn" onClick={() => handleQuantityChange(item.id, 1)}>+</span>
                              </div>
                              <div className="tf-mini-cart-remove" onClick={() => handleRemoveItem(item.id)}>Remove</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="tf-mini-cart-bottom">
                <div className="tf-mini-cart-tool">
                  <div className="tf-mini-cart-tool-btn btn-add-note">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="currentColor"
                    >
                      <path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z"></path>
                      <path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z"></path>
                    </svg>
                  </div>
                  <div className="tf-mini-cart-tool-btn btn-add-gift">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.99566 2.73409C2.99566 0.55401 5.42538 -0.746668 7.23916 0.463462L8.50073 1.30516L9.7623 0.463462C11.5761 -0.746668 14.0058 0.55401 14.0058 2.73409V3.24744H14.8225C15.9633 3.24744 16.8881 4.17233 16.8881 5.31312V6.82566C16.8881 7.21396 16.5734 7.52873 16.1851 7.52873H15.8905V15.1877C15.8905 15.1905 15.8905 15.1933 15.8905 15.196C15.886 16.7454 14.6286 18 13.0782 18H3.92323C2.37003 18 1.11091 16.7409 1.11091 15.1877V7.52877H0.81636C0.42806 7.52877 0.113281 7.21399 0.113281 6.82569V5.31316C0.113281 4.17228 1.03812 3.24744 2.179 3.24744H2.99566V2.73409ZM4.40181 3.24744H7.79765V2.52647L6.45874 1.63317C5.57987 1.0468 4.40181 1.67677 4.40181 2.73409V3.24744ZM9.20381 2.52647V3.24744H12.5996V2.73409C12.5996 1.67677 11.4216 1.0468 10.5427 1.63317L9.20381 2.52647ZM2.179 4.6536C1.81472 4.6536 1.51944 4.94888 1.51944 5.31316V6.12261H5.73398L5.734 4.6536H2.179ZM5.73401 7.52877V13.9306C5.73401 14.1806 5.86682 14.4119 6.08281 14.5379C6.29879 14.6639 6.56545 14.6657 6.78312 14.5426L8.50073 13.5715L10.2183 14.5426C10.436 14.6657 10.7027 14.6639 10.9187 14.5379C11.1346 14.4119 11.2674 14.1806 11.2674 13.9306V7.52873H14.4844V15.1603C14.4844 15.1627 14.4843 15.1651 14.4843 15.1675V15.1877C14.4843 15.9643 13.8548 16.5938 13.0782 16.5938H3.92323C3.14663 16.5938 2.51707 15.9643 2.51707 15.1877V7.52877H5.73401ZM15.482 6.12258V5.31312C15.482 4.94891 15.1867 4.6536 14.8225 4.6536H11.2674V6.12258H15.482ZM9.86129 4.6536H7.14017V12.7254L8.15469 12.1518C8.36941 12.0304 8.63204 12.0304 8.84676 12.1518L9.86129 12.7254V4.6536Z"></path>
                    </svg>
                  </div>
                  <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="18"
                      viewBox="0 0 26 18"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0.811989C0 0.36354 0.36354 0 0.811989 0H15.4278C15.8763 0 16.2398 0.36354 16.2398 0.811989V3.10596H21.0144C23.6241 3.10596 25.8643 5.05894 25.8643 7.61523V14.6414C25.8643 15.0899 25.5007 15.4534 25.0523 15.4534H23.545C23.2139 16.9115 21.9098 18 20.3514 18C18.7931 18 17.4889 16.9115 17.1578 15.4534H8.69534C8.36423 16.9115 7.0601 18 5.50175 18C3.9434 18 2.63927 16.9115 2.30815 15.4534H0.811989C0.36354 15.4534 0 15.0899 0 14.6414V0.811989ZM2.35089 13.8294C2.74052 12.4562 4.00366 11.4503 5.50175 11.4503C6.99983 11.4503 8.26298 12.4562 8.6526 13.8294H14.6158V1.62398H1.62398V13.8294H2.35089ZM16.2398 4.72994V7.95749H24.2403V7.61523C24.2403 6.08759 22.8649 4.72994 21.0144 4.72994H16.2398ZM24.2403 9.58147H16.2398V13.8294H17.2006C17.5902 12.4562 18.8533 11.4503 20.3514 11.4503C21.8495 11.4503 23.1126 12.4562 23.5023 13.8294H24.2403V9.58147ZM5.50175 13.0743C4.58999 13.0743 3.85087 13.8134 3.85087 14.7251C3.85087 15.6369 4.58999 16.376 5.50175 16.376C6.41351 16.376 7.15263 15.6369 7.15263 14.7251C7.15263 13.8134 6.41351 13.0743 5.50175 13.0743ZM20.3514 13.0743C19.4397 13.0743 18.7005 13.8134 18.7005 14.7251C18.7005 15.6369 19.4397 16.376 20.3514 16.376C21.2632 16.376 22.0023 15.6369 22.0023 14.7251C22.0023 13.8134 21.2632 13.0743 20.3514 13.0743Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="tf-mini-cart-bottom-wrap">
                  <div className="tf-cart-totals-discounts">
                    <div className="tf-cart-total">Subtotal</div>
                    <div className="tf-totals-total-value fw-6">${subtotal.toFixed(2)} USD</div>
                  </div>
                  <div className="tf-cart-tax">
                    Taxes and <a href="#">shipping</a> calculated at checkout
                  </div>
                  <div className="tf-mini-cart-line"></div>
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input type="checkbox" id="CartDrawer-Form_agree" name="agree_checkbox" />
                      <div>
                        <i className="icon-check"></i>
                      </div>
                    </div>
                    <label htmlFor="CartDrawer-Form_agree">
                      I agree with the{" "}
                      <a href="#" title="Terms of Service">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                  <div className="tf-mini-cart-view-checkout">
                    <Link to="/cart" className="tf-btn btn-outline radius-3 link w-100 justify-content-center">
                      View cart
                    </Link>

                    <Link
                      to="/checkout"
                      className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    >
                      <span>Check out</span>
                    </Link>
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

export default ShoppingCart;
