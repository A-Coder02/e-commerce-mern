import Image from "next/image";
import React from "react";

const ScSubTotal = () => {
  return (
    <div className="subtotal-div">
      <h3>
        SubTotal
        <span
          style={{
            display: "inline-block",
            paddingLeft: "8rem",
          }}
        >
          Rs. <span className="subtotal">9999</span>
        </span>
      </h3>
      <div
        style={{
          paddingTop: 0,
          display: "flex",
          justifyContent: "center",
          fontSize: "0.7em",
        }}
      >
        Free Shipping* | 60 Days Returns | 1 Year Warranty
      </div>
      <button className="btns cart-btns">GO TO CHECKOUT</button>
      {/* <p>Taxes included, discounts applied at checkout.</p> */}
      {/* <span className="checkout-cards" style={{ height: "300px" }}>
        <Image fill src="/img/router.jpg" />
      </span> */}
    </div>
  );
};

export default ScSubTotal;
