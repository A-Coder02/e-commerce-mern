import React from "react";
import CategoryBreadCrumb from "../components/category/CategoryBreadCrumb";
import CategoryHeader from "../components/category/CategoryHeader";
import ServiceForm from "../components/services/ServiceForm";

const Services = () => {
  return (
    <section>
      <CategoryBreadCrumb />
      <CategoryHeader />
      <ServiceForm />
    </section>
  );
};

export default Services;
