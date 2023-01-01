import React from "react";
import CustomSearch from "../formUI/CustomSearch";
import CustomSelect from "../formUI/CustomSelect";

const CategoryFilter = () => {
  return (
    <div className="custom-select">
      <div>
        <CustomSelect
          label="brand"
          options={[
            { id: 1, name: "option 1" },
            { id: 2, name: "option 2" },
          ]}
        />

        <CustomSelect
          label="SORT"
          options={[
            { id: 1, name: "Low To High" },
            { id: 2, name: "Heigh To Low" },
            { id: 3, name: "New Arrivels" },
          ]}
        />
      </div>
      <CustomSearch />
    </div>
  );
};

export default CategoryFilter;
