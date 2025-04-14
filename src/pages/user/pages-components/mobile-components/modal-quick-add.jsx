import React, { useState, useEffect } from "react";
import cartService from "../../../../services/cartService";

// Renamed component from QuickAdd to ModalQuickAdd for clarity
// Added props: product, onClose
const ModalQuickAdd = ({ product, onClose }) => {

  // State for selected color and size, defaulting to first available if possible
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Update state when the product prop changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0] || null);
      setSelectedSize(product.sizes?.[0] || null);
      setQuantity(1);
    }
  }, [product]);

  // Handle quantity changes
  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount)); // Ensure quantity doesn't go below 1
  };

  // Handle adding to cart
  const handleAddToCart = async () => {
    if (!product) return;
    
    // Check if user is logged in
    const token = localStorage.getItem("userToken");
    if (!token) {
        alert("Please log in to add items to your cart.");
        return;
    }
    
    try {
      // Add the product to cart with selected options
      await cartService.addToCart(product.id, {
        quantity,
        color: selectedColor ? selectedColor.name : null,
        size: selectedSize
      });

      // Set flag to update cart count in header and other components
      localStorage.setItem('cartUpdated', 'true');
      
      // Force the current window to notice the change too
      window.dispatchEvent(new Event('storage'));
      
      // Close the quick add modal
      onClose();
      
      // Wait a tiny bit to ensure modal is closed and flag is processed
      setTimeout(() => {
        // Open the shopping cart modal
        const shoppingCartModal = document.getElementById("shoppingCart");
        if (shoppingCartModal && window.bootstrap) {
          const modal = new window.bootstrap.Modal(shoppingCartModal);
          modal.show();
        }
      }, 100);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  // If no product is passed, don't render the modal content (or show loading/error)
  if (!product) {
    return null; // Or a loading spinner, or keep the modal structure with placeholders
  }

  const displayPrice = product.salePrice || product.price;
  const totalPrice = (displayPrice * quantity).toFixed(2);

  return (
    // Ensure the modal has the ID referenced by the button (id="quick_add")
    <div className="modal fade modalDemo" id="quick_add" tabIndex="-1" aria-labelledby="quickAddLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            {/* Use the passed onClose handler */}
            <span className="icon-close icon-close-popup" onClick={onClose} aria-label="Close"></span>
          </div>
          <div className="wrap">
            <div className="tf-product-info-item">
              <div className="image">
                {/* Use dynamic product image */}
                <img src={product.images?.[0] || 'assets/images/products/default.jpg'} alt={product.name} />
              </div>
              <div className="content">
                {/* Use dynamic product name */}
                <span>{product.name}</span>
                <div className="tf-product-info-price">
                  {/* Show sale price and original price if applicable */}
                  {product.salePrice ? (
                      <>
                          <span className="price-on-sale">${product.salePrice.toFixed(2)}</span>
                          <span className="compare-at-price">${product.price.toFixed(2)}</span>
                          {product.discount && <span className="badges-on-sale">{product.discount}% OFF</span>}
                      </>
                  ) : (
                      <span className="price">${product.price.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Color Variants */}
            {product.colors && product.colors.length > 0 && (
                <div className="tf-product-info-variant-picker mb_15">
                    {/* ... Color selection logic ... */}
                    <div className="variant-picker-item">
                        <div className="variant-picker-label">
                            Color: <span className="fw-6 variant-picker-label-value">{selectedColor?.name || 'N/A'}</span>
                        </div>
                        <div className="variant-picker-values">
                        {product.colors.map((color, index) => (
                            <React.Fragment key={color.name || index}>
                                <input
                                    id={`qa-values-${color.name}-${product.id}`} // Prefix ID for uniqueness
                                    type="radio"
                                    name={`qa-color-${product.id}`}
                                    value={color.name}
                                    checked={selectedColor?.name === color.name}
                                    onChange={() => setSelectedColor(color)}
                                />
                                <label
                                    className="hover-tooltip radius-60"
                                    htmlFor={`qa-values-${color.name}-${product.id}`}
                                    data-value={color.name}
                                >
                                    <span className={`btn-checkbox ${color.className || ''}`} style={{ backgroundColor: color.hexCode }}></span>
                                    <span className="tooltip">{color.name}</span>
                                </label>
                            </React.Fragment>
                        ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Size Variants */}
            {product.sizes && product.sizes.length > 0 && (
                <div className="tf-product-info-variant-picker mb_15">
                    {/* ... Size selection logic ... */}
                    <div className="variant-picker-item">
                        <div className="variant-picker-label">
                             Size: <span className="fw-6 variant-picker-label-value">{selectedSize || 'N/A'}</span>
                        </div>
                         <div className="variant-picker-values">
                            {product.sizes.map((size, index) => (
                                <React.Fragment key={size || index}>
                                    <input
                                        type="radio"
                                        name={`qa-size-${product.id}`}
                                        id={`qa-values-${size}-${product.id}`} // Prefix ID for uniqueness
                                        value={size}
                                        checked={selectedSize === size}
                                        onChange={() => setSelectedSize(size)}
                                    />
                                    <label
                                        className="style-text"
                                        htmlFor={`qa-values-${size}-${product.id}`}
                                        data-value={size}
                                    >
                                        <p>{size}</p>
                                    </label>
                                </React.Fragment>
                            ))}
                         </div>
                    </div>
                </div>
            )}

            {/* Quantity Selector */}
            <div className="tf-product-info-quantity mb_15">
                {/* ... Quantity logic ... */}
                 <div className="quantity-title fw-6">Quantity</div>
                 <div className="wg-quantity">
                    <span className="btn-quantity minus-btn" onClick={() => handleQuantityChange(-1)}>-</span>
                    <input type="text" name="number" value={quantity} readOnly />
                    <span className="btn-quantity plus-btn" onClick={() => handleQuantityChange(1)}>+</span>
                 </div>
            </div>

            {/* Action Buttons */}
            <div className="tf-product-info-buy-button">
                 <button type="button" className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart" onClick={handleAddToCart}>
                    <span>Add to cart &nbsp;</span>
                    <span className="tf-qty-price">${totalPrice}</span>
                 </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalQuickAdd;
