import React from "react";
import PropTypes from "prop-types";
import { STextArea } from "./STextArea.styled";
const TextArea = ({ placeholder, value, ...props }) => {
  return <STextArea placeholder={placeholder} value={value} {...props} />;
};

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
TextArea.defaultProps = {
  placeholder: "Add Description ...",
  value: "",
};
export default TextArea;
