import React from "react";
import { SHeader, SNavbar } from "./SHeader.styled";

const Header = ({ children }) => {
  return (
    <SHeader>
      <SNavbar>{children}</SNavbar>
    </SHeader>
  );
};

export default Header;
