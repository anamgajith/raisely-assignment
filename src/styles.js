import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: --webkit-flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 618px;
  width: ${({ width }) => width || "350px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  display: --webkit-flex;
  justify-content: center;
  align-items: center;
  & img {
    max-width: 100%;
  }
  @media (max-width: 749px) {
    ${({ noPriority }) => (noPriority ? "display: none" : "")}
  }
  @media (max-width: 399px) {
    height: 100vh;
    width: 100vw;
  }
`;
