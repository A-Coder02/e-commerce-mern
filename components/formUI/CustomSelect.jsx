import React from "react";

const CustomSelect = ({ label = "Label Here", options = [] }) => {
  return (
    <label>
      {" "}
      <span style={{ marginRight: "1rem" }}> {label}</span>
      <select id="brand">
        <option value="0" selected>
          All
        </option>
        {options.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CustomSelect;
