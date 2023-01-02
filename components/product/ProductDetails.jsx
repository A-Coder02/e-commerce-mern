import React from "react";
import Rating from "../formUI/Rating";

const ProductDetails = () => {
  return (
    <div class="product-detail-wrapper">
      <div class="product-detail-header">
        <h1 class="product-name">
          {`HP 15 Thin & Light 15.6"(39.62cms) FHD Laptop`}
        </h1>
        <p class="product-shorts">
          {" "}
          (11th Gen Intel Core i5-1135G7, 8GB DDR4, 1TB HDD, Windows 10 Home, MS
          Office, Integrated Graphics, FPR, Natural Silver, 1.76 Kg),
          15s-du3032TU
        </p>
        <Rating />
        <div class="p-price">
          MRP <span class="price">30000</span>
        </div>
        <div class="product-specs">
          <h2>Product Specifications:</h2>
          <div class="product-spec-grid">
            <div class="product-spec-grid-item">
              <p class="product-spec-grid-item-name">Brand</p>
              <p class="product-spec-grid-item-detail">HP</p>
            </div>
            <div class="product-spec-grid-item">
              <p class="product-spec-grid-item-name">Operating System</p>
              <p class="product-spec-grid-item-detail">Windows 10 Home</p>
            </div>
            <div class="product-spec-grid-item">
              <p class="product-spec-grid-item-name">Processor</p>
              <p class="product-spec-grid-item-detail">i5-1135G7</p>
            </div>
          </div>
          <div class="product-detail-brief">
            <p>
              Processor: 11th Gen Intel Core i5-1135G7 (up to 4.2 GHz with Intel
              Turbo Boost Technology, 8 MB L3 cache, 4 cores) Operating System &
              Preinstalled Software: Windows 10 Home | Microsoft Office Home &
              Student 2019 | In the box: Laptop with included battery, charger
              Display: 15.6-Inch FHD IPS anti-glare micro-edge WLED-backlit, 250
              nits, 45% NTSC (1920 x 1080) Memory & Storage: 8 GB DDR4-2666
              SDRAM (2 x 4 GB), expandable upto 16 GB | 1TB HDD 5400 RPM, M.2
              Slot free Graphics: Intel Iris Xe Graphics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
