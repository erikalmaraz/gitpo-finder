import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#1b1a1b")};
`;


const loadingAnimation = keyframes`
 0% { transform: scale(.5); }
 100% { transform: scale(.7); }
`;

export const LoaderImg = styled.img`
  width: 300px;
  animation-name: ${loadingAnimation};
  animation-duration: .8s;
  animation-iteration-count: infinite;
  filter: ${({ theme }) => (theme === "light" ? "none" : "invert(1)")};
 
`;
