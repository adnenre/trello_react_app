import React from "react";
import { SButton } from "./Button.styled";

const Button = ({ title, ...props }) => <SButton {...props}>{title}</SButton>;

export default Button;
