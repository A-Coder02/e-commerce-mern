import React from "react";
import { closeCart, giftL } from "../../../../script";
import ScGiftWrapper from "./ScGiftWrapper";
import ScHeader from "./ScHeader";
import ScItemList from "./ScItemList";
import ScSubTotal from "./ScSubTotal";

const ShoppingCart = () => {
  return (
    <div className="cart-section" id="cart-slot">
      <ScHeader />
      <ScItemList />
      <div
        style={{
          position: "sticky",
          bottom: "0",
        }}
      >
        <ScGiftWrapper />
        <ScSubTotal />
      </div>
    </div>
  );
};

export default ShoppingCart;
