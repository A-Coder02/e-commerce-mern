import React from "react";

import CategoryFooter from "../../../components/category/CategoryFooter";
import CategoryHeader from "../../../components/category/CategoryHeader";
import CategoryBreadCrumb from "../../../components/category/CategoryBreadCrumb";
import CategoryFilter from "../../../components/category/CategoryFilter";
import ProductItemWrapper from "../../../components/products/ProductItemWrapper";
const Category = () => {
  return (
    <>
      <CategoryFilter />
      <CategoryBreadCrumb />
      <div className="product-wrapper">
        <div className="product-refine"></div>
        <CategoryHeader />
        <ProductItemWrapper />
      </div>
      <CategoryFooter />
    </>
  );
};

export default Category;
