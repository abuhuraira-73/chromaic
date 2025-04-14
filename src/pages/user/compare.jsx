import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuickViewModalNew from "./pages-components/mobile-components/QuickViewModalNew"; // adjust the path as needed

function Compare() {
  const [compareItems, setCompareItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("compareItems")) || [];
    setCompareItems(stored.slice(0, 3));
  }, []);

  const removeItem = (id) => {
    const newItems = compareItems.filter((item) => item.id !== id);
    localStorage.setItem("compareItems", JSON.stringify(newItems));
    setCompareItems(newItems);
  };

  // Helper to join color names
  const getColors = (colors) => {
    if (!colors || colors.length === 0) return "-";
    return colors.map((c) => c.name).join(", ");
  };

  // Helper to join sizes
  const getSizes = (sizes) => {
    if (!sizes || sizes.length === 0) return "-";
    return sizes.join(", ");
  };

  // Helper: Extract materials from attributes (case-insensitive check for "material")
  const getMaterials = (attributes) => {
    if (!attributes || attributes.length === 0) return "-";
    const materialAttributes = attributes.filter((attr) =>
      attr.name.toLowerCase().includes("material")
    );
    return materialAttributes.map((attr) => attr.value).join(", ") || "-";
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Compare Products</div>
        </div>
      </div>
      <section className="flat-spacing-12">
        <div className="container">
          {compareItems.length === 0 ? (
            <p>No products added for comparison.</p>
          ) : (
            <div className="tf-compare-table">
              <div className="tf-compare-row tf-compare-grid">
                <div className="tf-compare-col d-md-block d-none"></div>
                {compareItems.map((item) => (
                  <div key={item.id} className="tf-compare-col">
                    <div className="tf-compare-item">
                      <div className="position-relative">
                        <div
                          className="tf-compare-remove link"
                          onClick={() => removeItem(item.id)}
                          style={{ cursor: "pointer" }}
                        >
                          Remove
                        </div>
                        <a className="tf-compare-image" href="product-detail.html">
                          <img
                            className="lazyload"
                            src={item.images && item.images[0] ? item.images[0] : ""}
                            alt={item.name}
                          />
                        </a>
                        <a className="tf-compare-title" href="product-detail.html">
                          {item.name}
                        </a>
                        <div className="price">
                          {item.salePrice
                            ? `$${parseFloat(item.salePrice).toFixed(2)}`
                            : `$${parseFloat(item.price).toFixed(2)}`}
                        </div>
                        <div className="tf-compare-group-btns d-flex gap-10">
                          <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); setSelectedProduct(item); }}
                            className="tf-btn btn-outline-dark radius-3"
                          >
                            <i className="icon icon-view"></i>
                            <span>QUICK VIEW</span>
                          </a>
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="tf-btn btn-outline-dark radius-3"
                          >
                            <i className="icon icon-bag"></i>
                            <span>QUICK ADD</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Colour</h6>
                </div>
                {compareItems.map((item) => (
                  <div key={item.id} className="tf-compare-col tf-compare-value text-center">
                    {getColors(item.colors)}
                  </div>
                ))}
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Size</h6>
                </div>
                {compareItems.map((item) => (
                  <div key={item.id} className="tf-compare-col tf-compare-value text-center">
                    {getSizes(item.sizes)}
                  </div>
                ))}
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Description</h6>
                </div>
                {compareItems.map((item) => (
                  <div key={item.id} className="tf-compare-col tf-compare-value text-center">
                    {item.description || "-"}
                  </div>
                ))}
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Category</h6>
                </div>
                {compareItems.map((item) => (
                  <div key={item.id} className="tf-compare-col tf-compare-value text-center">
                    {item.category || "-"}
                  </div>
                ))}
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Materials</h6>
                </div>
                {compareItems.map((item) => (
                  <div key={item.id} className="tf-compare-col tf-compare-value text-center">
                    {getMaterials(item.attributes)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      {selectedProduct && (
        <QuickViewModalNew
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default Compare;
