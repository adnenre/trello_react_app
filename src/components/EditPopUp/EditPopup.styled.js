import styled from "styled-components";

const filter = styled.div`
  position: absolute;
  height: 100vh;
  display: ${({ display }) => (display ? "block" : "none")};
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 11;
  background: #2e36439e;
`;
export default filter;

const SPopupWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 272px;
`;
const SPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebecf0;
  padding: ${({ primaryPopup }) => (primaryPopup ? "0.5rem" : "0")};
  border-radius: 3px;
`;

export { SPopupContainer, SPopupWrapper };
