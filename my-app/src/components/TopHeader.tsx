import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import "./topheader.css";
const TopHeader = () => {
  return (
    <div className="topheader">
      <FontAwesomeIcon
        icon={faPhone}
        color="green"
        className="fontawsome-phone"
      ></FontAwesomeIcon>{" "}
      +91 9567238389
      <FontAwesomeIcon
        icon={faMailBulk}
        color="red"
        className="fontawsome-mail"
      ></FontAwesomeIcon>
      lcps.preprimary@learningcurve.in
    </div>
  );
};
export default TopHeader;
