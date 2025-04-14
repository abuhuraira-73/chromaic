import React, { useState, useEffect } from "react";
import "nouislider/dist/nouislider.css";
import noUiSlider from "nouislider";

function FilterSidebar({ onFilterChange, filters = {}, mobile = false }) {
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    if (onFilterChange) {
      onFilterChange(e.target.name, e.target.value);
    }
  };

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    // Reinitialize Bootstrap Collapse for facet titles after component mounts.
    const collapseTriggers = document.querySelectorAll('[data-bs-toggle="collapse"]');
    collapseTriggers.forEach((trigger) => {
      const targetSelector = trigger.getAttribute("data-bs-target");
      if (targetSelector) {
        const targetEl = document.querySelector(targetSelector);
        if (targetEl) {
          new window.bootstrap.Collapse(targetEl, { toggle: false });
        }
      }
    });

    // Initialize the price slider using noUiSlider.
    const sliderEl = document.getElementById("price-value-range");
    if (sliderEl && noUiSlider) {
      if (sliderEl.noUiSlider) {
        sliderEl.noUiSlider.destroy();
      }
      noUiSlider.create(sliderEl, {
        start: [0, 500],
        connect: true,
        range: {
          min: 0,
          max: 500,
        },
        format: {
          to: (value) => Math.round(value),
          from: (value) => Number(value),
        },
      });
      sliderEl.noUiSlider.on("update", function (values) {
        const minValEl = document.getElementById("price-min-value");
        const maxValEl = document.getElementById("price-max-value");
        if (minValEl && maxValEl) {
          minValEl.innerHTML = "$" + values[0];
          maxValEl.innerHTML = "$" + values[1];
        }
        const minVal = Number(values[0]),
          maxVal = Number(values[1]);
        // Only update filter if values differ from default; otherwise remove filter.
        if (minVal !== 0 || maxVal !== 500) {
          onFilterChange("priceRange", [minVal, maxVal]);
        } else {
          onFilterChange("priceRange", null);
        }
      });
    }
    // Run this effect only once on mount.
  }, []);

  // Define the common filter content
  const filterContent = (
    <>
      <div className="widget-facet wd-categories">
        <div
          className="facet-title"
          data-bs-target="#categories"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="categories"
        >
          <span>Product categories</span>
          <span className="icon icon-arrow-up"></span>
        </div>
        <div id="categories" className="collapse show">
          <ul className="list-categoris current-scrollbar mb_36">
            {categories.map((cat) => (
              <li key={cat._id} className="cate-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onFilterChange) {
                      onFilterChange("category", cat.name);
                    }
                  }}
                >
                  <span>{cat.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget-facet wrap-price">
        <div
          className="facet-title"
          data-bs-target="#price"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="price"
        >
          <span>Price</span>
          <span className="icon icon-arrow-up"></span>
        </div>
        <div id="price" className="collapse show">
          <div className="widget-price filter-price">
            <div
              className="price-val-range"
              id="price-value-range"
              data-min="0"
              data-max="500"
              style={{ width: "100%", height: "8px" }}
            ></div>
            <div className="box-title-price">
              <span className="title-price">Price :</span>
              <div className="caption-price">
                <div className="price-val" id="price-min-value" data-currency="$"></div>
                <span>-</span>
                <div className="price-val" id="price-max-value" data-currency="$"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Availability section commented out as requested */}
      {/*
      <div className="widget-facet">
        <div
          className="facet-title"
          data-bs-target="#availability"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="availability"
        >
          <span>Availability</span>
          <span className="icon icon-arrow-up"></span>
        </div>
        <div id="availability" className="collapse show">
          <ul className="tf-filter-group current-scrollbar mb_36">
            <li className="list-item d-flex gap-12 align-items-center">
              <input
                type="radio"
                name="availability"
                className="tf-check"
                id="inStock"
                value="In stock"
                onChange={handleChange}
                checked={filters.availability === "In stock"}
              />
              <label htmlFor="inStock" className="label">
                <span>In stock</span>&nbsp;<span>(14)</span>
              </label>
            </li>
            <li className="list-item d-flex gap-12 align-items-center">
              <input
                type="radio"
                name="availability"
                className="tf-check"
                id="outStock"
                value="Out of stock"
                onChange={handleChange}
                checked={filters.availability === "Out of stock"}
              />
              <label htmlFor="outStock" className="label">
                <span>Out of stock</span>&nbsp;<span>(2)</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      */}
      <div className="widget-facet">
        <div
          className="facet-title"
          data-bs-target="#color"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="color"
        >
          <span>Color</span>
          <span className="icon icon-arrow-up"></span>
        </div>
        <div id="color" className="collapse show">
          <ul className="tf-filter-group filter-color current-scrollbar mb_36">
            {[
              { label: "Brown", class: "bg-color-brown" },
              { label: "Grey", class: "bg-color-grey" },
              { label: "Orange", class: "bg-color-orange" },
              { label: "Red", class: "bg-color-red" },
              { label: "Blue", class: "bg-color-blue" },
              { label: "White", class: "bg-color-white" },
              { label: "Black", class: "bg-color-black" },
              { label: "Maroon", class: "bg-color-maroon" },
              { label: "Purple", class: "bg-color-purple" },
              { label: "Green", class: "bg-color-green" },
              { label: "Pink", class: "bg-color-pink" }
            ].map((col) => (
              <li key={col.label} className="list-item d-flex gap-12 align-items-center">
                <input
                  type="radio"
                  name="color"
                  className={`tf-check-color ${col.class}`}
                  id={col.label}
                  value={col.label}
                  onChange={handleChange}
                  checked={filters.color === col.label}
                />
                <label htmlFor={col.label} className="label">
                  <span>{col.label}</span>
                  {/* Optionally display count if available */}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget-facet">
        <div
          className="facet-title"
          data-bs-target="#size"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="size"
        >
          <span>Size</span>
          <span className="icon icon-arrow-up"></span>
        </div>
        <div id="size" className="collapse show">
          <ul className="tf-filter-group current-scrollbar">
            {["S", "M", "L", "XL"].map((size) => (
              <li key={size} className="list-item d-flex gap-12 align-items-center">
                <input
                  type="checkbox"
                  name="size"
                  className="tf-check tf-check-size"
                  value={size}
                  id={`values-${size}`}
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newSizes = filters.size ? [...filters.size, size] : [size];
                      onFilterChange("size", newSizes);
                    } else {
                      const newSizes = filters.size ? filters.size.filter(s => s !== size) : [];
                      onFilterChange("size", newSizes.length > 0 ? newSizes : null);
                    }
                  }}
                  checked={filters.size && filters.size.includes(size)}
                />
                <label htmlFor={`values-${size}`} className="label">
                  <span>{size}</span>
                  {/* Optionally display count if available */}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <>
      <style>
        {`
          #price-value-range {
            width: 100%;
            height: 4px;
          }
          #price-value-range .noUi-base {
            background: #ccc;
          }
          #price-value-range .noUi-connect {
            background: #000;
          }
          #price-value-range .noUi-handle {
            background: #000;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            top: -6px;
          }
        `}
      </style>
      {mobile ? (
        <div className="sidebar-mobile-append tf-section-sidebar">
          {filterContent}
        </div>
      ) : (
        <div className="tf-shop-sidebar sidebar-filter canvas-filter left">
          <div className="canvas-wrapper">
            <div className="canvas-header d-flex d-xl-none">
              <div className="filter-icon">
                <span className="icon icon-filter"></span>
                <span>Filter</span>
              </div>
              <span className="icon-close icon-close-popup close-filter"></span>
            </div>
            <div className="canvas-body">
              {filterContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterSidebar;
