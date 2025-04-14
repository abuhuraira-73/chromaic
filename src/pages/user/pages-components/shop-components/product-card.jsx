import React from "react";
import wishlistService from "../../../../services/wishlistService"; // Import the service

const ProductCard = ({
  id,
  name,
  price,
  salePrice,
  images = [],
  sizes = [],
  discount,
  colors = [],
  viewType,
  description,
  category,       // extra field from database
  attributes = [], // extra field from database
  onQuickView,
  onQuickAdd
}) => {
  const handleQuickView = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const prodObj = {
      id,
      name,
      title: name,
      price,
      salePrice,
      images,
      sizes,
      discount,
      colors,
      description,
      category,
      attributes,
    };
    console.log("ProductCard: QuickView clicked with product:", prodObj);
    if (onQuickView) {
      onQuickView(prodObj);
    }
  };

  const handleCompare = (e) => {
    e.preventDefault();
    // Get the existing compare items from localStorage (or an empty array)
    let compareItems = JSON.parse(localStorage.getItem("compareItems")) || [];
    // Check if the product is already added by comparing id
    if (!compareItems.find((item) => item.id === id)) {
      if (compareItems.length < 3) {
        // Add extra fields for the Compare page
        compareItems.push({
          id,
          name,
          images,
          price,
          salePrice,
          description,
          sizes,
          colors,
          category,
          attributes,
        });
        localStorage.setItem("compareItems", JSON.stringify(compareItems));
      } else {
        alert("Maximum 3 products allowed for comparison");
      }
    }
    // Offcanvas compare modal opens via the href attribute (href="#compare")
  };

  const handleWishlist = async (e) => {
    e.preventDefault();
    // Check if user is logged in (example, adjust as needed)
    const token = localStorage.getItem("userToken");
    if (!token) {
        alert("Please log in to add items to your wishlist.");
        // Optionally redirect to login or show login modal
        return;
    }

    try {
        // Assuming 'id' prop is the MongoDB _id of the product
        await wishlistService.addToWishlist(id);
        alert("Added to wishlist!");
        // Optionally update UI state or wishlist count here
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        const message = error.response?.data?.message || "Could not add to wishlist. Please try again.";
        if (message === 'Product already in wishlist') {
             alert("This item is already in your wishlist.");
        } else {
             alert(message);
        }
    }
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    const productData = { id, name, price, salePrice, images, sizes, discount, colors, description, category, attributes };
    if (onQuickAdd) {
      onQuickAdd(productData);
    }
  };

  if (viewType === "list") {
    return (
      <div className="card-product list-layout">
        <div className="card-product-wrapper">
          <a href="product-detail.html" className="product-img">
            <img className="lazyload img-product" src={images[0]} alt="product" />
            {images[1] && (
              <img
                className="lazyload img-hover"
                src={images[1]}
                alt="product hover"
              />
            )}
          </a>
        </div>
        <div className="card-product-info">
          <a href="product-detail.html" className="title link">
            {name}
          </a>
          <div className="price-wrapper">
            <span
              className="original-price"
              style={{ textDecoration: "line-through", marginRight: "8px" }}
            >
              ${price.toFixed(2)}
            </span>
            <span className="sale-price">${salePrice.toFixed(2)}</span>
          </div>
          <p className="description">{description}</p>
          <ul className="list-color-product">
            {colors.map((color, index) => (
              <li key={index} className="list-color-item hover-tooltip color-swatch">
                <span className="tooltip">{color.name}</span>
                <span className={`swatch-value ${color.className}`}></span>
                <img className="lazyload" src={color.image} alt={`${color.name} color`} />
              </li>
            ))}
          </ul>
          <div className="list-product-btn absolute-2">
            <a
              href="#"
              className="box-icon bg_white quick-add tf-btn-loading"
              onClick={(e) => {
                e.preventDefault();
                handleQuickAdd(e);
              }}
            >
              <span className="icon icon-bag"></span>
              <span className="tooltip">Quick Add</span>
            </a>
            <a
              href="#"
              className="box-icon bg_white wishlist btn-icon-action"
              onClick={handleWishlist}
            >
              <span className="icon icon-heart"></span>
              <span className="tooltip">Add to Wishlist</span>
              <span className="icon icon-delete"></span>
            </a>
            <a
              href="#compare"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasLeft"
              className="box-icon bg_white compare btn-icon-action"
              onClick={handleCompare}
            >
              <span className="icon icon-compare"></span>
              <span className="tooltip">Add to Compare</span>
              <span className="icon icon-check"></span>
            </a>
            <a
              href="#"
              className="box-icon bg_white quickview tf-btn-loading"
              onClick={(e) => {
                e.preventDefault();
                handleQuickView(e);
              }}
            >
              <span className="icon icon-view"></span>
              <span className="tooltip">Quick View</span>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-product grid">
        <div className="card-product-wrapper">
          <a href="product-detail.html" className="product-img">
            <img className="lazyload img-product" src={images[0]} alt="product" />
            {images[1] && (
              <img className="lazyload img-hover" src={images[1]} alt="product hover" />
            )}
          </a>
          <div className="list-product-btn absolute-2">
            <a
              href="#"
              className="box-icon bg_white quick-add tf-btn-loading"
              onClick={(e) => {
                e.preventDefault();
                handleQuickAdd(e);
              }}
            >
              <span className="icon icon-bag"></span>
              <span className="tooltip">Quick Add</span>
            </a>
            <a
              href="#"
              className="box-icon bg_white wishlist btn-icon-action"
              onClick={handleWishlist}
            >
              <span className="icon icon-heart"></span>
              <span className="tooltip">Add to Wishlist</span>
              <span className="icon icon-delete"></span>
            </a>
            <a
              href="#compare"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasLeft"
              className="box-icon bg_white compare btn-icon-action"
              onClick={handleCompare}
            >
              <span className="icon icon-compare"></span>
              <span className="tooltip">Add to Compare</span>
              <span className="icon icon-check"></span>
            </a>
            <a
              href="#"
              className="box-icon bg_white quickview tf-btn-loading"
              onClick={(e) => {
                e.preventDefault();
                handleQuickView(e);
              }}
            >
              <span className="icon icon-view"></span>
              <span className="tooltip">Quick View</span>
            </a>
          </div>
          <div className="size-list">
            {sizes.map((size, index) => (
              <span key={index} className="size-item">{size}</span>
            ))}
          </div>
          {discount && (
            <div className="on-sale-wrap text-end">
              <div className="on-sale-item">-{discount}%</div>
            </div>
          )}
        </div>
        <div className="card-product-info">
          <a href="product-detail.html" className="title link">{name}</a>
          <div className="price-wrapper">
            <span className="original-price" style={{ textDecoration: "line-through", marginRight: "8px" }}>
              ${price.toFixed(2)}
            </span>
            <span className="sale-price">${salePrice.toFixed(2)}</span>
          </div>
          <p className="description">{description}</p>
          <ul className="list-color-product">
            {colors.map((color, index) => (
              <li key={index} className="list-color-item color-swatch">
                <span className="tooltip">{color.name}</span>
                <span className={`swatch-value ${color.className}`}></span>
                <img className="lazyload" src={color.image} alt={`${color.name} color`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default ProductCard;
