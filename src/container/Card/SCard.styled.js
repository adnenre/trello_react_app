import styled from "styled-components";

const SCardWrapper = styled.div`
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`;
const SCard = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
`;

const SCardHeader = styled.div`
  width: inherit;

  height: 40px;
  cursor: pointer;
`;

const SCardBody = styled.div`
  width: inherit;
  padding: 0 0.5rem;
`;
const SCardFooter = styled.div`
  width: inherit;
  padding: 0.5rem;
  color: #172b4d;
`;

export { SCardWrapper, SCard, SCardHeader, SCardBody, SCardFooter };
