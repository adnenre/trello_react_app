import styled from "styled-components";

const STaskItem = styled.div`
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
  cursor: move;
`;
const STaskDescription = styled.p`
  min-height: 20px;
  min-width: 50px;
  width: fit-content;
  cursor: text;
`;

export { STaskItem, STaskDescription };
