import React from "react";

const CustomCheckbox = ({ label = "Add Label" }) => {
  return (
    <label>
      <input type="checkbox" /> {label}
    </label>
  );
};

export default CustomCheckbox;
