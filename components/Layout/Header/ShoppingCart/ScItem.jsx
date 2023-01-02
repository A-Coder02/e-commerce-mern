import React from "react";

const ScItem = () => {
  return (
    <li className="cart-item">
      <img
        className="cart-item-img"
        src="img/products/products-img/product-21.jpeg"
      />
      <p className="cart-item-name">Leather MacPad</p>
      <span className="cart-item-close">
        <i className="fas fa-times fa-2x"></i>
      </span>
      <p className="cart-item-spec">
        {` WITH FELT PADDING 13" - 33.5 X 24 CM (13.1" X 9.4" INCHES) /`}
        Navy
      </p>
      <div className="cart-item-div">
        &#8377;<span className="cart-item-price">6085</span>{" "}
        <span>
          Qty : <span className="qty">1</span>
        </span>
      </div>
    </li>
  );
};

export default ScItem;
