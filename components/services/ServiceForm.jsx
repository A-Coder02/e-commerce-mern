import React from "react";
import CustomButton from "../formUI/CustomButton";
import CustomCheckbox from "../formUI/CustomCheckbox";
import CustomInput from "../formUI/CustomInput";

const SERVICE_DATA = [
  { id: 1, name: "Screen Not Working" },
  { id: 2, name: "KEYBOARD NOT WORKING" },
  { id: 3, name: "DISPLAY REPLACEMENT" },
  { id: 4, name: "LAPTOP NOT WORKING" },
  { id: 5, name: "LAPTOP HANG" },
  { id: 6, name: "BATTERY NOT CHARGING" },
  { id: 7, name: "KEY ACTIVATION" },
  { id: 8, name: "DRIVR'S ISSUE" },
  { id: 9, name: "OS INSTALLATION" },
  { id: 10, name: "MOUSE NOT WORKING" },
  { id: 11, name: "BODY FABRICATION" },
  { id: 12, name: "WIFI NOT WORKING" },
  { id: 13, name: "OVER HITTING" },
  { id: 14, name: "CONNECTOR SIZE" },
  { id: 15, name: "SOUND NOT WORKING" },
  { id: 16, name: "ON OFF LAPTOP/DESKTOP ISSUE" },
  { id: 17, name: "CAMERA NOT WORKING" },
];

const ServiceForm = () => {
  return (
    <form className="service-form" action="" method="POST	">
      <h3>WE ARE REMEDY OF YOUR TECHNICAL SITUATIONS</h3>
      <div className="service-checkbox-wrapper">
        {SERVICE_DATA.map((service) => (
          <CustomCheckbox key={service.id} label={service.name} />
        ))}
      </div>
      <div className="se-a">
        <CustomInput type="text" placeholder="Enter Your Name" />
        <CustomInput type="tel" placeholder="Enter Your Phone Number" />
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomButton type="submit">SUBMIT</CustomButton>
      </div>
    </form>
  );
};

export default ServiceForm;
