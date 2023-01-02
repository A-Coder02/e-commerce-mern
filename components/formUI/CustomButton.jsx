import React from "react";

const CustomButton = ({ children, ...otherprops }) => {
  return (
    <button
      style={{
        display: "block",
        marginBlock: "auto",
      }}
      className="btns"
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
