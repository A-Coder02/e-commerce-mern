import React from "react";
import CategoryBreadCrumb from "../../components/category/CategoryBreadCrumb";
import CategoryFilter from "../../components/category/CategoryFilter";
import CategoryFooter from "../../components/category/CategoryFooter";
import CategoryHeader from "../../components/category/CategoryHeader";
import ProductItemWrapper from "../../components/products/ProductItemWrapper";

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
