import React from "react";
import ScItem from "./ScItem";

const ScItemList = () => {
  return (
    <ul className="cart-item-list" type="none">
      <ScItem />
      <ScItem />
      <ScItem />
    </ul>
  );
};

export default ScItemList;
