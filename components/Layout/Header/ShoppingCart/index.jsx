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
      <ScGiftWrapper />
      <ScSubTotal />
    </div>
  );
};

export default ShoppingCart;
