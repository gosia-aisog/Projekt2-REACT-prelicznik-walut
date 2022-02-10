import React from "react";
import logo from "../images/logo.jpg";
import { LogoStyle } from "./style/LogoStyle.jsx";

const Logo = () => {
  return <img src={logo} style={LogoStyle}></img>;
};

export default Logo;
