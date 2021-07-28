import React from "react";
import { STextArea } from "./STextArea.styled";
const TextArea = ({ placeholder, value, ...props }) => {
  return <STextArea placeholder={placeholder} value={value} {...props} />;
};

TextArea.defaultProps = {
  placeholder: "Add Description ...",
  value: "",
};
export default TextArea;
