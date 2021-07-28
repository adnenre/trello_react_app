import React from "react";
import { SLabel } from "./Label.styled";

const Label = ({ value, ...props }) => <SLabel {...props}>{value}</SLabel>;

Label.defaultProps = {
  // String
  value: "",
};

export default Label;
