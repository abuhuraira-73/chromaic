import React, { useState, useEffect } from "react";
import axios from "axios";
import PageTitle from "./pages-components/shop-components/page-title";
import FilterSidebar from "./pages-components/shop-components/filter-sidebar";
import ProductCard from "./pages-components/shop-components/product-card";
import QuickViewModalNew from "./pages-components/mobile-components/QuickViewModalNew"; // new modal component
import ModalQuickAdd from "./pages-components/mobile-components/modal-quick-add"; // Add this for Quick Add

function Shop() {
  const [layout, setLayout] = useState("tf-col-3");
  const [sortOption, setSortOption] = useState("featured");
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State for Quick View Modal
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // State for Quick Add Modal
  const [quickAddProduct, setQuickAddProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        const transformed = response.data.map((product) => ({
          id: product._id,
          name: product.title,
          title: product.title,
          price: product.price,
          salePrice: product.salePrice,
          images: product.images,
          sizes: product.sizes,
          discount: product.discount,
          colors: product.colors,
          description: product.description,
          category: product.category,
          attributes: product.attributes, // Added attributes here!
        }));
        setProducts(transformed);
      })
      .catch((error) =>
        console.error("Error fetching products from database:", error)
      );
  }, []);

  const sortedProducts = [...products];
  if (sortOption === "a-z") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "z-a") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOption === "price-low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const filteredProducts = sortedProducts.filter((product) => {
    let match = true;
    if (filters.category) {
      match = match && product.category === filters.category;
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      match = match && product.price >= min && product.price <= max;
    }
    if (filters.color) {
      match =
        match &&
        product.colors.some(
          (c) => c.name.toLowerCase() === filters.color.toLowerCase()
        );
    }
    if (filters.size && filters.size.length > 0) {
      match = match && product.sizes.some((s) => filters.size.includes(s));
    }
    if (filters.brand) {
      match = match && product.brand === filters.brand;
    }
    return match;
  });

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (filterValue === null) {
        delete newFilters[filterName];
      } else {
        newFilters[filterName] = filterValue;
      }
      return newFilters;
    });
  };

  const removeFilter = (filterName) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[filterName];
      return newFilters;
    });
  };

  // Handler for Quick View button in ProductCard
  const handleQuickViewClick = (productData) => {
    setQuickViewProduct(productData);
    
    // Manual bootstrap modal initialization for QuickViewModalNew
    setTimeout(() => {
      const quickViewModal = document.getElementById('quick_view');
      if (quickViewModal) {
        const bsModal = new window.bootstrap.Modal(quickViewModal);
        bsModal.show();
      } else {
        console.error("Could not find quick_view modal element");
      }
    }, 100);
  };

  // Handler for Quick Add button in ProductCard
  const handleQuickAddClick = (productData) => {
    setQuickAddProduct(productData);
    
    // Manual bootstrap modal initialization
    setTimeout(() => {
      const quickAddModal = document.getElementById('quick_add');
      if (quickAddModal) {
        const bsModal = new window.bootstrap.Modal(quickAddModal);
        bsModal.show();
      }
    }, 100);
  };

  // Close handler for Quick View Modal
  const handleCloseQuickView = () => {
    const quickViewModal = document.getElementById('quick_view');
    if (quickViewModal) {
      const bsModal = window.bootstrap.Modal.getInstance(quickViewModal);
      if (bsModal) bsModal.hide();
    }
    setQuickViewProduct(null);
  };

  // Close handler for Quick Add Modal
  const handleCloseQuickAdd = () => {
    const quickAddModal = document.getElementById('quick_add');
    if (quickAddModal) {
      const bsModal = window.bootstrap.Modal.getInstance(quickAddModal);
      if (bsModal) bsModal.hide();
    }
    setQuickAddProduct(null);
  };

  return (
    <>
      <PageTitle />
      <section className="flat-spacing-1">
        <div className="container">
          {/* ... (shop controls, filters, etc.) ... */}
          <div className="tf-row-flex">
            <FilterSidebar onFilterChange={handleFilterChange} filters={filters} />
            <div className="tf-shop-content wrapper-control-shop">
              <div className="meta-filter-shop">
                <div id="product-count-grid" className="count-text">
                  {filteredProducts.length} Products Found
                </div>
                <div
                  id="applied-filters"
                  style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                >
                  {Object.keys(filters).length > 0 &&
                    Object.entries(filters).map(([key, value]) => (
                      <button
                        key={key}
                        className="remove-all-filters"
                        onClick={() => removeFilter(key)}
                      >
                        {key}:{" "}
                        {Array.isArray(value) ? value.join("-") : value}{" "}
                        <i className="icon icon-close"></i>
                      </button>
                    ))}
                </div>
                {Object.keys(filters).length > 0 && (
                  <button
                    id="remove-all"
                    className="remove-all-filters"
                    onClick={() => setFilters({})}
                  >
                    Remove All <i className="icon icon-close"></i>
                  </button>
                )}
              </div>
              <div
                className={
                  layout === "list"
                    ? "tf-list-layout wrapper-shop"
                    : `tf-grid-layout wrapper-shop ${layout}`
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    viewType={layout === "list" ? "list" : "grid"}
                    onQuickView={handleQuickViewClick}
                    onQuickAdd={handleQuickAddClick}
                  />
                ))}
              </div>
              {/* Pagination (omitted for brevity) */}
            </div>
          </div>
        </div>
      </section>

      {/* Render Quick View Modal ONLY when quickViewProduct is set */}
      {quickViewProduct && (
        <QuickViewModalNew
          key={`qv-${quickViewProduct.id}`}
          product={quickViewProduct}
          onClose={handleCloseQuickView}
        />
      )}

      {/* Render Quick Add Modal ONLY when quickAddProduct is set */}
      {quickAddProduct && (
        <ModalQuickAdd
          key={`qa-${quickAddProduct.id}`}
          product={quickAddProduct}
          onClose={handleCloseQuickAdd}
        />
      )}
    </>
  );
}

export default Shop;
