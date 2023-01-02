import React from "react";
import { giftL } from "../../../../script";

const ScGiftWrapper = () => {
  return (
    <div className="for-a-gift-wrapper">
      <label for="giftWrap">
        <input type="checkbox" name="giftWrap" id="giftWrap" value="" />
        This is a gift (Free gift wrapping) <i className="fas fa-gift"></i>
      </label>
      <p>
        <a style={{ textDecoration: "underline" }} onClick={giftL}>
          Click Here
        </a>
        to leave a Gift Message or special instructions to seller.
      </p>
      <label for="giftLabel">
        <textarea
          name="note"
          maxlength="160"
          id="giftLabel"
          rows="2"
          cols="50"
          style={{
            position: "relative",
            margin: "5px 11.4444px 0px 0px",
            width: "100%",
            height: "58px",
          }}
        ></textarea>
      </label>
    </div>
  );
};

export default ScGiftWrapper;
