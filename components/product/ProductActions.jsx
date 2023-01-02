import Script from "next/script";
import React from "react";

const ProductActions = () => {
  return (
    <div class="product-price">
      <div class="share-links">
        Share With:
        <nav>
          <a href="#">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="far fa-envelope"></i>
          </a>
        </nav>
      </div>
      <div class="product-price-main">
        <label for="qty" style={{ marginBlock: "1rem" }}>
          Quantity:
          <input
            type="number"
            id="qty"
            value="1"
            min="1"
            style={{ marginLeft: "1rem" }}
          />
        </label>
        <div class="btns addtokart">ADD TO CART</div>

        <Script src="script/new.js"></Script>
        <div
          class="btns"
          style={{
            background: "white",
            color: "var(--p-clr)",
            border: "1px var(--p-clr) solid !important",
          }}
        >
          BUY NOW
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
