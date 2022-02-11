import React from "react";
import logo from "../images/logo.jpg";
import { LogoStyle } from "./style/LogoStyle.jsx";

const Logo = () => {
  return (
    <img
      src={logo}
      style={LogoStyle}
      alt="logo"
      width="300px"
      height="300px"></img>
  );
};

export default Logo;
