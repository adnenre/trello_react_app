import React from "react";
import PropTypes from "prop-types";
import { SLabel } from "./Label.styled";

const Label = ({ value, ...props }) => <SLabel {...props}>{value}</SLabel>;

Label.propTypes = {
  value: PropTypes.string.isRequired,
};
Label.defaultProps = {
  // String
  value: "",
};

export default Label;
