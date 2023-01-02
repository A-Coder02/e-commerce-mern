import React from "react";
import CustomSelect from "../formUI/CustomSelect";

const NetworkingForm = () => {
  return (
    <div className="netowrking-wrapper" style={{ padding: "1rem" }}>
      <h2>ROUTER-MODEM-WIFI SERIVICES</h2>
      <form
        style={{
          display: "grid",
          grid: "repeat(2,1fr)/repeat(auto-fit,270px)",
          gridGap: "10px",
          marginTop: "1rem",
        }}
      >
        <select style={{ padding: "1rem" }}>
          <option value="0">router select</option>
          <option value="1">router 1</option>
          <option value="2">router 2</option>
          <option value="3">router 3</option>
        </select>
        <select id="crimping">
          <option value="0">crimping select</option>
          <option value="1">crimping 1</option>
          <option value="2">crimping 2</option>
          <option value="3">crimping 3</option>
        </select>
        <select id="WLAN">
          <option value="0">WLAN select</option>
          <option value="1">WLAN 1</option>
          <option value="2">WLAN 2</option>
          <option value="3">WLAN 3</option>
        </select>
        <select id="HUB">
          <option value="0">HUB select</option>
          <option value="1">HUB 1</option>
          <option value="2">HUB 2</option>
          <option value="3">HUB 3</option>
        </select>
        <select id="SWITCH">
          <option value="0">SWITCH select</option>
          <option value="1">SWITCH 1</option>
          <option value="2">SWITCH 2</option>
          <option value="3">SWITCH 3</option>
        </select>
        <select id="SWITCH">
          <option value="0">BRIDGE select</option>
          <option value="1">BRIDGE 1</option>
          <option value="2">BRIDGE 2</option>
          <option value="3">BRIDGE 3</option>
        </select>
        <select id="GATEWAY">
          <option value="0">GATEWAY select</option>
          <option value="1">GATEWAY 1</option>
          <option value="2">GATEWAY 2</option>
          <option value="3">GATEWAY 3</option>
        </select>
        <select id="MODEM">
          <option value="0">MODEM select</option>
          <option value="1">MODEM 1</option>
          <option value="2">MODEM 2</option>
          <option value="3">MODEM 3</option>
        </select>
        <select id="ACCESSPOINT">
          <option value="0">ACCESSPOINT select</option>
          <option value="1">ACCESSPOINT 1</option>
          <option value="2">ACCESSPOINT 2</option>
          <option value="3">ACCESSPOINT 3</option>
        </select>
        <select id="REPEATER">
          <option value="0">REPEATER select</option>
          <option value="1">REPEATER 1</option>
          <option value="2">REPEATER 2</option>
          <option value="3">REPEATER 3</option>
        </select>

        <button
          className="btns btn-primary"
          style={{ gridColumn: "3/span 1", width: "200px", marginTop: "1rem" }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default NetworkingForm;
