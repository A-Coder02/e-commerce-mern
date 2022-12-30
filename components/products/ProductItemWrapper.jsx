import React from "react";
import ProductItem from "./ProductItem";

const ProductItemWrapper = ({ data = [] }) => {
  return (
    <div className="product-flex" id="mboard">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductItemWrapper;
