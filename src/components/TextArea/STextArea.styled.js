import styled from "styled-components";

const STextArea = styled.textarea`
  width: 100%;
  background-color: white;
  border: solid 2px #0079bf;
  border-radius: 4px;
  max-height: ${({ title }) => (title ? "39px" : "inherit")};
  height: max-content;

  vertical-align: middle;
  padding: 10px 0 0 5px;
  &:focus {
    outline: none;
    border: solid 2px #0079bf;
  }
`;

export { STextArea };
