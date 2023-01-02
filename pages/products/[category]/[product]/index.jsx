import React from "react";
import CategoryBreadCrumb from "../../../../components/category/CategoryBreadCrumb";
import ProductActions from "../../../../components/product/ProductActions";
import ProductDetails from "../../../../components/product/ProductDetails";
import ProductImages from "../../../../components/product/ProductImages";

const Product = () => {
  return (
    <section>
      <CategoryBreadCrumb />
      <div class="product-item-wrapper">
        <ProductImages />
        <ProductDetails />
        <ProductActions />
      </div>
    </section>
  );
};

export default Product;
