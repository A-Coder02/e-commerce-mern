import React from "react";
import { closeCart } from "../../../../script";

const ScHeader = () => {
  return (
    <section className="cart-header">
      <h3>
        Your Shopping Cart <br />
        <small>
          (<span id="cart-item-number">1</span> item)
        </small>
      </h3>
      <i id="cart-close" className="fas fa-times" onClick={closeCart}></i>
    </section>
  );
};

export default ScHeader;
