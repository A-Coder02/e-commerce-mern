import React from "react";

const ProductItem = () => {
  return (
    <div className="product-items">
      <a href="#">
        <div style={{ position: "relative" }}>
          <span
            style={{
              display: "none",
            }}
          >
            NEW
          </span>
          <img
            className="show-img"
            src="img/products/laptop/product1/front.jpg"
          />
        </div>
        <p>ASUS VivoBook Ultra K14 (2021), AMD Ryzen 7 5700U, 14-inch FHD</p>
        <div className="price">
          &#8377;<span>50112.30</span>
        </div>

        <span className="product-detail">
          8GB RAM/512GB SSD/Integrated Graphics/Office 2019/Windows
          10/Transparent Silver/1.4 Kg
        </span>
      </a>
    </div>
  );
};

export default ProductItem;
