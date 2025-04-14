import React, { useState, useEffect } from "react";

const ModalCompare = () => {
  const [compareItems, setCompareItems] = useState([]);

  // Poll localStorage every 500ms to update compare items dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      const stored = JSON.parse(localStorage.getItem("compareItems")) || [];
      setCompareItems(stored.slice(0, 3));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const removeItem = (indexToRemove) => {
    const newItems = compareItems.filter((_, i) => i !== indexToRemove);
    localStorage.setItem("compareItems", JSON.stringify(newItems));
    setCompareItems(newItems);
  };

  const clearAll = () => {
    localStorage.removeItem("compareItems");
    setCompareItems([]);
  };

  return (
    <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <div className="close-popup">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></span>
          </div>
        </header>
        <div className="canvas-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tf-compare-list">
                  <div className="tf-compare-head">
                    <div className="title">Compare Products</div>
                  </div>
                  <div className="tf-compare-offcanvas">
                    {compareItems.length === 0 ? (
                      <p>No products added for comparison.</p>
                    ) : (
                      compareItems.map((item, index) => (
                        <div key={index} className="tf-compare-item">
                          <div className="position-relative">
                            <div className="icon">
                              <i
                                className="icon-close"
                                onClick={() => removeItem(index)}
                                style={{ cursor: "pointer" }}
                              ></i>
                            </div>
                            <a href="product-detail.html">
                              <img
                                className="radius-3"
                                src={item.images && item.images[0] ? item.images[0] : ""}
                                alt={item.name}
                              />
                            </a>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="tf-compare-buttons">
                    <div className="tf-compare-buttons-wrap">
                      <a
                        href="/compare"
                        className="tf-btn radius-3 btn-fill justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn"
                      >
                        Compare
                      </a>
                      {/* <div
                        className="tf-compapre-button-clear-all link"
                        onClick={clearAll}
                        style={{ cursor: "pointer" }}
                      >
                        Clear All
                      </div> */}
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
};

export default ModalCompare;
