import styled from "styled-components";

const SButton = styled.button`
  background-color: ${({ primary }) =>
    primary ? "#0079bf" : "rgba(9, 30, 66, 0.04)"};
  box-shadow: none;
  border: none;
  color: ${({ primary }) => (primary ? "#fff" : "#5e6c84")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  padding: 6px 12px;
  text-decoration: none;
  margin-right: 0.5rem;
  box-shadow: none;
  border: none;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  &:hover {
    background-color: ${({ primary }) =>
      primary ? "#0079bf" : "rgba(9, 30, 66, 0.08)"};
  }
`;

export { SButton };
